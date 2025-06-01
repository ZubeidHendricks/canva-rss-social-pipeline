import React from 'react';
import {
  Rows,
  Text,
  Select
} from '@canva/app-ui-kit';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onChange: (template: string) => void;
}

const templates = [
  { value: 'modern', label: 'Modern - Clean and minimal design' },
  { value: 'bold', label: 'Bold - High contrast and vibrant colors' },
  { value: 'elegant', label: 'Elegant - Sophisticated typography' },
  { value: 'playful', label: 'Playful - Fun and creative layouts' },
  { value: 'professional', label: 'Professional - Business-focused design' },
  { value: 'creative', label: 'Creative - Artistic and unique styles' }
];

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onChange
}) => {
  return (
    <Rows spacing="1u">
      <Text weight="medium">Choose Design Template</Text>
      
      <Select
        options={templates}
        value={selectedTemplate}
        onChange={onChange}
        placeholder="Select a template style"
      />
    </Rows>
  );
};