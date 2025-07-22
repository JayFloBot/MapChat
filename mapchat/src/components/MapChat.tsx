import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Location, FilterCategory, TabType } from '../types';
import SearchBar from './SearchBar';
import CategoryFilters from './CategoryFilters';
import Sidebar from './Sidebar';
import { generateMockLocation } from '../utils/mockData';

// Note: In production, store this in environment variables
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "pk.eyJ1IjoibWFwY2hhdCIsImEiOiJjbHl4eHh4eHgweHh4eHh4eHh4eHh4eHh4eHh4In0.xxxxxxxxxxxxxxxxxxxxxxxxxx";

const MapChat: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<FilterCategory[]>([]);
  const [savedLocations, setSavedLocations] = useState<Location[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [markers, setMarkers] = useState<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.006, 40.7128], // New York City
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Handle map clicks
    map.current.on('click', handleMapClick);

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleMapClick = async (e: mapboxgl.MapMouseEvent) => {
    const { lng, lat } = e.lngLat;
    
    // Create marker
    const marker = new mapboxgl.Marker({
      color: '#3B82F6'
    })
      .setLngLat([lng, lat])
      .addTo(map.current!);

    // Clear previous markers
    markers.forEach(m => m.remove());
    setMarkers([marker]);

    // Simulate reverse geocoding and data fetching
    const locationData = await fetchLocationData(lng, lat);
    setSelectedLocation(locationData);
    setActiveTab('overview');
  };

  const fetchLocationData = async (lng: number, lat: number): Promise<Location> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return mock data for now
    return generateMockLocation(lng, lat);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) return;

    // Simulate geocoding API call
    // In production, use Mapbox Geocoding API
    const mockResult = {
      center: [-73.9857, 40.7484], // Times Square
      place_name: query
    };

    if (map.current) {
      map.current.flyTo({
        center: mockResult.center as [number, number],
        zoom: 15
      });
    }
  };

  const toggleFilter = (filterId: FilterCategory) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const toggleBookmark = (location: Location) => {
    const isBookmarked = savedLocations.some(l => l.id === location.id);
    if (isBookmarked) {
      setSavedLocations(prev => prev.filter(l => l.id !== location.id));
    } else {
      setSavedLocations(prev => [...prev, { ...location, isBookmarked: true }]);
    }
  };

  const closeSidebar = () => {
    setSelectedLocation(null);
    markers.forEach(m => m.remove());
    setMarkers([]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Map Area */}
      <div className="flex-1 relative">
        {/* Search Bar */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <SearchBar
            query={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
          />
        </div>

        {/* Category Filters */}
        <div className="absolute top-20 left-4 right-4 z-10">
          <CategoryFilters
            activeFilters={activeFilters}
            onFilterToggle={toggleFilter}
          />
        </div>

        {/* Map Container */}
        <div 
          ref={mapContainer}
          className="w-full h-full"
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Sidebar */}
      {selectedLocation && (
        <Sidebar
          location={selectedLocation}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onClose={closeSidebar}
          onBookmarkToggle={() => toggleBookmark(selectedLocation)}
          isBookmarked={savedLocations.some(l => l.id === selectedLocation.id)}
        />
      )}
    </div>
  );
};

export default MapChat;
