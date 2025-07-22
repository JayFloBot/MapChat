import React from 'react';
import { Star, ThumbsUp, ExternalLink } from 'lucide-react';
import { Location, Review } from '../../types';

interface ReviewsTabProps {
  location: Location;
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({ location }) => {
  // Mock review data - in production, this would come from Google/Yelp APIs
  const reviews: Review[] = [
    {
      id: '1',
      platform: 'google',
      author: 'Sarah M.',
      rating: 5,
      content: 'Absolutely fantastic experience! The staff was incredibly welcoming and the atmosphere was perfect for a night out with friends. The food was delicious and reasonably priced. Will definitely be coming back soon!',
      createdAt: '2024-01-15T19:30:00Z',
      helpful: 12
    },
    {
      id: '2',
      platform: 'yelp',
      author: 'Mike R.',
      rating: 4,
      content: 'Great place with good vibes. The service was quick and friendly. Only minor complaint is that it can get pretty crowded on weekends, but that\'s probably a good sign!',
      createdAt: '2024-01-14T14:20:00Z',
      helpful: 8
    },
    {
      id: '3',
      platform: 'google',
      author: 'Jennifer L.',
      rating: 5,
      content: 'Hidden gem in the neighborhood! Love the modern decor and the menu has something for everyone. Perfect for both casual dining and special occasions.',
      createdAt: '2024-01-13T12:45:00Z',
      helpful: 15
    },
    {
      id: '4',
      platform: 'yelp',
      author: 'David K.',
      rating: 3,
      content: 'Decent place, nothing too special but not bad either. Food was okay, service was average. Might give it another try to see if it was just an off day.',
      createdAt: '2024-01-12T20:15:00Z',
      helpful: 3
    },
    {
      id: '5',
      platform: 'google',
      author: 'Lisa T.',
      rating: 5,
      content: 'Wow! Exceeded all expectations. From the moment we walked in, we felt welcomed. The attention to detail is impressive and you can tell they really care about their customers.',
      createdAt: '2024-01-11T17:30:00Z',
      helpful: 22
    }
  ];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'google':
        return 'text-blue-600';
      case 'yelp':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'google':
        return 'Google';
      case 'yelp':
        return 'Yelp';
      default:
        return platform;
    }
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  return (
    <div className="p-4">
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Reviews</h3>
        
        {/* Rating Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center space-x-4 mb-3">
            <div className="text-2xl font-bold text-gray-900">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex items-center space-x-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-sm text-gray-500">
              {reviews.length} review{reviews.length !== 1 ? 's' : ''}
            </div>
          </div>
          
          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-2 text-sm">
                <span className="w-8 text-gray-600">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-8 text-gray-500 text-xs">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border border-gray-200 rounded-lg p-4">
            {/* Review Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm text-gray-900">{review.author}</span>
                <span className={`text-xs font-medium ${getPlatformColor(review.platform)}`}>
                  {getPlatformName(review.platform)}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {formatTimeAgo(review.createdAt)}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-3">
              {renderStars(review.rating)}
            </div>

            {/* Review Content */}
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {review.content}
            </p>

            {/* Helpful Count */}
            {review.helpful && review.helpful > 0 && (
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <ThumbsUp className="h-3 w-3" />
                <span>{review.helpful} found this helpful</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No reviews found for this location.</p>
        </div>
      )}
    </div>
  );
};

export default ReviewsTab;
