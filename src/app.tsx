import React from 'react';
import { AppUiProvider } from '@canva/app-ui-kit';
import { RSSPipelineApp } from './components/RSSPipelineApp';

export const App: React.FC = () => {
  return (
    <AppUiProvider>
      <RSSPipelineApp />
    </AppUiProvider>
  );
};