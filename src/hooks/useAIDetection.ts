
import { useState, useEffect } from 'react';
import { pipeline } from '@huggingface/transformers';
import { DetectionResults } from '@/components/DetectionStatus';
import { 
  calculateImageBrightness, 
  calculateImageContrast, 
  detectFaceRegions, 
  analyzeEyeArea 
} from '@/utils/detectionUtils';

declare global {
  interface Window {
    cv: any;
  }
}

export const useAIDetection = () => {
  const [cvLoaded, setCvLoaded] = useState(false);
  const [aiModelsLoaded, setAiModelsLoaded] = useState(false);
  const [imageClassifier, setImageClassifier] = useState<any>(null);
  const [detection, setDetection] = useState<DetectionResults>({
    faceDetected: false,
    eyesOpen: true,
    isAuthorized: false,
    alertLevel: 'normal',
    confidence: {
      face: 0,
      eyes: 0,
      drowsiness: 0
    },
    detectionHistory: []
  });

  useEffect(() => {
    const loadModels = async () => {
      try {
        console.log('Loading AI models...');
        
        const classifier = await pipeline(
          'image-classification',
          'onnx-community/mobilenetv4_conv_small.e2400_r224_in1k',
          { device: 'webgpu' }
        );
        setImageClassifier(classifier);
        
        console.log('AI models loaded successfully');
        setAiModelsLoaded(true);
      } catch (error) {
        console.log('WebGPU not available, falling back to CPU');
        try {
          const classifier = await pipeline(
            'image-classification',
            'onnx-community/mobilenetv4_conv_small.e2400_r224_in1k'
          );
          setImageClassifier(classifier);
          setAiModelsLoaded(true);
        } catch (cpuError) {
          console.error('Failed to load AI models:', cpuError);
        }
      }
    };

    const script = document.createElement('script');
    script.src = 'https://docs.opencv.org/4.8.0/opencv.js';
    script.async = true;
    script.onload = () => {
      if (window.cv) {
        window.cv.onRuntimeInitialized = () => {
          console.log('OpenCV loaded successfully');
          setCvLoaded(true);
          loadModels();
        };
      }
    };
    document.head.appendChild(script);
  }, []);

  const detectFeatures = async (videoRef: React.RefObject<HTMLVideoElement>, canvasRef: React.RefObject<HTMLCanvasElement>) => {
    if (!cvLoaded || !aiModelsLoaded || !videoRef.current || !canvasRef.current || !window.cv) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    try {
      const src = window.cv.imread(canvas);
      const gray = new window.cv.Mat();
      
      window.cv.cvtColor(src, gray, window.cv.COLOR_RGBA2GRAY);
      
      let faceDetected = false;
      let faceConfidence = 0;
      let eyeAnalysis = { eyesOpen: true, confidence: 0 };
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const brightness = calculateImageBrightness(imageData);
      const contrast = calculateImageContrast(imageData);
      
      if (brightness > 50 && contrast > 20) {
        const faceRegions = detectFaceRegions(gray);
        
        if (faceRegions.length > 0) {
          faceDetected = true;
          faceConfidence = Math.min(contrast / 50, 1);
          
          eyeAnalysis = analyzeEyeArea(src, faceRegions[0]);
          
          ctx.strokeStyle = eyeAnalysis.eyesOpen ? '#10B981' : '#EF4444';
          ctx.lineWidth = 3;
          ctx.strokeRect(faceRegions[0].x, faceRegions[0].y, faceRegions[0].width, faceRegions[0].height);
          
          const eyeSize = 8;
          const leftEyeX = faceRegions[0].x + faceRegions[0].width * 0.3;
          const rightEyeX = faceRegions[0].x + faceRegions[0].width * 0.7;
          const eyeY = faceRegions[0].y + faceRegions[0].height * 0.4;
          
          ctx.fillStyle = eyeAnalysis.eyesOpen ? '#10B981' : '#EF4444';
          ctx.beginPath();
          ctx.arc(leftEyeX, eyeY, eyeSize, 0, 2 * Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(rightEyeX, eyeY, eyeSize, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
      
      const timestamp = Date.now();
      const newHistory = [...detection.detectionHistory, {
        timestamp,
        eyesOpen: eyeAnalysis.eyesOpen,
        faceDetected
      }].slice(-10);
      
      const recentClosedEyes = newHistory.filter(h => !h.eyesOpen && timestamp - h.timestamp < 3000).length;
      const drowsinessScore = recentClosedEyes / newHistory.length;
      
      setDetection(prev => ({
        faceDetected,
        eyesOpen: eyeAnalysis.eyesOpen,
        isAuthorized: faceDetected && faceConfidence > 0.5,
        alertLevel: drowsinessScore > 0.3 ? 'critical' : !eyeAnalysis.eyesOpen ? 'warning' : 'normal',
        confidence: {
          face: faceConfidence,
          eyes: eyeAnalysis.confidence,
          drowsiness: 1 - drowsinessScore
        },
        detectionHistory: newHistory
      }));

      if (!eyeAnalysis.eyesOpen) {
        ctx.fillStyle = '#EF4444';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('⚠️ DROWSINESS DETECTED!', 20, 40);
      }
      
      if (faceDetected) {
        ctx.fillStyle = '#10B981';
        ctx.font = '16px Arial';
        ctx.fillText(`Face Confidence: ${(faceConfidence * 100).toFixed(1)}%`, 20, canvas.height - 60);
        ctx.fillText(`Eye Confidence: ${(eyeAnalysis.confidence * 100).toFixed(1)}%`, 20, canvas.height - 40);
        ctx.fillText(`Drowsiness Score: ${(drowsinessScore * 100).toFixed(1)}%`, 20, canvas.height - 20);
      }
      
      src.delete();
      gray.delete();
    } catch (error) {
      console.error('Advanced detection error:', error);
    }
  };

  const resetDetection = () => {
    setDetection({
      faceDetected: false,
      eyesOpen: true,
      isAuthorized: false,
      alertLevel: 'normal',
      confidence: { face: 0, eyes: 0, drowsiness: 0 },
      detectionHistory: []
    });
  };

  return {
    cvLoaded,
    aiModelsLoaded,
    detection,
    detectFeatures,
    resetDetection
  };
};
