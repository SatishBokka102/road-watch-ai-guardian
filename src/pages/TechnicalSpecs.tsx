
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, CheckCircle, Cpu, Camera, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnicalSpecs = () => {
  const downloadSpecs = () => {
    // In a real app, this would trigger a PDF download
    alert('Technical specifications PDF will be downloaded shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive technical details for IT teams and system integrators.
          </p>
          <Button onClick={downloadSpecs} className="inline-flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Full Specs PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Camera Compatibility</h3>
              <p className="text-gray-600">Works with existing dashcams, IP cameras, and CCTV systems</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Cpu className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Edge Processing</h3>
              <p className="text-gray-600">Real-time AI processing with minimal latency</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Security & Privacy</h3>
              <p className="text-gray-600">GDPR compliant with on-device processing</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hardware Requirements</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-4">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Minimum CPU</td>
                      <td className="py-4 text-gray-600">Intel i5 / AMD Ryzen 5 or equivalent ARM processor</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">RAM</td>
                      <td className="py-4 text-gray-600">4GB minimum, 8GB recommended</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Storage</td>
                      <td className="py-4 text-gray-600">2GB for software, additional for logs</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">GPU (Optional)</td>
                      <td className="py-4 text-gray-600">NVIDIA CUDA compatible for enhanced performance</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-gray-900">Operating System</td>
                      <td className="py-4 text-gray-600">Windows 10+, Ubuntu 18.04+, Raspberry Pi OS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Camera Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Supported Formats</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">RTSP streams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">MJPEG</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">H.264/H.265</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">USB cameras</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Resolution & Performance</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Resolution</span>
                      <Badge variant="outline">720p</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recommended</span>
                      <Badge variant="outline">1080p</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frame Rate</span>
                      <Badge variant="outline">15-30 FPS</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Latency</span>
                      <Badge variant="outline">0.1-0.5s</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Face Recognition</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 99.7% accuracy rate</li>
                    <li>• Works in low light</li>
                    <li>• Multiple face detection</li>
                    <li>• Age estimation</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Drowsiness Detection</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Eye closure monitoring</li>
                    <li>• Head pose analysis</li>
                    <li>• Yawn detection</li>
                    <li>• Fatigue scoring</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Access Control</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Identity verification</li>
                    <li>• Age restriction</li>
                    <li>• Blacklist checking</li>
                    <li>• Session logging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration & APIs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">REST API Endpoints</h3>
                  <div className="space-y-2 text-sm">
                    <code className="block bg-gray-100 p-2 rounded">GET /api/status</code>
                    <code className="block bg-gray-100 p-2 rounded">POST /api/drivers</code>
                    <code className="block bg-gray-100 p-2 rounded">GET /api/alerts</code>
                    <code className="block bg-gray-100 p-2 rounded">GET /api/reports</code>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Webhooks & Events</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Real-time alert notifications</div>
                    <div>• Driver session events</div>
                    <div>• System health monitoring</div>
                    <div>• Custom event triggers</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Deployment Options</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Edge Device</h3>
                  <p className="text-sm text-gray-600">Install on vehicle computer or edge device</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Service</h3>
                  <p className="text-sm text-gray-600">Managed cloud deployment with API access</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Hybrid</h3>
                  <p className="text-sm text-gray-600">Edge processing with cloud analytics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button onClick={downloadSpecs} size="lg" className="inline-flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Complete Technical Documentation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
