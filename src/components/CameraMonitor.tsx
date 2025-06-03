
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Brain } from 'lucide-react';
import { useCamera } from '@/hooks/useCamera';
import { useAIDetection } from '@/hooks/useAIDetection';
import CameraFeed from './CameraFeed';
import DetectionStatus from './DetectionStatus';

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

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Advanced AI Driver Monitoring
            {aiModelsLoaded && <Brain className="w-4 h-4 text-blue-500" />}
          </h3>
          <div className="flex gap-2">
            <Button
              onClick={isActive ? handleStopCamera : startCamera}
              variant={isActive ? "destructive" : "default"}
              disabled={!cvLoaded || !aiModelsLoaded}
            >
              {isActive ? 'Stop Monitoring' : 'Start AI Monitoring'}
            </Button>
          </div>
        </div>

        {(!cvLoaded || !aiModelsLoaded) && (
          <div className="text-center py-4">
            <p className="text-gray-600">
              {!cvLoaded ? 'Loading OpenCV...' : 'Loading AI Models...'}
            </p>
          </div>
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
