import { useState, useCallback } from 'react';
import { RSSFeed, GeneratedPost, SocialPlatform } from '../types';
import { rssService } from '../services/rssService';
import { contentGenerator } from '../services/contentGenerator';

export const useRSSProcessor = () => {
  const [feedData, setFeedData] = useState<RSSFeed | null>(null);
  const [generatedPosts, setGeneratedPosts] = useState<GeneratedPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFeed = useCallback(async (url: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const feed = await rssService.fetchFeed(url);
      setFeedData(feed);
    } catch (err) {
      setError('Failed to process RSS feed. Please check the URL and try again.');
      console.error('RSS processing error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const generatePosts = useCallback(async (
    feed: RSSFeed,
    platforms: SocialPlatform[],
    template: string
  ) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const posts = await contentGenerator.generatePosts(feed, platforms, template);
      setGeneratedPosts(posts);
    } catch (err) {
      setError('Failed to generate posts. Please try again.');
      console.error('Post generation error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    feedData,
    generatedPosts,
    isLoading,
    error,
    processFeed,
    generatePosts
  };
};