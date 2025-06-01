import React from 'react';
import {
  Rows,
  Text,
  Checkbox,
  Grid
} from '@canva/app-ui-kit';
import { SocialPlatform } from '../types';

interface PlatformSelectorProps {
  selectedPlatforms: SocialPlatform[];
  onChange: (platforms: SocialPlatform[]) => void;
}

const platforms: { id: SocialPlatform; name: string; dimensions: string }[] = [
  { id: 'instagram-post', name: 'Instagram Post', dimensions: '1080x1080' },
  { id: 'instagram-story', name: 'Instagram Story', dimensions: '1080x1920' },
  { id: 'facebook-post', name: 'Facebook Post', dimensions: '1200x630' },
  { id: 'twitter-post', name: 'Twitter/X Post', dimensions: '1200x675' },
  { id: 'linkedin-post', name: 'LinkedIn Post', dimensions: '1200x627' },
  { id: 'tiktok-video', name: 'TikTok Video', dimensions: '1080x1920' }
];

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatforms,
  onChange
}) => {
  const handlePlatformToggle = (platformId: SocialPlatform) => {
    const isSelected = selectedPlatforms.includes(platformId);
    if (isSelected) {
      onChange(selectedPlatforms.filter(p => p !== platformId));
    } else {
      onChange([...selectedPlatforms, platformId]);
    }
  };

  return (
    <Rows spacing="1u">
      <Text weight="medium">Select Social Media Platforms</Text>
      
      <Grid columns={2} spacing="1u">
        {platforms.map(platform => (
          <Checkbox
            key={platform.id}
            checked={selectedPlatforms.includes(platform.id)}
            onChange={() => handlePlatformToggle(platform.id)}
            label={platform.name}
            description={platform.dimensions}
          />
        ))}
      </Grid>
    </Rows>
  );
};