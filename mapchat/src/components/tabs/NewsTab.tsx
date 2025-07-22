import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { Location, NewsItem } from '../../types';

interface NewsTabProps {
  location: Location;
}

const NewsTab: React.FC<NewsTabProps> = ({ location }) => {
  // Mock news data - in production, this would come from news APIs
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Local Business District Sees Major Development',
      source: 'Local News Network',
      publishedAt: '2024-01-15T10:30:00Z',
      url: 'https://example.com/news/1',
      description: 'New commercial developments are transforming the neighborhood with modern amenities and improved infrastructure.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Community Event Brings Hundreds to Local Park',
      source: 'City Tribune',
      publishedAt: '2024-01-14T15:45:00Z',
      url: 'https://example.com/news/2',
      description: 'Annual community festival celebrates local culture with food, music, and activities for all ages.',
      imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'New Transportation Options Announced',
      source: 'Metro Daily',
      publishedAt: '2024-01-13T09:15:00Z',
      url: 'https://example.com/news/3',
      description: 'City announces expanded public transit routes to better serve the growing neighborhood.',
    },
    {
      id: '4',
      title: 'Local Restaurant Wins Prestigious Award',
      source: 'Food & Wine Weekly',
      publishedAt: '2024-01-12T12:00:00Z',
      url: 'https://example.com/news/4',
      description: 'Neighborhood eatery recognized for innovative menu and commitment to local ingredients.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop'
    }
  ];

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900">Local News</h3>
        <p className="text-sm text-gray-500 mt-1">Recent news and updates from this area</p>
      </div>

      <div className="space-y-4">
        {newsItems.map((item) => (
          <article key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {item.imageUrl && (
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-32 object-cover"
              />
            )}
            <div className="p-3">
              <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                  {item.description}
                </p>
              )}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{item.source}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatTimeAgo(item.publishedAt)}
                  </div>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {newsItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No recent news found for this location.</p>
        </div>
      )}
    </div>
  );
};

export default NewsTab;
