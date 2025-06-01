import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../app';

describe('App', () => {
  it('renders the RSS Pipeline app', () => {
    render(<App />);
    
    expect(screen.getByText('RSS to Social Media Pipeline')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Transform your RSS feeds into engaging social media posts automatically'
      )
    ).toBeInTheDocument();
  });

  it('renders the RSS input form', () => {
    render(<App />);
    
    expect(screen.getByPlaceholderText('https://example.com/feed.xml')).toBeInTheDocument();
    expect(screen.getByText('Process RSS Feed')).toBeInTheDocument();
  });
});