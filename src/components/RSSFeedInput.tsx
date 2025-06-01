import React from 'react';
import {
  Rows,
  FormField,
  TextInput,
  Button,
  LoadingIndicator
} from '@canva/app-ui-kit';

interface RSSFeedInputProps {
  value: string;
  onChange: (value: string) => void;
  onProcess: () => void;
  isLoading: boolean;
}

export const RSSFeedInput: React.FC<RSSFeedInputProps> = ({
  value,
  onChange,
  onProcess,
  isLoading
}) => {
  return (
    <Rows spacing="1u">
      <FormField
        label="RSS Feed URL"
        description="Enter the URL of your RSS or Atom feed"
        control={(
          <TextInput
            placeholder="https://example.com/feed.xml"
            value={value}
            onChange={onChange}
          />
        )}
      />
      
      <Button
        variant="primary"
        onClick={onProcess}
        disabled={!value.trim() || isLoading}
        stretch
      >
        {isLoading ? (
          <LoadingIndicator size="small" />
        ) : (
          'Process RSS Feed'
        )}
      </Button>
    </Rows>
  );
};