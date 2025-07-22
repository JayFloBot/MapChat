import React from 'react';
import { Clock, Phone, Globe, MapPin, Star, DollarSign } from 'lucide-react';
import { Location } from '../../types';

interface OverviewTabProps {
  location: Location;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ location }) => {
  // Mock business info - in production, this would come from APIs
  const businessInfo = {
    phone: '+1 (555) 123-4567',
    website: 'https://example.com',
    hours: {
      'Monday': '9:00 AM - 9:00 PM',
      'Tuesday': '9:00 AM - 9:00 PM',
      'Wednesday': '9:00 AM - 9:00 PM',
      'Thursday': '9:00 AM - 9:00 PM',
      'Friday': '9:00 AM - 10:00 PM',
      'Saturday': '10:00 AM - 10:00 PM',
      'Sunday': '10:00 AM - 8:00 PM',
    },
    priceLevel: 2,
    isOpen: true,
    rating: 4.5,
    totalReviews: 1247
  };

  const getPriceLevelSymbol = (level: number) => {
    return '$'.repeat(level) + '$'.repeat(4 - level).split('').map(() => '').join('');
  };

  return (
    <div className="p-4 space-y-6">
      {/* Description */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">About</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {location.description || 'A popular location with great reviews and amenities. Perfect for visitors looking to explore the local area and experience what this neighborhood has to offer.'}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center mb-1">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="font-semibold text-gray-900">{businessInfo.rating}</span>
          </div>
          <p className="text-xs text-gray-500">{businessInfo.totalReviews} reviews</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center mb-1">
            <DollarSign className="h-4 w-4 text-green-500 mr-1" />
            <span className="font-semibold text-gray-900">
              {getPriceLevelSymbol(businessInfo.priceLevel)}
            </span>
          </div>
          <p className="text-xs text-gray-500">Price level</p>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-gray-400 mr-3" />
            <span className="text-sm text-gray-600">{businessInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-4 w-4 text-gray-400 mr-3" />
            <a 
              href={businessInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Visit website
            </a>
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-0.5" />
            <span className="text-sm text-gray-600">{location.address}</span>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Hours</h3>
        <div className="space-y-2">
          {Object.entries(businessInfo.hours).map(([day, hours]) => (
            <div key={day} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{day}</span>
              <span className={`font-medium ${businessInfo.isOpen ? 'text-success' : 'text-gray-900'}`}>
                {hours}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 p-2 bg-success/10 rounded-lg">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-success mr-2" />
            <span className="text-sm font-medium text-success">
              {businessInfo.isOpen ? 'Open now' : 'Closed'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
