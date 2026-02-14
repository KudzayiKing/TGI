
// Fix: Added React import to resolve namespace issues
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  image: string;
}

export interface MiningStats {
  label: string;
  value: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
