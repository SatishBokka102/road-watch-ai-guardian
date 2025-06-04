
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Brain, Info, Shield } from 'lucide-react';
import { useCamera } from '@/hooks/useCamera';
import { useAIDetection } from '@/hooks/useAIDetection';
import CameraFeed from './CameraFeed';
import DetectionStatus from './DetectionStatus';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CameraMonitor = () => {
  const { videoRef, canvasRef, isActive, startCamera, stopCamera } = useCamera();
  const { cvLoaded, aiModelsLoaded, detection, detectFeatures, resetDetection } = useAIDetection();

  const handleStopCamera = () => {
    stopCamera();
    resetDetection();
  };

  useEffect(() => {
    if (isActive && cvLoaded && aiModelsLoaded) {
      const interval = setInterval(() => detectFeatures(videoRef, canvasRef), 200);
      return () => clearInterval(interval);
    }
  }, [isActive, cvLoaded, aiModelsLoaded, detectFeatures, videoRef, canvasRef]);

  const getRuntimeInfo = () => {
    if (!cvLoaded) return { status: 'Loading OpenCV...', icon: '⏳', color: 'text-amber-600' };
    if (!aiModelsLoaded) return { status: 'Loading AI Models...', icon: '⏳', color: 'text-amber-600' };
    
    // This is just a mock detection of WebGPU - in a real app, we'd detect this properly
    const usingWebGPU = window.navigator.userAgent.includes('Chrome');
    
    if (usingWebGPU) {
      return { status: 'Using WebGPU Acceleration', icon: '🚀', color: 'text-green-600' };
    }
    
    return { status: 'Running on CPU', icon: '💻', color: 'text-blue-600' };
  };

  const runtimeInfo = getRuntimeInfo();

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
              <Camera className="w-5 h-5" />
              Advanced AI Driver Monitoring
              {aiModelsLoaded && <Brain className="w-4 h-4 text-blue-500" />}
            </h3>
            <p className="text-gray-600 text-sm">
              Experience real-time AI monitoring using your device camera
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className={`text-sm font-medium ${runtimeInfo.color} flex items-center gap-1`}>
              <span>{runtimeInfo.icon}</span> {runtimeInfo.status}
            </span>
            <Button
              onClick={isActive ? handleStopCamera : startCamera}
              variant={isActive ? "destructive" : "default"}
              disabled={!cvLoaded || !aiModelsLoaded}
              size="sm"
            >
              {isActive ? 'Stop Monitoring' : 'Start AI Monitoring'}
            </Button>
          </div>
        </div>

        {!aiModelsLoaded && (
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Loading AI Runtime</AlertTitle>
            <AlertDescription>
              {!cvLoaded 
                ? 'Loading OpenCV.js for computer vision processing...'
                : 'Loading advanced AI models for face and drowsiness detection...'}
            </AlertDescription>
          </Alert>
        )}

        {aiModelsLoaded && !isActive && (
          <Alert className="mb-6 border-blue-200 bg-blue-50 text-blue-800">
            <Shield className="h-4 w-4" />
            <AlertTitle>Camera Access Required</AlertTitle>
            <AlertDescription>
              Click "Start AI Monitoring" to enable your camera for drowsiness detection.
              Your privacy is protected - all processing happens locally on your device.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <CameraFeed 
              videoRef={videoRef} 
              canvasRef={canvasRef} 
              isActive={isActive} 
            />
          </div>
          <DetectionStatus detection={detection} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CameraMonitor;
