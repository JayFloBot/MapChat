import React from 'react';
import { Heart, MessageCircle, Share, ExternalLink } from 'lucide-react';
import { Location, SocialPost } from '../../types';

interface SocialTabProps {
  location: Location;
}

const SocialTab: React.FC<SocialTabProps> = ({ location }) => {
  // Mock social media posts - in production, this would come from social media APIs
  const socialPosts: SocialPost[] = [
    {
      id: '1',
      platform: 'twitter',
      author: '@foodielover_nyc',
      content: 'Just had the most amazing brunch at this spot! The atmosphere is incredible and the service was top-notch. Definitely coming back! 🥞✨ #brunch #NYC',
      createdAt: '2024-01-15T14:30:00Z',
      engagementCount: 245,
      url: 'https://twitter.com/example/1',
      imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      platform: 'tiktok',
      author: '@cityexplorer',
      content: 'Hidden gem alert! 🚨 This place has the best vibes and the most Instagram-worthy spots. Perfect for your next date night or girls trip!',
      createdAt: '2024-01-14T20:15:00Z',
      engagementCount: 1832,
      url: 'https://tiktok.com/example/2',
      videoUrl: 'https://example.com/video.mp4'
    },
    {
      id: '3',
      platform: 'twitter',
      author: '@localbusiness',
      content: 'Thanks to everyone who came out to our grand opening! The community support has been overwhelming. We can\'t wait to serve you all! 🙏',
      createdAt: '2024-01-13T16:45:00Z',
      engagementCount: 89,
      url: 'https://twitter.com/example/3'
    },
    {
      id: '4',
      platform: 'tiktok',
      author: '@nightlifecritic',
      content: 'Rating this place a solid 9/10! Great music, amazing drinks, and the crowd was so fun. Will definitely be back this weekend! 🍸🎵',
      createdAt: '2024-01-12T23:20:00Z',
      engagementCount: 567,
      url: 'https://tiktok.com/example/4',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=200&fit=crop'
    }
  ];

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d`;
    }
  };

  const formatEngagement = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return 'text-blue-500';
      case 'tiktok':
        return 'text-pink-500';
      default:
        return 'text-gray-500';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return 'X';
      case 'tiktok':
        return 'TikTok';
      default:
        return platform;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900">Social Media</h3>
        <p className="text-sm text-gray-500 mt-1">What people are saying on social media</p>
      </div>

      <div className="space-y-4">
        {socialPosts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm text-gray-900">{post.author}</span>
                <span className={`text-xs font-medium ${getPlatformColor(post.platform)}`}>
                  {getPlatformName(post.platform)}
                </span>
                <span className="text-xs text-gray-500">
                  {formatTimeAgo(post.createdAt)}
                </span>
              </div>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Post Content */}
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {post.content}
            </p>

            {/* Media */}
            {post.imageUrl && (
              <img 
                src={post.imageUrl} 
                alt="Social media post"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
            )}
            
            {post.videoUrl && (
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Video content</span>
              </div>
            )}

            {/* Engagement */}
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Heart className="h-3 w-3" />
                <span>{formatEngagement(post.engagementCount)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-3 w-3" />
                <span>Reply</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share className="h-3 w-3" />
                <span>Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {socialPosts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No social media posts found for this location.</p>
        </div>
      )}
    </div>
  );
};

export default SocialTab;
