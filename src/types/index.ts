export type SocialPlatform = 
  | 'instagram-post'
  | 'instagram-story'
  | 'facebook-post'
  | 'twitter-post'
  | 'linkedin-post'
  | 'tiktok-video';

export interface RSSFeed {
  title: string;
  description: string;
  link: string;
  items: RSSItem[];
}

export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  content?: string;
  author?: string;
  categories?: string[];
}

export interface GeneratedPost {
  platform: SocialPlatform;
  content: string;
  dimensions: string;
  hashtags?: string[];
  imageUrl?: string;
  template: string;
}

export interface PostTemplate {
  id: string;
  name: string;
  style: {
    backgroundColor: string;
    textColor: string;
    fontFamily: string;
    layout: 'centered' | 'left' | 'right' | 'overlay';
  };
}