
import React from 'react';
import { Camera, Shield } from 'lucide-react';

interface CameraFeedProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  isActive: boolean;
}

const CameraFeed: React.FC<CameraFeedProps> = ({ videoRef, canvasRef, isActive }) => {
  return (
    <div className="relative bg-black rounded-xl overflow-hidden aspect-video shadow-md border border-gray-200">
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
          <div className="text-center text-white p-6">
            <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">AI Camera Inactive</h3>
            <p className="text-gray-300 text-sm">
              Click "Start AI Monitoring" to activate the camera
            </p>
            <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-center gap-2 text-xs text-gray-400">
              <Shield className="w-3 h-3" />
              <span>Your privacy is protected - all processing happens locally</span>
            </div>
          </div>
        </div>
      )}
      <div className="absolute top-3 left-3">
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${isActive ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'}`}>
          <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-pulse' : 'bg-gray-400'}`}></span>
          {isActive ? 'LIVE' : 'OFF'}
        </div>
      </div>
    </div>
  );
};

export default CameraFeed;
