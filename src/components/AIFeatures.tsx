
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Shield, Phone, Brain, Clock, Lock, FileText } from 'lucide-react';

const FEATURES = [
  {
    id: 'face-detection',
    title: 'Face Detection & Recognition',
    description: 'Verify driver identity and ensure only authorized personnel can operate vehicles and equipment.',
    icon: Shield,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'eye-tracking',
    title: 'Eye Tracking & Drowsiness Detection',
    description: 'Monitor blink patterns and eye closure duration to detect early signs of fatigue and drowsiness.',
    icon: Eye,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'distraction',
    title: 'Driver Distraction Detection',
    description: 'Analyze head pose and identify when drivers are looking away from the road or using mobile devices.',
    icon: Phone,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'emotion',
    title: 'Emotion & Stress Monitoring',
    description: 'Detect facial cues that indicate stress, anger, or other emotional states that may affect driving.',
    icon: Brain,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'time-tracking',
    title: 'Driver Time-on-Wheel Tracker',
    description: 'Keep track of continuous driving hours to ensure compliance with safety regulations.',
    icon: Clock,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'privacy',
    title: 'Privacy Pause Button',
    description: 'Give drivers control with a privacy pause feature for when monitoring isn\'t needed.',
    icon: Lock,
    color: 'bg-gray-100 text-gray-600'
  },
  {
    id: 'logging',
    title: 'Logging & Alert History',
    description: 'Maintain comprehensive records of all alerts and incidents for review and analysis.',
    icon: FileText,
    color: 'bg-teal-100 text-teal-600'
  }
];

const AIFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-7 gap-4">
        {FEATURES.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className={`p-4 rounded-lg transition-all ${
              activeFeature === feature.id 
                ? `${feature.color} shadow-md` 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <feature.icon className={`w-6 h-6 mx-auto ${
              activeFeature === feature.id 
                ? '' 
                : 'text-gray-500'
            }`} />
          </button>
        ))}
      </div>
      
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className={`grid md:grid-cols-2 ${activeFeature === feature.id ? 'block' : 'hidden'}`}
            >
              <div className="p-8 space-y-4">
                <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="bg-gray-100 aspect-video">
                <img
                  src={`https://images.unsplash.com/photo-${['1618500304943-2ad5ff2105ec', '1578408025805-a28e95b4ca0d', '1565043589221-5239aad4be2b', '1625243538266-8576bf998957', '1593109034590-3bbc2f960561', '1554474639-4f7aeacbb78f', '1581417478431-aaa2890a764c'][FEATURES.findIndex(f => f.id === feature.id) % 7]}?auto=format&fit=crop&q=80`}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIFeatures;
