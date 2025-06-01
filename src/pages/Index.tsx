
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Lock, Airplane, Train, ShieldCheck } from 'lucide-react';

const Index = () => {
  const [demoStatus, setDemoStatus] = useState({
    eyesClosed: false,
    faceRecognized: true,
    accessGranted: true
  });

  const toggleDemo = (key: keyof typeof demoStatus) => {
    setDemoStatus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=5760&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Badge className="mb-6 px-4 py-2 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors">
            AI Driver Monitoring System
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI That Watches the Road 
            <span className="text-blue-600"> for You</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Face Recognition. Fatigue Detection. Secure Access — built into your existing vehicle cameras.
          </p>
          <p className="text-lg text-gray-500 mb-12 font-medium">
            Prevent Accidents. Protect Lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 transition-colors">
              See How It Works
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50 transition-colors">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=8256&auto=format&fit=crop" 
                alt="Driver fatigue illustration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Fatigue & Unauthorized Access Are 
                <span className="text-red-600"> Silent Killers</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🛑</span>
                  <p className="text-lg text-gray-600">
                    <strong>328,000</strong> drowsy driving crashes occur each year (NHTSA)
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">✈️</span>
                  <p className="text-lg text-gray-600">
                    <strong>13%</strong> of aviation accidents involve fatigue
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🚄</span>
                  <p className="text-lg text-gray-600">
                    Train driver drowsiness has led to <strong>major derailments</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🔐</span>
                  <p className="text-lg text-gray-600">
                    Unauthorized access is a <strong>growing threat</strong> across fleets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software-Only Solution */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            No New Hardware Required
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Compatible with existing dashcams, in-cabin CCTVs, and IP cameras.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-gray-700">Installs on your current system — no hardware upgrades needed</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-gray-700">Supports real-time processing via AI on local or cloud devices</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-gray-700">Compatible with most vehicle-mounted and infrastructure cameras</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <Train className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-gray-700">Ideal for trucks, buses, planes, locomotives, and fleet vehicles</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Three Layers of Intelligent Protection
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Face Recognition</h3>
                <p className="text-gray-600 leading-relaxed">
                  Verify driver identity and log entries with facial biometrics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drowsiness Detection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Analyze eye blinks and head tilt to detect driver fatigue in real time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Lock className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Access Control</h3>
                <p className="text-gray-600 leading-relaxed">
                  Block unauthorized or underage users from accessing controls.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Architecture */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            How the AI System Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold">Camera Input</h3>
              <p className="text-gray-300">Vehicle/CCTV camera captures input</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold">AI Analysis</h3>
              <p className="text-gray-300">AI detects face, age, eye position, and fatigue signs</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl mb-4">🚦</div>
              <h3 className="text-xl font-semibold">Alert System</h3>
              <p className="text-gray-300">Triggers alerts or blocks unauthorized access</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold">Logging</h3>
              <p className="text-gray-300">All actions logged to secure dashboard for review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits by Role */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Tailored for Every Operator
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Drivers</h3>
                    <p className="text-gray-600">Avoid accidents with real-time fatigue alerts and identity-based access.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Airplane className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pilots</h3>
                    <p className="text-gray-600">Prevent drowsiness during long-haul flights and night operations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Loco Pilots</h3>
                    <p className="text-gray-600">Improve railway safety with fatigue monitoring and identity checks.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fleet Managers</h3>
                    <p className="text-gray-600">Secure operations, reduce risk, and log driver behavior data.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Simulator */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experience Real-Time Driver Monitoring
            </h2>
            <p className="text-xl text-gray-600">
              Watch the AI analyze driver status live, with alerts and controls.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black rounded-2xl p-8 relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=7952&auto=format&fit=crop" 
                alt="Driver monitoring demo"
                className="rounded-lg w-full"
              />
              <div className="absolute top-12 right-12 space-y-2">
                <Badge className={`${demoStatus.faceRecognized ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                  {demoStatus.faceRecognized ? 'Face Recognized' : 'Unknown Driver'}
                </Badge>
                <Badge className={`${!demoStatus.eyesClosed ? 'bg-green-500' : 'bg-red-500'} text-white block`}>
                  {!demoStatus.eyesClosed ? 'Eyes Open' : 'Eyes Closed - ALERT!'}
                </Badge>
                <Badge className={`${demoStatus.accessGranted ? 'bg-green-500' : 'bg-red-500'} text-white block`}>
                  {demoStatus.accessGranted ? 'Access Granted' : 'Access Denied'}
                </Badge>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Interactive Controls</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <span className="font-medium">Eyes Closed</span>
                  <Button
                    variant={demoStatus.eyesClosed ? "default" : "outline"}
                    onClick={() => toggleDemo('eyesClosed')}
                  >
                    {demoStatus.eyesClosed ? 'ON' : 'OFF'}
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <span className="font-medium">Face Recognized</span>
                  <Button
                    variant={demoStatus.faceRecognized ? "default" : "outline"}
                    onClick={() => toggleDemo('faceRecognized')}
                  >
                    {demoStatus.faceRecognized ? 'ON' : 'OFF'}
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <span className="font-medium">Access Granted</span>
                  <Button
                    variant={demoStatus.accessGranted ? "default" : "outline"}
                    onClick={() => toggleDemo('accessGranted')}
                  >
                    {demoStatus.accessGranted ? 'ON' : 'OFF'}
                  </Button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">System Log:</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>12:34:56 - Driver identity verified</p>
                  <p>12:35:02 - Monitoring active</p>
                  {demoStatus.eyesClosed && <p className="text-red-600">12:35:15 - ALERT: Eyes closed detected</p>}
                  {!demoStatus.faceRecognized && <p className="text-red-600">12:35:20 - WARNING: Unknown driver</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy You Can Trust
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              All processing is done on-device. No video or data leaves your vehicle without your consent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">Compliant with GDPR, CCPA, and other global privacy standards.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Edge AI Processing</h3>
              <p className="text-gray-600">Edge AI ensures minimal latency and maximum data security.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">User Control</h3>
              <p className="text-gray-600">User consent and control over data sharing at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Supported Camera & Software Environments
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Camera Types</span>
                  <span className="text-gray-600">Dashcams, IR Cameras, IP CCTVs</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Input Format</span>
                  <span className="text-gray-600">720p+, RTSP, MJPEG, H.264</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-900">OS Support</span>
                  <span className="text-gray-600">Windows, Linux, Jetson Nano, Raspberry Pi 4+</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Real-Time Inference</span>
                  <span className="text-gray-600">Yes (0.1s–0.5s latency)</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="font-medium text-gray-900">Cloud Optional</span>
                  <span className="text-gray-600">Edge-first, optional cloud sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Partner with Us to Save Lives
          </h2>
          <p className="text-xl mb-12">
            Looking to implement AI safety across your fleet, airline, or railway?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors">
              Book a Pilot Program
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 transition-colors">
              Get Technical Specs
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build a Safer Future Together
          </h2>
          <p className="text-xl mb-12">
            Join the revolution in intelligent transportation safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 transition-colors">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-400 text-gray-200 hover:bg-gray-800 transition-colors">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
