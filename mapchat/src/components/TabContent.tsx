import React from 'react';
import { Location, TabType } from '../types';
import OverviewTab from './tabs/OverviewTab';
import NewsTab from './tabs/NewsTab';
import SocialTab from './tabs/SocialTab';
import ReviewsTab from './tabs/ReviewsTab';
import VideosTab from './tabs/VideosTab';

interface TabContentProps {
  location: Location;
  activeTab: TabType;
}

const TabContent: React.FC<TabContentProps> = ({ location, activeTab }) => {
  switch (activeTab) {
    case 'overview':
      return <OverviewTab location={location} />;
    case 'news':
      return <NewsTab location={location} />;
    case 'social':
      return <SocialTab location={location} />;
    case 'reviews':
      return <ReviewsTab location={location} />;
    case 'videos':
      return <VideosTab location={location} />;
    default:
      return <OverviewTab location={location} />;
  }
};

export default TabContent;
