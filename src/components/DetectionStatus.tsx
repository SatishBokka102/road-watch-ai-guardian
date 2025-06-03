
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';

export interface DetectionResults {
  faceDetected: boolean;
  eyesOpen: boolean;
  isAuthorized: boolean;
  alertLevel: 'normal' | 'warning' | 'critical';
  confidence: {
    face: number;
    eyes: number;
    drowsiness: number;
  };
  detectionHistory: Array<{
    timestamp: number;
    eyesOpen: boolean;
    faceDetected: boolean;
  }>;
}

interface DetectionStatusProps {
  detection: DetectionResults;
}

const DetectionStatus: React.FC<DetectionStatusProps> = ({ detection }) => {
  const getAlertColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">AI Detection Status</h4>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Face Detection</span>
          <div className="flex items-center gap-2">
            <Badge className={`${detection.faceDetected ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {detection.faceDetected ? 'Detected' : 'Not Detected'}
            </Badge>
            <span className="text-xs text-gray-500">
              {(detection.confidence.face * 100).toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Eye Status</span>
          <div className="flex items-center gap-2">
            <Badge className={`${detection.eyesOpen ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {detection.eyesOpen ? 'Open' : 'Closed - ALERT!'}
            </Badge>
            <span className="text-xs text-gray-500">
              {(detection.confidence.eyes * 100).toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Authorization</span>
          <Badge className={`${detection.isAuthorized ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {detection.isAuthorized ? 'Authorized' : 'Unauthorized'}
          </Badge>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Alert Level</span>
          <div className="flex items-center gap-2">
            <Badge className={`${getAlertColor(detection.alertLevel)} text-white`}>
              {detection.alertLevel.toUpperCase()}
            </Badge>
            <span className="text-xs text-gray-500">
              Drowsiness: {(detection.confidence.drowsiness * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {detection.alertLevel === 'critical' && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <span className="text-red-800 font-medium">Critical drowsiness detected! Take immediate action.</span>
        </div>
      )}

      <div className="bg-white p-4 rounded-lg border">
        <h5 className="font-semibold mb-2">AI Detection Log:</h5>
        <div className="space-y-1 text-sm text-gray-600 max-h-32 overflow-y-auto">
          <p>{new Date().toLocaleTimeString()} - AI monitoring started</p>
          {detection.faceDetected && <p>{new Date().toLocaleTimeString()} - Face detected with {(detection.confidence.face * 100).toFixed(1)}% confidence</p>}
          {!detection.eyesOpen && <p className="text-red-600">{new Date().toLocaleTimeString()} - ALERT: Eyes closed detected</p>}
          {!detection.isAuthorized && <p className="text-orange-600">{new Date().toLocaleTimeString()} - WARNING: Unauthorized user</p>}
          {detection.alertLevel === 'critical' && <p className="text-red-600 font-bold">{new Date().toLocaleTimeString()} - CRITICAL: Drowsiness pattern detected</p>}
        </div>
      </div>
    </div>
  );
};

export default DetectionStatus;
