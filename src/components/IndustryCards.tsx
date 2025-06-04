
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Plane, Train, HardHat, Car } from 'lucide-react';

const industries = [
  {
    title: 'Commercial Fleet Drivers',
    description: 'Keep long-haul truck drivers alert and safe during extended trips, reducing accidents and improving efficiency.',
    icon: Truck,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Airline Pilots',
    description: 'Monitor pilot alertness in cockpits during critical flight phases, enhancing aviation safety protocols.',
    icon: Plane,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    title: 'Train/Locomotive Engineers',
    description: 'Prevent rail accidents by ensuring engineers remain vigilant during long routes and night shifts.',
    icon: Train,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    title: 'Heavy Machinery Operators',
    description: 'Protect operators of cranes, excavators, and other heavy equipment in high-risk construction environments.',
    icon: HardHat,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    title: 'Ride-sharing Drivers',
    description: 'Enhance passenger safety by monitoring driver alertness during long shifts or late-night driving.',
    icon: Car,
    color: 'bg-green-100 text-green-600'
  }
];

const IndustryCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((industry, index) => (
        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-8 flex flex-col h-full">
            <div className={`w-12 h-12 rounded-full ${industry.color} flex items-center justify-center mb-6`}>
              <industry.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
            <p className="text-gray-600 flex-grow">{industry.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default IndustryCards;
