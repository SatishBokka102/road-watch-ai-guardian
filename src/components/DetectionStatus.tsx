
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Check, X, Info } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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
    <div className="space-y-5">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Detection Status</h4>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-medium text-gray-900">Face Detection</h5>
              <div className="flex items-center gap-2">
                {detection.faceDetected ? 
                  <Badge className="bg-green-500 text-white px-3 py-1 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Detected
                  </Badge> : 
                  <Badge className="bg-red-500 text-white px-3 py-1 flex items-center gap-1">
                    <X className="w-3 h-3" /> Not Detected
                  </Badge>
                }
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Confidence</span>
                <span>{(detection.confidence.face * 100).toFixed(0)}%</span>
              </div>
              <Progress value={detection.confidence.face * 100} className="h-1.5" />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-medium text-gray-900">Eye Status</h5>
              <div className="flex items-center gap-2">
                {detection.eyesOpen ? 
                  <Badge className="bg-green-500 text-white px-3 py-1 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Eyes Open
                  </Badge> : 
                  <Badge className="bg-red-500 text-white px-3 py-1 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Closed
                  </Badge>
                }
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Confidence</span>
                <span>{(detection.confidence.eyes * 100).toFixed(0)}%</span>
              </div>
              <Progress value={detection.confidence.eyes * 100} className="h-1.5" />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-medium text-gray-900">Driver Status</h5>
              <div className="flex items-center gap-2">
                <Badge className={`${getAlertColor(detection.alertLevel)} text-white px-3 py-1 flex items-center gap-1`}>
                  {detection.alertLevel === 'normal' ? 
                    <><Check className="w-3 h-3" /> ALERT</> : 
                    detection.alertLevel === 'warning' ? 
                    <><Info className="w-3 h-3" /> CAUTION</> : 
                    <><AlertTriangle className="w-3 h-3" /> DANGER</>
                  }
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Drowsiness Level</span>
                <span>{(100 - detection.confidence.drowsiness * 100).toFixed(0)}%</span>
              </div>
              <Progress value={100 - detection.confidence.drowsiness * 100} className="h-1.5" 
                indicatorClassName={detection.confidence.drowsiness < 0.6 ? "bg-red-500" : 
                  detection.confidence.drowsiness < 0.8 ? "bg-yellow-500" : "bg-green-500"} />
            </div>
          </div>
        </div>
      </div>

      {detection.alertLevel === 'critical' && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <h5 className="text-red-800 font-semibold text-base mb-1">Critical drowsiness detected!</h5>
            <p className="text-red-700 text-sm">
              The system has detected a dangerous level of drowsiness. 
              Take immediate action to prevent an accident.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <h5 className="font-medium mb-3 flex items-center gap-1.5 text-gray-900">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Live Detection Log
        </h5>
        <div className="space-y-2 text-sm text-gray-600 max-h-32 overflow-y-auto">
          <p className="flex items-center justify-between">
            <span>{new Date().toLocaleTimeString()} - AI monitoring active</span>
            <Badge variant="outline" className="text-xs">System</Badge>
          </p>
          {detection.faceDetected && (
            <p className="flex items-center justify-between">
              <span>{new Date().toLocaleTimeString()} - Face detected</span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">Face</Badge>
            </p>
          )}
          {!detection.eyesOpen && (
            <p className="flex items-center justify-between">
              <span className="text-red-600">{new Date().toLocaleTimeString()} - Eyes closed detected</span>
              <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">Alert</Badge>
            </p>
          )}
          {detection.alertLevel === 'critical' && (
            <p className="flex items-center justify-between">
              <span className="text-red-600 font-medium">{new Date().toLocaleTimeString()} - CRITICAL: Drowsiness pattern</span>
              <Badge className="bg-red-500 text-white text-xs">Critical</Badge>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetectionStatus;
