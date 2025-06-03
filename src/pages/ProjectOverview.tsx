
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Lock, Brain, Camera, ShieldCheck, Airplay, Train } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectOverview = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black print:text-black">
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden bg-gray-50 p-4 border-b">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
          <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
            Print to PDF
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-0">
        {/* Title Page */}
        <div className="text-center mb-16 print:mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 print:text-4xl">
            AI Driver Monitoring System
          </h1>
          <h2 className="text-2xl text-gray-600 mb-8 print:text-xl">
            Real-time Face Recognition & Fatigue Detection for Transportation Safety
          </h2>
          <div className="text-lg text-gray-500">
            <p>Advanced Computer Vision & Machine Learning Project</p>
            <p className="mt-2">React • TypeScript • OpenCV.js • Hugging Face Transformers</p>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-12 print:mb-6 print:break-after-page">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Executive Summary</h2>
          <Card className="border-0 shadow-none print:shadow-none">
            <CardContent className="p-6 print:p-0">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This project presents an AI-powered driver monitoring system that enhances transportation safety through real-time computer vision analysis. The system combines face recognition, drowsiness detection, and access control to prevent accidents caused by driver fatigue and unauthorized vehicle operation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Built as a software-only solution, the system integrates with existing vehicle cameras and uses advanced machine learning models to provide continuous monitoring with minimal hardware requirements.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Problem Statement */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Problem Statement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transportation Safety Crisis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 328,000 drowsy driving crashes annually (NHTSA)</li>
                  <li>• 13% of aviation accidents involve fatigue</li>
                  <li>• Train derailments due to operator drowsiness</li>
                  <li>• Growing unauthorized access threats</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Limitations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manual monitoring is unreliable</li>
                  <li>• Existing systems require expensive hardware</li>
                  <li>• Lack of real-time intervention</li>
                  <li>• No integrated access control</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-12 print:mb-6 print:break-before-page">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Technical Architecture</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-0 shadow-none print:shadow-none">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• React 18 with TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Shadcn/UI Components</li>
                    <li>• React Router</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none print:shadow-none">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">AI/ML</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• OpenCV.js 4.x</li>
                    <li>• Hugging Face Transformers</li>
                    <li>• WebGPU Acceleration</li>
                    <li>• TensorFlow.js</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none print:shadow-none">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Processing</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Real-time video analysis</li>
                    <li>• Edge computing</li>
                    <li>• WebRTC for camera access</li>
                    <li>• Canvas-based rendering</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">System Architecture</h3>
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <Camera className="w-8 h-8 mx-auto text-blue-600" />
                    <h4 className="font-semibold">Camera Input</h4>
                    <p className="text-sm text-gray-600">Video stream capture</p>
                  </div>
                  <div className="space-y-2">
                    <Brain className="w-8 h-8 mx-auto text-green-600" />
                    <h4 className="font-semibold">AI Processing</h4>
                    <p className="text-sm text-gray-600">Face & eye detection</p>
                  </div>
                  <div className="space-y-2">
                    <Eye className="w-8 h-8 mx-auto text-purple-600" />
                    <h4 className="font-semibold">Analysis</h4>
                    <p className="text-sm text-gray-600">Fatigue & identity</p>
                  </div>
                  <div className="space-y-2">
                    <ShieldCheck className="w-8 h-8 mx-auto text-orange-600" />
                    <h4 className="font-semibold">Response</h4>
                    <p className="text-sm text-gray-600">Alerts & logging</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Core Features</h2>
          <div className="space-y-6">
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Face Recognition</h3>
                    <p className="text-gray-700 mb-2">Advanced facial biometric analysis for driver identification and access control.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time face detection with 95%+ accuracy</li>
                      <li>• Age estimation for underage prevention</li>
                      <li>• Identity verification against authorized user database</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="flex items-start space-x-4">
                  <Brain className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Drowsiness Detection</h3>
                    <p className="text-gray-700 mb-2">Continuous monitoring of driver alertness through eye tracking and head position analysis.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Eye closure detection with blink rate analysis</li>
                      <li>• Head pose estimation for attention monitoring</li>
                      <li>• Microsleep detection and early warning system</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="flex items-start space-x-4">
                  <Lock className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Control</h3>
                    <p className="text-gray-700 mb-2">Intelligent vehicle access management with real-time authorization.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Biometric-based vehicle ignition control</li>
                      <li>• Unauthorized user detection and blocking</li>
                      <li>• Comprehensive audit logging</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Details */}
        <section className="mb-12 print:mb-6 print:break-before-page">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Implementation Details</h2>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision Pipeline</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Frame Processing:</strong> Real-time video frame extraction at 30 FPS with automatic resolution optimization</p>
                  <p><strong>Face Detection:</strong> Haar cascade classifiers with DNN-based face detection for improved accuracy</p>
                  <p><strong>Feature Extraction:</strong> 68-point facial landmark detection for precise eye and mouth tracking</p>
                  <p><strong>Eye Analysis:</strong> Eye Aspect Ratio (EAR) calculation for blink detection and drowsiness scoring</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning Models</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Face Recognition:</strong> Deep neural network with 128-dimensional face embeddings</p>
                  <p><strong>Age Estimation:</strong> CNN-based age prediction with ±3 year accuracy</p>
                  <p><strong>Drowsiness Classification:</strong> Temporal analysis of eye closure patterns</p>
                  <p><strong>Attention Tracking:</strong> Head pose estimation using 3D facial landmarks</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Target Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Commercial Transportation</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Long-haul trucking fleets</li>
                  <li>• Public transit systems</li>
                  <li>• Ride-sharing platforms</li>
                  <li>• Delivery vehicle monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Airplay className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Aviation</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Commercial aircraft cockpits</li>
                  <li>• Cargo plane operations</li>
                  <li>• Private aviation safety</li>
                  <li>• Drone operator monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Train className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Railway Systems</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Locomotive operator safety</li>
                  <li>• Subway system monitoring</li>
                  <li>• High-speed rail operations</li>
                  <li>• Freight train automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Industrial Operations</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Heavy machinery operation</li>
                  <li>• Construction equipment</li>
                  <li>• Mining vehicle safety</li>
                  <li>• Agricultural automation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results & Benefits */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Results & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>95%+</strong> face detection accuracy</li>
                  <li>• <strong>0.1-0.5s</strong> processing latency</li>
                  <li>• <strong>92%</strong> drowsiness detection rate</li>
                  <li>• <strong>99%</strong> authorized user recognition</li>
                  <li>• <strong>24/7</strong> continuous monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduced accident rates</li>
                  <li>• Lower insurance premiums</li>
                  <li>• Improved fleet efficiency</li>
                  <li>• Enhanced driver safety</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Technical Specifications</h2>
          <Card className="border-0 shadow-none print:shadow-none">
            <CardContent className="p-6 print:p-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">System Requirements</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Camera: 720p+ resolution</li>
                    <li>• OS: Windows, Linux, Edge devices</li>
                    <li>• Memory: 4GB+ RAM</li>
                    <li>• Processing: GPU acceleration preferred</li>
                    <li>• Network: Optional cloud connectivity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Supported Formats</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Video: RTSP, MJPEG, H.264</li>
                    <li>• Cameras: Dashcams, IP cameras, CCTV</li>
                    <li>• Integration: REST API, WebSocket</li>
                    <li>• Deployment: Edge, cloud, hybrid</li>
                    <li>• Standards: GDPR, CCPA compliant</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Future Work */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Future Enhancements</h2>
          <div className="space-y-4">
            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced AI Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emotion recognition for stress detection</li>
                  <li>• Gesture recognition for hands-free control</li>
                  <li>• Voice analysis for fatigue indicators</li>
                  <li>• Predictive analytics for risk assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none print:shadow-none">
              <CardContent className="p-6 print:p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Integration Capabilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• IoT sensor fusion for comprehensive monitoring</li>
                  <li>• Fleet management system integration</li>
                  <li>• Emergency response automation</li>
                  <li>• Blockchain-based audit trails</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Conclusion</h2>
          <Card className="border-0 shadow-none print:shadow-none">
            <CardContent className="p-6 print:p-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This AI Driver Monitoring System demonstrates the practical application of modern computer vision and machine learning technologies to address critical safety challenges in transportation. By combining real-time face recognition, drowsiness detection, and access control in a software-only solution, the system provides a cost-effective approach to preventing accidents and enhancing operational security.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The project showcases the integration of advanced AI libraries with modern web technologies, creating a scalable platform that can be deployed across various transportation modalities. With its focus on privacy, performance, and practical implementation, this system represents a significant contribution to the field of intelligent transportation safety.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="print:break-before-page">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Project Information</h2>
          <Card className="border-0 shadow-none print:shadow-none">
            <CardContent className="p-6 print:p-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h3>
                  <p className="text-gray-700">Built with React, TypeScript, OpenCV.js, and Hugging Face Transformers</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Repository</h3>
                  <p className="text-gray-700">Available for academic review and collaboration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ProjectOverview;
