# MapChat Setup Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Mapbox Token (Free)
1. Go to [https://account.mapbox.com/access-tokens/](https://account.mapbox.com/access-tokens/)
2. Sign up for a free account
3. Create a new access token
4. Copy the token

### 3. Configure Environment
```bash
cp .env.example .env
```

Edit `.env` and add your token:
```env
REACT_APP_MAPBOX_ACCESS_TOKEN=pk.your_actual_token_here
```

### 4. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

## Usage

1. **Click anywhere on the map** to discover location information
2. **Use the search bar** to find specific places
3. **Filter by categories** using the colored pills
4. **Explore the sidebar tabs** for detailed content
5. **Bookmark locations** using the bookmark icon

## Build for Production

```bash
npm run build
```

The build folder will be ready for deployment.

## Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Add environment variables in Vercel dashboard

## Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `build/` folder to Netlify
3. Add environment variables in Netlify settings

## Troubleshooting

### Map not loading?
- Check your Mapbox token in `.env`
- Ensure the token has the correct permissions
- Check browser console for errors

### Build failing?
- Run `npm install` to ensure all dependencies
- Check that all TypeScript files compile
- Verify CRACO configuration

### Styling issues?
- Ensure Tailwind CSS is properly configured
- Check that PostCSS plugins are installed
- Verify CRACO is processing styles correctly

## Features Included

✅ Interactive Mapbox map with click-to-discover  
✅ Search bar with geocoding  
✅ Category filtering system  
✅ Collapsible sidebar with 5 content tabs  
✅ Mock data for news, social media, reviews, videos  
✅ Bookmark functionality  
✅ Responsive design for mobile and desktop  
✅ Modern UI with Tailwind CSS  
✅ TypeScript for type safety  

## Next Steps

- Add real API integrations
- Implement user authentication
- Add data persistence
- Deploy to production
- Monitor performance

## Support

For issues or questions:
1. Check the main README.md
2. Review the FEATURES.md file
3. Create an issue on GitHub
