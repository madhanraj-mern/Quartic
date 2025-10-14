# Strapi Data Connection Guide

## Current Issue
The application is currently pointing to the wrong Strapi instance (`cancerfax.unifiedinfotechonline.com`) and falling back to local data instead of using the actual Strapi data.

## What I Can See from Your Strapi Admin
Based on the image you shared, your Strapi instance has the correct data structure with:

### Hero Section Data:
```javascript
{
  primaryCtaText: "Request a Demo",
  primaryCtaUrl: "https://www.quartic.ai/demo/",
  secondaryCtaText: "Watch Video", 
  secondaryCtaUrl: "https://www.quartic.ai/wp-content/up",
  videoUrl: "https://www.quartic.ai/wp-content/up",
  visible: true
}
```

## Steps to Connect to Your Strapi Instance

### 1. Update Environment Configuration
You need to update the `.env.local` file with your correct Strapi URL:

```bash
# Current (WRONG)
VITE_STRAPI_URL=https://cancerfax.unifiedinfotechonline.com

# Update to your correct Strapi URL
VITE_STRAPI_URL=https://your-correct-strapi-instance.com
VITE_STRAPI_TOKEN=your-strapi-token-if-needed
```

### 2. Find Your Correct Strapi URL
To find your correct Strapi URL:
1. Look at the URL in your browser when you're in the Strapi admin
2. It should be something like: `https://your-domain.com/admin` or `https://your-strapi-instance.herokuapp.com/admin`
3. Remove `/admin` from the end to get the base URL

### 3. Test the Connection
Once you update the URL, the application will:
1. Try to fetch data from your Strapi instance
2. Use the actual data instead of fallback data
3. Show the correct button text and URLs from Strapi

## Expected Data Structure
Based on your Strapi admin, the data should be structured like:

```javascript
// API Response Structure
{
  data: {
    id: 1,
    attributes: {
      heroSection: {
        primaryCtaText: "Request a Demo",
        primaryCtaUrl: "https://www.quartic.ai/demo/",
        secondaryCtaText: "Watch Video",
        secondaryCtaUrl: "https://www.quartic.ai/wp-content/up",
        videoUrl: "https://www.quartic.ai/wp-content/up",
        visible: true
      },
      // ... other sections
    }
  }
}
```

## Current Fallback Data vs Strapi Data
The application is currently using fallback data because Strapi is not accessible. Once connected:

**Current (Fallback):**
- Watch Video button: `href="#"` (hardcoded)
- Request Demo button: `href="https://www.quartic.ai/demo/"` (hardcoded)

**With Strapi (Your Data):**
- Watch Video button: `href="https://www.quartic.ai/wp-content/up"` (from Strapi)
- Request Demo button: `href="https://www.quartic.ai/demo/"` (from Strapi)

## Debug Steps
1. **Update `.env.local`** with correct Strapi URL
2. **Restart the development server** (`npm run dev`)
3. **Check browser console** for Strapi data loading messages
4. **Look for these messages:**
   - `🎉 Strapi data loaded successfully:` (success)
   - `⚠️ Strapi URL not configured or pointing to wrong instance` (still wrong URL)

## What to Look For
Once connected, you should see in the browser console:
```
🎉 Strapi data loaded successfully: {data object}
🔍 Data structure: {formatted JSON}
```

And the buttons will use the actual Strapi data instead of fallback values.

## Need Help?
If you need help finding your correct Strapi URL or have any issues connecting, please share:
1. The URL you see in your Strapi admin browser address bar
2. Any error messages from the browser console
3. The Strapi instance type (self-hosted, Strapi Cloud, etc.)

