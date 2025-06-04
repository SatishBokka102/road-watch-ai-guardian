
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import FEATURES from './AIFeaturesData';

const AIFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);

  const getFeatureImage = (featureId: string) => {
    const imageMap: { [key: string]: string } = {
      'face-detection': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=600',
      'eye-tracking': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=600',
      'distraction': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
      'emotion': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600',
      'time-tracking': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
      'privacy': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=600',
      'logging': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=600'
    };
    return imageMap[featureId] || 'https://images.unsplash.com/photo-1550089479-fe5e8a398182?auto=format&fit=crop&q=80&w=800&h=600';
  };

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
                  src={getFeatureImage(feature.id)}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1550089479-fe5e8a398182?auto=format&fit=crop&q=80&w=800&h=600';
                  }}
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
