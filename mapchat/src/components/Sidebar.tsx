import React from 'react';
import { X, Bookmark, BookmarkCheck, MapPin, Star, Clock, Phone, Globe, Navigation } from 'lucide-react';
import { Location, TabType } from '../types';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';

interface SidebarProps {
  location: Location;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onClose: () => void;
  onBookmarkToggle: () => void;
  isBookmarked: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  location,
  activeTab,
  onTabChange,
  onClose,
  onBookmarkToggle,
  isBookmarked
}) => {
  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full shadow-lg">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-gray-900 truncate">
              {location.name}
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="truncate">{location.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-3">
            <button
              onClick={onBookmarkToggle}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked
                  ? 'text-primary bg-blue-50 hover:bg-blue-100'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-5 w-5" />
              ) : (
                <Bookmark className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick Info */}
        {location.rating && (
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="font-medium">{location.rating}</span>
            </div>
            <div className="flex items-center text-success">
              <Clock className="h-4 w-4 mr-1" />
              <span>Open</span>
            </div>
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        <TabContent location={location} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Sidebar;
