
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

export default FEATURES;
