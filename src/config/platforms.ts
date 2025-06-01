import { SocialPlatform } from '../types';

export const platformConfigs: Record<SocialPlatform, {
  name: string;
  dimensions: string;
  aspectRatio: number;
  maxTextLength: number;
}> = {
  'instagram-post': {
    name: 'Instagram Post',
    dimensions: '1080x1080',
    aspectRatio: 1,
    maxTextLength: 2200
  },
  'instagram-story': {
    name: 'Instagram Story',
    dimensions: '1080x1920',
    aspectRatio: 9/16,
    maxTextLength: 200
  },
  'facebook-post': {
    name: 'Facebook Post',
    dimensions: '1200x630',
    aspectRatio: 1.91,
    maxTextLength: 500
  },
  'twitter-post': {
    name: 'Twitter/X Post',
    dimensions: '1200x675',
    aspectRatio: 16/9,
    maxTextLength: 280
  },
  'linkedin-post': {
    name: 'LinkedIn Post',
    dimensions: '1200x627',
    aspectRatio: 1.91,
    maxTextLength: 3000
  },
  'tiktok-video': {
    name: 'TikTok Video',
    dimensions: '1080x1920',
    aspectRatio: 9/16,
    maxTextLength: 150
  }
};