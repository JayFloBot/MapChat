export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number]; // [lng, lat]
  category?: string;
  description?: string;
  rating?: number;
  isBookmarked?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  url: string;
  description?: string;
  imageUrl?: string;
}

export interface SocialPost {
  id: string;
  platform: 'twitter' | 'tiktok';
  author: string;
  content: string;
  createdAt: string;
  engagementCount: number;
  url: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface Review {
  id: string;
  platform: 'google' | 'yelp';
  author: string;
  rating: number;
  content: string;
  createdAt: string;
  helpful?: number;
}

export interface VideoContent {
  id: string;
  platform: 'youtube' | 'tiktok';
  title: string;
  author: string;
  viewCount: number;
  duration: string;
  thumbnailUrl: string;
  url: string;
  createdAt: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone?: string;
  website?: string;
  hours?: {
    [key: string]: string;
  };
  rating?: number;
  priceLevel?: number;
  isOpen?: boolean;
}

export type FilterCategory = 'fun' | 'food' | 'nightlife' | 'shopping' | 'outdoor' | 'culture' | 'adult';

export interface FilterOption {
  id: FilterCategory;
  label: string;
  color: string;
  bgColor: string;
}

export type TabType = 'overview' | 'news' | 'social' | 'reviews' | 'videos';
