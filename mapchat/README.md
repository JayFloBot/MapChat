# MapChat - Interactive Location Discovery Platform

MapChat is a React-based web application that transforms location discovery through an interactive map interface. Users can click on any location to instantly access aggregated local content including news, social media posts, business information, reviews, and videos - all organized in an intuitive sidebar interface.

![MapChat Screenshot](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=MapChat+Interactive+Map)

## 🚀 Features

### Interactive Map Interface
- **Mapbox GL JS integration** with professional street view styling
- **Click-to-discover functionality** - any map location becomes clickable
- **Dynamic marker placement** with custom styling (#3B82F6 blue markers)
- **Built-in navigation controls** (zoom, rotate, tilt)
- **Smooth WebGL animations** and transitions
- **Mobile-responsive touch interactions**

### Dynamic Content Aggregation
- **News Integration**: Local news articles with headlines, sources, timestamps
- **Social Media**: Twitter/X and TikTok posts with engagement metrics
- **Business Data**: Hours of operation, ratings, contact information
- **Review Systems**: Google Reviews and Yelp integration with star ratings
- **Video Content**: YouTube and TikTok videos with view counts and durations

### Advanced Filtering & Search
- **Category-based filtering system** with color-coded badges:
  - Fun (green), Food (orange), Nightlife (purple), Shopping (pink)
  - Outdoor (teal), Culture (indigo), Adult Entertainment (red)
- **Real-time search functionality** with geocoding capability
- **Multi-select filter combinations** with "All" toggle

### User Experience Features
- **Collapsible sidebar** (396px width) with tabbed organization
- **Five content tabs**: Overview, News, Social, Reviews, Videos
- **Bookmark/save locations** functionality with persistent storage
- **Responsive design** adapting to mobile and desktop viewports
- **Modern UI** inspired by Duolingo, Robinhood, and Mint aesthetics

## 🛠 Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Map Engine**: Mapbox GL JS v2.15.0
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React useState/useContext
- **Build Tool**: Create React App

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Mapbox account (for access token)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mapchat.git
cd mapchat
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your Mapbox access token:

```env
REACT_APP_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
```

**Get your free Mapbox token at**: [https://account.mapbox.com/access-tokens/](https://account.mapbox.com/access-tokens/)

### 4. Start the Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`.

## 🎯 Usage

1. **Explore the Map**: Navigate around the interactive map using mouse controls or touch gestures
2. **Click to Discover**: Click anywhere on the map to discover location information
3. **Filter Content**: Use the category filters to focus on specific types of locations
4. **Search Locations**: Use the search bar to find specific places or addresses
5. **Browse Content**: Explore the sidebar tabs for news, social media, reviews, and videos
6. **Bookmark Locations**: Save interesting locations for later reference

## 🏗 Project Structure

```
src/
├── components/
│   ├── MapChat.tsx              # Main application component
│   ├── SearchBar.tsx            # Location search functionality
│   ├── CategoryFilters.tsx      # Category filtering system
│   ├── Sidebar.tsx              # Location information sidebar
│   ├── TabNavigation.tsx        # Tab switching interface
│   ├── TabContent.tsx           # Tab content router
│   └── tabs/
│       ├── OverviewTab.tsx      # Business overview and details
│       ├── NewsTab.tsx          # Local news articles
│       ├── SocialTab.tsx        # Social media posts
│       ├── ReviewsTab.tsx       # User reviews and ratings
│       └── VideosTab.tsx        # Video content
├── types/
│   └── index.ts                 # TypeScript type definitions
├── utils/
│   └── mockData.ts              # Mock data for development
└── App.tsx                      # Root application component
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #3B82F6 (buttons, markers, active states)
- **Success Green**: #10B981 (open hours, positive indicators)
- **Warning Orange**: #F59E0B (alerts, food category)
- **Error Red**: #EF4444 (adult content, closed status)
- **Neutral Grays**: #F9FAFB, #E5E7EB, #6B7280, #374151

### Typography
- **Headers**: font-bold, text-lg/xl for location names
- **Body**: text-sm for content, text-xs for metadata
- **Interactive**: font-medium for buttons and tabs

## 🔧 API Integration

The application is designed to integrate with various APIs:

### Map Services
- **Mapbox GL JS**: Core mapping functionality
- **Mapbox Geocoding API**: Address search and reverse geocoding
- **Mapbox Places API**: POI data and business information

### Content APIs (Implementation Ready)
- **News**: NewsAPI, Google News API
- **Social Media**: Twitter API v2, YouTube Data API, TikTok Research API
- **Business Data**: Google Places API, Yelp Fusion API
- **Reviews**: Aggregate from Google, Yelp, TripAdvisor

## 📱 Mobile Responsiveness

- Touch-optimized map interactions
- Collapsible sidebar for small screens
- Horizontal scroll for filter categories
- Accessible button sizes (minimum 44px touch targets)

## 🔒 Security & Performance

- Environment variables for API keys
- Rate limiting implementation for external APIs
- Input sanitization for search queries
- CORS handling for cross-origin requests
- Lazy loading for sidebar content
- Debounced search to prevent excessive API calls

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npx vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload the build/ directory to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Mapbox](https://www.mapbox.com/) for the incredible mapping platform
- [Lucide](https://lucide.dev/) for the beautiful icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Unsplash](https://unsplash.com/) for the placeholder images

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/yourusername/mapchat/issues) page
2. Create a new issue if your question isn't answered
3. Contact the maintainers

---

**Made with ❤️ by the MapChat Team**
