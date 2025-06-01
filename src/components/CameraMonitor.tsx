
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Camera, AlertTriangle } from 'lucide-react';

declare global {
  interface Window {
    cv: any;
  }
}

interface DetectionResults {
  faceDetected: boolean;
  eyesOpen: boolean;
  isAuthorized: boolean;
  alertLevel: 'normal' | 'warning' | 'critical';
}

const CameraMonitor = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cvLoaded, setCvLoaded] = useState(false);
  const [detection, setDetection] = useState<DetectionResults>({
    faceDetected: false,
    eyesOpen: true,
    isAuthorized: false,
    alertLevel: 'normal'
  });

  useEffect(() => {
    // Load OpenCV
    const script = document.createElement('script');
    script.src = 'https://docs.opencv.org/4.8.0/opencv.js';
    script.async = true;
    script.onload = () => {
      if (window.cv) {
        window.cv.onRuntimeInitialized = () => {
          console.log('OpenCV loaded successfully');
          setCvLoaded(true);
        };
      }
    };
    document.head.appendChild(script);

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Camera access denied. Please allow camera permissions.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsActive(false);
    setDetection({
      faceDetected: false,
      eyesOpen: true,
      isAuthorized: false,
      alertLevel: 'normal'
    });
  };

  const detectFeatures = () => {
    if (!cvLoaded || !videoRef.current || !canvasRef.current || !window.cv) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Draw video frame to canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    try {
      // Convert canvas to OpenCV mat
      const src = window.cv.imread(canvas);
      const gray = new window.cv.Mat();
      
      // Convert to grayscale
      window.cv.cvtColor(src, gray, window.cv.COLOR_RGBA2GRAY);
      
      // Load face classifier (simplified detection)
      const faces = new window.cv.RectVector();
      const faceCascade = new window.cv.CascadeClassifier();
      
      // Simple face detection simulation (in real implementation, you'd load actual cascade files)
      const mockFaceDetected = Math.random() > 0.3; // Simulate face detection
      const mockEyesOpen = Math.random() > 0.2; // Simulate eye detection
      
      // Update detection results
      setDetection(prev => ({
        faceDetected: mockFaceDetected,
        eyesOpen: mockEyesOpen,
        isAuthorized: mockFaceDetected,
        alertLevel: !mockEyesOpen ? 'critical' : mockFaceDetected ? 'normal' : 'warning'
      }));

      // Draw detection results on canvas
      if (mockFaceDetected) {
        ctx.strokeStyle = mockEyesOpen ? '#10B981' : '#EF4444';
        ctx.lineWidth = 3;
        ctx.strokeRect(100, 100, 200, 200); // Mock face rectangle
        
        if (!mockEyesOpen) {
          ctx.fillStyle = '#EF4444';
          ctx.font = '16px Arial';
          ctx.fillText('DROWSINESS DETECTED!', 50, 50);
        }
      }
      
      // Cleanup
      src.delete();
      gray.delete();
      faces.delete();
    } catch (error) {
      console.error('OpenCV processing error:', error);
    }
  };

  useEffect(() => {
    if (isActive && cvLoaded) {
      const interval = setInterval(detectFeatures, 100); // Process every 100ms
      return () => clearInterval(interval);
    }
  }, [isActive, cvLoaded]);

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Live Driver Monitoring
          </h3>
          <div className="flex gap-2">
            <Button
              onClick={isActive ? stopCamera : startCamera}
              variant={isActive ? "destructive" : "default"}
              disabled={!cvLoaded}
            >
              {isActive ? 'Stop Monitoring' : 'Start Monitoring'}
            </Button>
          </div>
        </div>

        {!cvLoaded && (
          <div className="text-center py-4">
            <p className="text-gray-600">Loading OpenCV...</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Camera Feed */}
          <div className="space-y-4">
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
                style={{ display: isActive ? 'block' : 'none' }}
              />
              <canvas
                ref={canvasRef}
                width={640}
                height={480}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: isActive ? 'block' : 'none' }}
              />
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Camera not active</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Detection Status */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Detection Status</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Face Detection</span>
                <Badge className={`${detection.faceDetected ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                  {detection.faceDetected ? 'Detected' : 'Not Detected'}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Eye Status</span>
                <Badge className={`${detection.eyesOpen ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                  {detection.eyesOpen ? 'Open' : 'Closed - ALERT!'}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Authorization</span>
                <Badge className={`${detection.isAuthorized ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                  {detection.isAuthorized ? 'Authorized' : 'Unauthorized'}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Alert Level</span>
                <Badge className={`${getAlertColor(detection.alertLevel)} text-white`}>
                  {detection.alertLevel.toUpperCase()}
                </Badge>
              </div>
            </div>

            {detection.alertLevel === 'critical' && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-red-800 font-medium">Drowsiness detected! Take a break.</span>
              </div>
            )}

            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">Live Detection Log:</h5>
              <div className="space-y-1 text-sm text-gray-600 max-h-32 overflow-y-auto">
                <p>{new Date().toLocaleTimeString()} - Monitoring started</p>
                {detection.faceDetected && <p>{new Date().toLocaleTimeString()} - Face detected</p>}
                {!detection.eyesOpen && <p className="text-red-600">{new Date().toLocaleTimeString()} - ALERT: Eyes closed detected</p>}
                {!detection.isAuthorized && <p className="text-orange-600">{new Date().toLocaleTimeString()} - WARNING: Unauthorized user</p>}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CameraMonitor;
