
import React from 'react';
import { Camera } from 'lucide-react';

interface CameraFeedProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  isActive: boolean;
}

const CameraFeed: React.FC<CameraFeedProps> = ({ videoRef, canvasRef, isActive }) => {
  return (
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
            <p>Advanced AI Camera not active</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraFeed;
