import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Camera,
  Shield,
  Activity,
  Clock,
  AlertTriangle,
  Truck,
  Plane,
  Train,
  HardHat,
  Car,
  ChevronDown
} from 'lucide-react';
import CameraMonitor from '@/components/CameraMonitor';
import AIFeatures from '@/components/AIFeatures';
import HowItWorks from '@/components/HowItWorks';
import IndustryCards from '@/components/IndustryCards';
import TechAccordion from '@/components/TechAccordion';
import AlertDashboard from '@/components/AlertDashboard';

const Index = () => {
  const navigate = useNavigate();
  const [demoActive, setDemoActive] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">WatchAI Guardian</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Industries
            </button>
            <button onClick={() => scrollToSection('demo')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Demo
            </button>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium">
              AI Driver Monitoring System
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Live AI Monitoring to Keep Every Journey Safe
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience real-time driver safety powered by OpenCV and AI – right from your vehicle's existing camera.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="px-8 text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
                onClick={() => scrollToSection('demo')}
              >
                Start Live Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 border-gray-300"
                onClick={() => navigate('/demo-request')}
              >
                Request a Free Trial
              </Button>
            </div>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Badge variant="outline" className="py-1.5 px-3">
                <Shield className="w-4 h-4 mr-1" /> GDPR Compliant
              </Badge>
              <Badge variant="outline" className="py-1.5 px-3">
                <Activity className="w-4 h-4 mr-1" /> Fleet-ready
              </Badge>
              <Badge variant="outline" className="py-1.5 px-3">
                <Clock className="w-4 h-4 mr-1" /> Real-time Alerts
              </Badge>
              <Badge variant="outline" className="py-1.5 px-3">
                <AlertTriangle className="w-4 h-4 mr-1" /> Accident Prevention
              </Badge>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-1 border border-gray-100">
            <img
              src="/lovable-uploads/b487853a-0fd5-47a9-a060-dfa29ee07b16.png"
              alt="AI Driver Monitoring System with face recognition, drowsiness detection, and vehicle access control"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI system seamlessly integrates with your existing camera infrastructure
            </p>
          </div>
          
          <HowItWorks />
        </div>
      </section>

      {/* AI Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium">
              Smart Detection
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">AI-Powered Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced computer vision algorithms to enhance driver safety
            </p>
          </div>
          
          <AIFeatures />
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium">
              Versatile Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored monitoring for various transportation and heavy machinery sectors
            </p>
          </div>
          
          <IndustryCards />
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium">
              Try It Yourself
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Live Camera Demo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience real-time AI monitoring using your device camera
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <CameraMonitor />
          </div>
        </div>
      </section>

      {/* Alert Dashboard */}
      <section id="dashboard" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium">
              Management Console
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Real-Time Alert Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Monitor your entire fleet from a single intuitive interface
            </p>
          </div>
          
          <AlertDashboard />
        </div>
      </section>

      {/* Technical Overview */}
      <section id="tech" className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium">
              Under The Hood
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Technical Overview</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced edge AI technology with seamless fallback options
            </p>
          </div>
          
          <TechAccordion />
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-800 text-blue-200 border-blue-700 font-medium">
              Coming Soon
            </Badge>
            <h2 className="text-4xl font-bold">Future Enhancements</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our roadmap for even more powerful safety features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="text-3xl mb-6">🌙</div>
              <h3 className="text-xl font-bold mb-4">Night Vision AI Mode</h3>
              <p className="text-gray-300">
                Enhanced infrared monitoring for low-light conditions, ensuring 24/7 driver safety regardless of time or weather.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="text-3xl mb-6">💨</div>
              <h3 className="text-xl font-bold mb-4">CO2-Based Drowsiness Indicators</h3>
              <p className="text-gray-300">
                Advanced cabin air quality monitoring to detect dangerous CO2 levels that contribute to driver fatigue.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="text-3xl mb-6">🔓</div>
              <h3 className="text-xl font-bold mb-4">Driver Unlock by Facial ID</h3>
              <p className="text-gray-300">
                Secure biometric vehicle access that prevents unauthorized use and eliminates the need for physical keys.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="text-3xl mb-6">🔌</div>
              <h3 className="text-xl font-bold mb-4">Vehicle Control System API</h3>
              <p className="text-gray-300">
                Direct integration with vehicle systems for automatic safety interventions when critical alerts are detected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Prevent Accidents Before They Happen?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Join fleets worldwide that are enhancing driver safety with WatchAI Guardian's real-time monitoring
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                size="lg" 
                className="px-8 bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => navigate('/demo-request')}
              >
                Request a Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 border-white text-white hover:bg-blue-700"
                onClick={() => navigate('/technical-specs')}
              >
                View Technical Specs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Camera className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-lg">WatchAI Guardian</span>
              </div>
              <p className="text-sm text-gray-600">
                Advanced AI monitoring system to keep drivers safe and prevent accidents before they happen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-gray-600 hover:text-blue-600">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('features')} className="text-sm text-gray-600 hover:text-blue-600">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('industries')} className="text-sm text-gray-600 hover:text-blue-600">
                    Industries
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('demo')} className="text-sm text-gray-600 hover:text-blue-600">
                    Demo
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                    Privacy & GDPR
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:satishbokka102@gmail.com" className="text-sm text-gray-600 hover:text-blue-600">
                    satishbokka102@gmail.com
                  </a>
                </li>
                <li>
                  <button onClick={() => navigate('/contact')} className="text-sm text-gray-600 hover:text-blue-600">
                    Contact Form
                  </button>
                </li>
                <li>
                  <a href="https://satish-bokka-portfolio-spark.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
                    Developer Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-4 border-t border-gray-200 flex flex-wrap justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} WatchAI Guardian. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Built by <a href="https://satish-bokka-portfolio-spark.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Satish</a> ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
