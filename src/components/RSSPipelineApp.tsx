import React, { useState } from 'react';
import {
  Rows,
  Text,
  Title,
  Button,
  FormField,
  TextInput,
  Select,
  LoadingIndicator,
  Alert
} from '@canva/app-ui-kit';
import { RSSFeedInput } from './RSSFeedInput';
import { PlatformSelector } from './PlatformSelector';
import { TemplateSelector } from './TemplateSelector';
import { PostPreview } from './PostPreview';
import { useRSSProcessor } from '../hooks/useRSSProcessor';
import { SocialPlatform } from '../types';

export const RSSPipelineApp: React.FC = () => {
  const [rssUrl, setRssUrl] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialPlatform[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  
  const {
    feedData,
    generatedPosts,
    isLoading,
    error,
    processFeed,
    generatePosts
  } = useRSSProcessor();

  const handleProcessFeed = async () => {
    if (!rssUrl.trim()) return;
    await processFeed(rssUrl);
  };

  const handleGeneratePosts = async () => {
    if (!feedData || selectedPlatforms.length === 0) return;
    await generatePosts(feedData, selectedPlatforms, selectedTemplate);
  };

  return (
    <Rows spacing="2u">
      <Title size="medium">RSS to Social Media Pipeline</Title>
      
      <Text size="small" tone="tertiary">
        Transform your RSS feeds into engaging social media posts automatically
      </Text>

      {error && (
        <Alert tone="critical">
          {error}
        </Alert>
      )}

      <RSSFeedInput 
        value={rssUrl}
        onChange={setRssUrl}
        onProcess={handleProcessFeed}
        isLoading={isLoading}
      />

      {feedData && (
        <>
          <PlatformSelector
            selectedPlatforms={selectedPlatforms}
            onChange={setSelectedPlatforms}
          />

          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onChange={setSelectedTemplate}
          />

          <Button
            variant="primary"
            onClick={handleGeneratePosts}
            disabled={selectedPlatforms.length === 0 || isLoading}
            stretch
          >
            {isLoading ? (
              <LoadingIndicator size="small" />
            ) : (
              'Generate Social Media Posts'
            )}
          </Button>
        </>
      )}

      {generatedPosts.length > 0 && (
        <PostPreview posts={generatedPosts} />
      )}
    </Rows>
  );
};