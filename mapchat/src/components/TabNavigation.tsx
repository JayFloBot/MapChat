import React from 'react';
import { Home, Newspaper, MessageCircle, Star, Play } from 'lucide-react';
import { TabType } from '../types';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: 'overview' as TabType, label: 'Overview', icon: Home },
  { id: 'news' as TabType, label: 'News', icon: Newspaper },
  { id: 'social' as TabType, label: 'Social', icon: MessageCircle },
  { id: 'reviews' as TabType, label: 'Reviews', icon: Star },
  { id: 'videos' as TabType, label: 'Videos', icon: Play },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center px-3 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-primary border-b-2 border-primary bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-4 w-4 mr-1" />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default TabNavigation;
