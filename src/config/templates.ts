import { PostTemplate } from '../types';

export const templateStyles: Record<string, PostTemplate> = {
  modern: {
    id: 'modern',
    name: 'Modern',
    style: {
      backgroundColor: '#ffffff',
      textColor: '#333333',
      fontFamily: 'Inter, sans-serif',
      layout: 'centered'
    }
  },
  bold: {
    id: 'bold',
    name: 'Bold',
    style: {
      backgroundColor: '#ff6b35',
      textColor: '#ffffff',
      fontFamily: 'Montserrat, sans-serif',
      layout: 'centered'
    }
  },
  elegant: {
    id: 'elegant',
    name: 'Elegant',
    style: {
      backgroundColor: '#f8f9fa',
      textColor: '#2c3e50',
      fontFamily: 'Playfair Display, serif',
      layout: 'left'
    }
  },
  playful: {
    id: 'playful',
    name: 'Playful',
    style: {
      backgroundColor: '#ffeaa7',
      textColor: '#2d3436',
      fontFamily: 'Poppins, sans-serif',
      layout: 'overlay'
    }
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    style: {
      backgroundColor: '#34495e',
      textColor: '#ecf0f1',
      fontFamily: 'Source Sans Pro, sans-serif',
      layout: 'left'
    }
  },
  creative: {
    id: 'creative',
    name: 'Creative',
    style: {
      backgroundColor: '#a29bfe',
      textColor: '#2d3436',
      fontFamily: 'Nunito, sans-serif',
      layout: 'overlay'
    }
  }
};