import React from 'react';
import { Play, Eye, ExternalLink, Clock } from 'lucide-react';
import { Location, VideoContent } from '../../types';

interface VideosTabProps {
  location: Location;
}

const VideosTab: React.FC<VideosTabProps> = ({ location }) => {
  // Mock video data - in production, this would come from YouTube/TikTok APIs
  const videos: VideoContent[] = [
    {
      id: '1',
      platform: 'youtube',
      title: 'Amazing Food Tour of This Local Hotspot!',
      author: 'FoodieAdventures',
      viewCount: 125400,
      duration: '8:45',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop',
      url: 'https://youtube.com/watch?v=example1',
      createdAt: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      platform: 'tiktok',
      title: 'Hidden gem alert! 🚨 Best vibes in the city',
      author: '@cityvibes',
      viewCount: 89200,
      duration: '0:45',
      thumbnailUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=200&fit=crop',
      url: 'https://tiktok.com/@cityvibes/video/example2',
      createdAt: '2024-01-14T16:30:00Z'
    },
    {
      id: '3',
      platform: 'youtube',
      title: 'Local Business Spotlight: Community Favorite',
      author: 'CommunityChannel',
      viewCount: 45600,
      duration: '12:20',
      thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop',
      url: 'https://youtube.com/watch?v=example3',
      createdAt: '2024-01-13T14:15:00Z'
    },
    {
      id: '4',
      platform: 'tiktok',
      title: 'Date night perfection ✨ Rating this place 10/10',
      author: '@datenight_diaries',
      viewCount: 156800,
      duration: '1:15',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop',
      url: 'https://tiktok.com/@datenight_diaries/video/example4',
      createdAt: '2024-01-12T20:45:00Z'
    },
    {
      id: '5',
      platform: 'youtube',
      title: 'Neighborhood Walking Tour - Must-Visit Spots',
      author: 'UrbanExplorer',
      viewCount: 78900,
      duration: '15:30',
      thumbnailUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop',
      url: 'https://youtube.com/watch?v=example5',
      createdAt: '2024-01-11T11:20:00Z'
    }
  ];

  const formatViewCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 30) {
      return `${diffInDays} days ago`;
    } else {
      const diffInMonths = Math.floor(diffInDays / 30);
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return 'text-red-600';
      case 'tiktok':
        return 'text-pink-600';
      default:
        return 'text-gray-600';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return 'YouTube';
      case 'tiktok':
        return 'TikTok';
      default:
        return platform;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900">Videos</h3>
        <p className="text-sm text-gray-500 mt-1">Video content featuring this location</p>
      </div>

      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {/* Video Thumbnail */}
            <div className="relative">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <Play className="h-12 w-12 text-white" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>

            {/* Video Info */}
            <div className="p-3">
              <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
                {video.title}
              </h4>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`font-medium ${getPlatformColor(video.platform)}`}>
                    {getPlatformName(video.platform)}
                  </span>
                  <span>•</span>
                  <span className="font-medium text-gray-700">{video.author}</span>
                </div>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{formatViewCount(video.viewCount)} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatTimeAgo(video.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {videos.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No videos found for this location.</p>
        </div>
      )}
    </div>
  );
};

export default VideosTab;
