
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

const TechAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
        <AccordionTrigger className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
          Frameworks & Technologies
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-4">
          <div className="space-y-4">
            <p>
              Built using modern, reliable technologies that ensure performance and stability:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">OpenCV.js</Badge>
              <Badge variant="secondary">HuggingFace Transformers</Badge>
              <Badge variant="secondary">WebGPU</Badge>
              <Badge variant="secondary">WebAssembly</Badge>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
        <AccordionTrigger className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
          AI Runtime & Fallback Logic
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-4">
          <div className="space-y-4">
            <p>
              Our system implements a robust fallback mechanism to ensure reliability across all devices:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Primary: WebGPU for maximum performance on modern hardware</li>
              <li>Secondary: WebAssembly for broad compatibility</li>
              <li>Fallback: CPU processing when hardware acceleration isn't available</li>
              <li>Automatic backend detection and graceful degradation</li>
              <li>Model caching for improved load times on subsequent visits</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
        <AccordionTrigger className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
          Camera & Hardware Compatibility
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-4">
          <div className="space-y-4">
            <p>
              Compatible with a wide range of camera types and hardware configurations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Works with USB cameras, IP cameras, and built-in webcams</li>
              <li>Supports various resolutions (720p recommended minimum)</li>
              <li>Compatible with Raspberry Pi, Jetson Nano, and other edge devices</li>
              <li>Minimal CPU/GPU requirements for basic monitoring</li>
              <li>Advanced features scale with available hardware resources</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-b border-gray-200 py-2">
        <AccordionTrigger className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
          Privacy & Compliance
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-4">
          <div className="space-y-4">
            <p>
              Built with privacy as a core principle, ensuring compliance with global regulations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>GDPR compliant data handling and storage</li>
              <li>Optional fully offline mode with no data leaving the device</li>
              <li>Edge AI processing minimizes data transmission</li>
              <li>Privacy pause feature gives users control over monitoring</li>
              <li>Transparent logging and data retention policies</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="py-2">
        <AccordionTrigger className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
          Deployment Options
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pt-4">
          <div className="space-y-4">
            <p>
              Flexible deployment options to meet your specific needs:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Web-based dashboard accessible from any device</li>
              <li>On-premise installation for maximum security</li>
              <li>Cloud-based monitoring for distributed fleets</li>
              <li>Hybrid solutions combining edge and cloud processing</li>
              <li>API integration with existing fleet management systems</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TechAccordion;
