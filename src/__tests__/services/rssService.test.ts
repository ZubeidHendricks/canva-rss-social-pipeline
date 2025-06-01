import { rssService } from '../../services/rssService';

// Mock fetch
const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

describe('RSSService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('successfully parses RSS feed', async () => {
    const mockRSSData = `
      <?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0">
        <channel>
          <title>Test Blog</title>
          <description>A test blog</description>
          <link>https://test.com</link>
          <item>
            <title>Test Post</title>
            <description>Test description</description>
            <link>https://test.com/post1</link>
            <pubDate>Wed, 01 Jun 2025 10:00:00 GMT</pubDate>
          </item>
        </channel>
      </rss>
    `;

    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ contents: mockRSSData }),
    } as Response);

    const result = await rssService.fetchFeed('https://test.com/feed.xml');

    expect(result.title).toBe('Test Blog');
    expect(result.description).toBe('A test blog');
    expect(result.items).toHaveLength(1);
    expect(result.items[0].title).toBe('Test Post');
  });

  it('handles fetch errors gracefully', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(
      rssService.fetchFeed('https://invalid-url.com/feed.xml')
    ).rejects.toThrow('Failed to fetch RSS feed');
  });

  it('handles empty RSS feed', async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ contents: null }),
    } as Response);

    await expect(
      rssService.fetchFeed('https://empty.com/feed.xml')
    ).rejects.toThrow('No content received from RSS feed');
  });
});