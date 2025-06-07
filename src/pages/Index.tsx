
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
import { ThemeToggle } from '@/components/ThemeToggle';
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">WatchAI Guardian</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-muted-foreground hover:text-blue-600 transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-muted-foreground hover:text-blue-600 transition-colors">
              Industries
            </button>
            <button onClick={() => scrollToSection('demo')} className="text-muted-foreground hover:text-blue-600 transition-colors">
              Demo
            </button>
            <ThemeToggle />
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
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              AI Driver Monitoring System
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Live AI Monitoring to Keep Every Journey Safe
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
                className="px-8"
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
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-card p-1 border border-border">
            <img
              src="/lovable-uploads/b487853a-0fd5-47a9-a060-dfa29ee07b16.png"
              alt="AI Driver Monitoring System with face recognition, drowsiness detection, and vehicle access control"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/50 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              Smart Detection
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">AI-Powered Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced computer vision algorithms to enhance driver safety
            </p>
          </div>
          
          <AIFeatures />
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 bg-muted/50 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              Versatile Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              Try It Yourself
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Live Camera Demo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience real-time AI monitoring using your device camera
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <CameraMonitor />
          </div>
        </div>
      </section>

      {/* Alert Dashboard */}
      <section id="dashboard" className="py-24 bg-muted/50 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              Management Console
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Real-Time Alert Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              Under The Hood
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Technical Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced edge AI technology with seamless fallback options
            </p>
          </div>
          
          <TechAccordion />
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-24 bg-muted px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="px-3 py-1 bg-blue-50 text-blue-600 border-blue-100 font-medium dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
              Coming Soon
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Future Enhancements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our roadmap for even more powerful safety features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="text-3xl mb-6">🌙</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Night Vision AI Mode</h3>
              <p className="text-muted-foreground">
                Enhanced infrared monitoring for low-light conditions, ensuring 24/7 driver safety regardless of time or weather.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="text-3xl mb-6">💨</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">CO2-Based Drowsiness Indicators</h3>
              <p className="text-muted-foreground">
                Advanced cabin air quality monitoring to detect dangerous CO2 levels that contribute to driver fatigue.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="text-3xl mb-6">🔓</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Driver Unlock by Facial ID</h3>
              <p className="text-muted-foreground">
                Secure biometric vehicle access that prevents unauthorized use and eliminates the need for physical keys.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="text-3xl mb-6">🔌</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Vehicle Control System API</h3>
              <p className="text-muted-foreground">
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
      <footer className="py-12 bg-muted/50 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Camera className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-lg text-foreground">WatchAI Guardian</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced AI monitoring system to keep drivers safe and prevent accidents before they happen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-muted-foreground hover:text-blue-600">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('features')} className="text-sm text-muted-foreground hover:text-blue-600">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('industries')} className="text-sm text-muted-foreground hover:text-blue-600">
                    Industries
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('demo')} className="text-sm text-muted-foreground hover:text-blue-600">
                    Demo
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-blue-600">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:satishbokka102@gmail.com" className="text-sm text-muted-foreground hover:text-blue-600">
                    satishbokka102@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918096780014" className="text-sm text-muted-foreground hover:text-blue-600">
                    +91 8096780014
                  </a>
                </li>
                <li>
                  <button onClick={() => navigate('/contact')} className="text-sm text-muted-foreground hover:text-blue-600">
                    Contact Form
                  </button>
                </li>
                <li>
                  <a href="https://satish-bokka-portfolio-spark.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-blue-600">
                    Developer Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-4 border-t border-border flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} WatchAI Guardian. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built by <a href="https://satish-bokka-portfolio-spark.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Satish</a> ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
