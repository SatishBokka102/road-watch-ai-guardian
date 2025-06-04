
import React from 'react';
import { Camera, Brain, Bell } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
          <Camera className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">1. Capture</h3>
        <p className="text-gray-600">
          Connect to your device or in-vehicle camera system. Works with existing hardware - no need for specialized equipment.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
          <Brain className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">2. Analyze</h3>
        <p className="text-gray-600">
          AI models detect drowsiness, identity verification, and emotional state in real-time using advanced computer vision.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
          <Bell className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">3. Alert</h3>
        <p className="text-gray-600">
          Receive immediate warnings and notifications when signs of drowsiness or distraction are detected to prevent accidents.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
