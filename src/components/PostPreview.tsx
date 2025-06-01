import React from 'react';
import {
  Rows,
  Text,
  Title,
  Button,
  ImageCard,
  Grid,
  Box
} from '@canva/app-ui-kit';
import { addElementAtPoint } from '@canva/design';
import { GeneratedPost } from '../types';

interface PostPreviewProps {
  posts: GeneratedPost[];
}

export const PostPreview: React.FC<PostPreviewProps> = ({ posts }) => {
  const handleAddToCanvas = async (post: GeneratedPost) => {
    try {
      await addElementAtPoint({
        type: 'text',
        children: [post.content]
      });
    } catch (error) {
      console.error('Error adding to canvas:', error);
    }
  };

  return (
    <Rows spacing="2u">
      <Title size="small">Generated Posts ({posts.length})</Title>
      
      {posts.map((post, index) => (
        <Box key={index} padding="2u" border borderColor="neutral">
          <Rows spacing="1u">
            <Text weight="medium">
              {post.platform.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Text>
            
            <Text size="small" tone="tertiary">
              {post.dimensions}
            </Text>
            
            <Text>{post.content}</Text>
            
            {post.hashtags && (
              <Text size="small" tone="secondary">
                {post.hashtags.join(' ')}
              </Text>
            )}
            
            <Button
              variant="secondary"
              onClick={() => handleAddToCanvas(post)}
              size="small"
            >
              Add to Canva
            </Button>
          </Rows>
        </Box>
      ))}
    </Rows>
  );
};