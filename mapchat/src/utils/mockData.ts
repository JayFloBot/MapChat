import { Location } from '../types';

export const mockLocationData: Location = {
  id: 'loc_1',
  name: 'The Urban Bistro',
  address: '123 Main Street, New York, NY 10001',
  coordinates: [-74.006, 40.7128],
  category: 'food',
  description: 'A trendy urban bistro featuring contemporary American cuisine with a focus on locally sourced ingredients. Perfect for both casual dining and special occasions.',
  rating: 4.5,
  isBookmarked: false
};

export const generateMockLocation = (lng: number, lat: number): Location => {
  const names = [
    'The Urban Bistro',
    'Sunset Lounge',
    'Central Park Café',
    'Artisan Coffee House',
    'Metropolitan Grill',
    'The Corner Deli',
    'Rooftop Bar & Grill',
    'Local Market',
    'Community Center',
    'Historic Theater'
  ];

  const categories = ['food', 'fun', 'nightlife', 'shopping', 'culture'];
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  return {
    id: `loc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: randomName,
    address: `${Math.floor(Math.random() * 9999)} Street Name, New York, NY ${Math.floor(Math.random() * 90000) + 10000}`,
    coordinates: [lng, lat],
    category: randomCategory as any,
    description: `A wonderful ${randomCategory} destination in the heart of the city. Great for visitors and locals alike.`,
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
    isBookmarked: false
  };
};
