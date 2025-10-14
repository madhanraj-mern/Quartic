# Strapi Dynamic Zones Setup Guide

## Overview
This guide will help you set up Strapi Dynamic Zones to enable dynamic component loading in the Quartic React application.

## Prerequisites
- Strapi instance running (local or hosted)
- Admin access to Strapi
- React application running (`npm run dev`)

## Step 1: Configure Dynamic Zones in Strapi Admin

### 1.1 Create a Page Content Type
1. Go to **Content-Type Builder** in Strapi admin
2. Click **Create new collection type**
3. Name: `Page`
4. API identifier: `page`
5. Add the following fields:

#### Basic Fields:
- **Title** (Text, Short text)
- **Slug** (Text, Short text, Unique)
- **Published** (Boolean)

#### Dynamic Zone Field:
- **Sections** (Component, Dynamic zone)
  - Component name: `sections`
  - Allow multiple: Yes

### 1.2 Create Section Components
Create the following components in **Content-Type Builder**:

#### sections.hero-section
- **title** (Text, Long text)
- **subtitle** (Text, Long text) 
- **description** (Text, Long text)
- **primaryCtaText** (Text, Short text)
- **primaryCtaUrl** (Text, Short text)
- **secondaryCtaText** (Text, Short text)
- **secondaryCtaUrl** (Text, Short text)
- **backgroundImage** (Media, Single media)

#### sections.partners-section
- **title** (Text, Short text)
- **logos** (Component, Repeatable)
  - **name** (Text, Short text)
  - **logo** (Media, Single media)

#### sections.how-it-works
- **title** (Text, Short text)
- **subtitle** (Text, Short text)
- **description** (Text, Long text)
- **ctaText** (Text, Short text)
- **ctaUrl** (Text, Short text)

#### sections.our-process
- **title** (Text, Short text)
- **subtitle** (Text, Short text)
- **description** (Text, Long text)
- **steps** (Component, Repeatable)
  - **key** (Text, Short text)
  - **title** (Text, Short text)
  - **subtitle** (Text, Short text, Optional)
  - **description** (Text, Long text)
  - **linkText** (Text, Short text)
  - **linkHref** (Text, Short text)

#### sections.iws-section
- **title** (Text, Short text)
- **heading** (Text, Short text)
- **description** (Text, Long text)
- **metrics** (Component, Repeatable)
  - **value** (Text, Short text)
  - **description** (Text, Short text)
- **industries** (Component, Repeatable)
  - **title** (Text, Short text)
  - **description** (Text, Long text)
  - **ctaText** (Text, Short text)
  - **ctaUrl** (Text, Short text)
  - **image** (Media, Single media)

#### sections.customer-proofs
- **title** (Text, Short text)
- **testimonials** (Component, Repeatable)
  - **quote** (Text, Long text)
  - **author** (Text, Short text)
  - **position** (Text, Short text)
  - **image** (Media, Single media)

#### sections.why-choose-quartic
- **title** (Text, Short text)
- **heading** (Text, Short text)
- **description** (Text, Long text)
- **features** (Component, Repeatable)
  - **title** (Text, Short text)
  - **description** (Text, Long text)
- **backgroundImage** (Media, Single media)

#### sections.the-quartic-advantage
- **title** (Text, Short text)
- **heading** (Text, Short text)
- **description** (Text, Long text)
- **features** (Component, Repeatable)
  - **title** (Text, Short text)
  - **description** (Text, Long text)
- **imageUrl** (Media, Single media)

#### sections.request-demo
- **title** (Text, Short text)
- **description** (Text, Long text)
- **ctaText** (Text, Short text)
- **ctaUrl** (Text, Short text)

#### sections.blog-latest
- **title** (Text, Short text)
- **description** (Text, Long text)
- **articles** (Component, Repeatable)
  - **title** (Text, Short text)
  - **category** (Text, Short text)
  - **date** (Date)
  - **imageUrl** (Media, Single media)
  - **url** (Text, Short text)

## Step 2: Configure API Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Select **Public** role
3. Under **Page**, enable:
   - **find** (GET)
   - **findOne** (GET)
4. Save permissions

## Step 3: Create Content

### 3.1 Create Homepage
1. Go to **Content Manager** → **Pages**
2. Click **Create new entry**
3. Fill in:
   - **Title**: "Homepage"
   - **Slug**: "homepage"
   - **Published**: Yes
4. In the **Sections** dynamic zone, add components in this order:

#### Hero Section
- Component: `sections.hero-section`
- Title: "Decision Intelligence for Manufacturing Operations Management"
- Subtitle: "Deliver responsive, agile operations with smart manufacturing solutions powered by AI and DataOps for real-time context."
- Description: "Leverage AI-powered insights to optimize production, reduce waste, and maximize efficiency across your entire manufacturing ecosystem."
- Primary CTA Text: "Request a Demo"
- Primary CTA URL: "https://www.quartic.ai/demo/"
- Secondary CTA Text: "Watch Video"
- Secondary CTA URL: "#"
- Background Image: Upload hero background image

#### Partners Section
- Component: `sections.partners-section`
- Title: "Trusted by Leading Manufacturers"
- Logos: Add 6 partner logos with names

#### How It Works Section
- Component: `sections.how-it-works`
- Title: "How It Works"
- Subtitle: "AI in Manufacturing Needs Real-Time Context"
- Description: "AI in manufacturing is only as good as the data it runs on. Quartic contextualizes OT data, enabling faster, smarter decisions across MOM workflows."
- CTA Text: "Explore Quartic Platform"
- CTA URL: "#"

#### IWS Section
- Component: `sections.iws-section`
- Title: "Where It Works"
- Heading: "Built for Regulated Operations"
- Description: "For industries where agility, compliance, and context must scale together."
- Metrics: Add 4 metrics (20% faster batch release, 15% higher process yield, etc.)
- Industries: Add 4 industries (Life Sciences, Chemicals, etc.)

#### Customer Proofs Section
- Component: `sections.customer-proofs`
- Title: "What our customers say"
- Testimonials: Add 3 testimonials

#### Why Choose Quartic Section
- Component: `sections.why-choose-quartic`
- Title: "Why Choose Quartic"
- Heading: "The Future of Manufacturing Intelligence"
- Description: "Our platform stands out with its unique blend of advanced AI, industry-specific solutions, and a commitment to customer success."
- Features: Add 3-4 features
- Background Image: Upload background image

#### The Quartic Advantage Section
- Component: `sections.the-quartic-advantage`
- Title: "The Quartic Advantage"
- Heading: "Unlocking Operational Excellence"
- Description: "Our unique approach combines advanced AI with deep industry expertise to deliver unparalleled results."
- Features: Add 4 features
- Image URL: Upload intelligent-mom.svg

#### Request Demo Section
- Component: `sections.request-demo`
- Title: "Ready to Transform Your Operations?"
- Description: "Contact us today to schedule a personalized demonstration of Quartic.ai."
- CTA Text: "Request a Demo"
- CTA URL: "/contact"

#### Blog Latest Section
- Component: `sections.blog-latest`
- Title: "Latest Insights & Resources"
- Description: "Stay informed with our latest articles, case studies, and whitepapers."
- Articles: Add 3 articles

5. **Save** and **Publish** the page

### 3.2 Create About Page
1. Create another page entry
2. Title: "About"
3. Slug: "about"
4. Add relevant sections for about page
5. Save and Publish

## Step 4: Configure Environment Variables

### 4.1 Create .env.local file
```bash
# Create .env.local in quartic-clone root directory
VITE_STRAPI_URL=http://localhost:1337
# OR for hosted Strapi:
# VITE_STRAPI_URL=https://your-strapi-instance.com
```

### 4.2 Update Strapi URL in useDynamicPageData
Update the hardcoded URL in `src/hooks/useHomepageData.js`:

```javascript
// Change line 434 from:
const response = await fetch(`https://cancerfax.unifiedinfotechonline.com/api/pages/${pageId}?populate=sections`);

// To:
const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const response = await fetch(`${strapiUrl}/api/pages/${pageId}?populate=sections`);
```

## Step 5: Test Dynamic Loading

### 5.1 Test Homepage Dynamic Loading
1. Start the React development server: `npm run dev`
2. Open browser to `http://localhost:5173`
3. Check browser console for:
   - "🎉 Strapi data loaded successfully"
   - "✅ Dynamic sections detected: X sections"
   - "🔄 Converted sections: [array of sections]"

### 5.2 Test About Page Dynamic Loading
1. Navigate to `/about`
2. Check console for similar success messages
3. Verify sections render correctly

### 5.3 Test Fallback Behavior
1. Stop Strapi server
2. Refresh React app
3. Should see "ℹ️ Strapi not available, using fallback data"
4. App should still work with static content

## Step 6: Verify Dynamic Zone Structure

### 6.1 Check API Response
Test the API directly:
```bash
curl "http://localhost:1337/api/pages/1?populate=sections"
```

Expected response structure:
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Homepage",
      "slug": "homepage",
      "publishedAt": "2024-01-01T00:00:00.000Z",
      "sections": [
        {
          "id": 1,
          "__component": "sections.hero-section",
          "title": "Decision Intelligence...",
          "subtitle": "Deliver responsive...",
          // ... other fields
        },
        {
          "id": 2,
          "__component": "sections.partners-section",
          "title": "Trusted by Leading Manufacturers",
          "logos": [
            // ... logo data
          ]
        }
        // ... more sections
      ]
    }
  }
}
```

## Step 7: Troubleshooting

### Common Issues:

#### 1. "Strapi URL not configured" warning
- Check `.env.local` file exists
- Verify `VITE_STRAPI_URL` is set correctly
- Restart development server after adding env vars

#### 2. "Unknown component type" warnings
- Verify `__component` values match exactly in `DynamicSectionRenderer.jsx`
- Check component names in Strapi match the mapping

#### 3. Sections not rendering
- Check API permissions are set correctly
- Verify content is published in Strapi
- Check browser network tab for API errors

#### 4. Images not loading
- Ensure media files are uploaded to Strapi
- Check media permissions in Strapi settings
- Verify image URLs are correct

### Debug Commands:
```bash
# Check if Strapi is running
curl http://localhost:1337/api/pages

# Check specific page with sections
curl "http://localhost:1337/api/pages/1?populate=sections"

# Check React app logs
# Open browser dev tools → Console
```

## Step 8: Advanced Configuration

### 8.1 Add More Section Types
To add new section types:
1. Create component in Strapi
2. Add mapping in `DynamicSectionRenderer.jsx`
3. Create React component
4. Add to imports

### 8.2 Conditional Rendering
Sections can be conditionally rendered by:
- Adding `visible` field to components
- Using `visible !== false` filter in `DynamicSectionRenderer`

### 8.3 Custom Field Types
For complex data structures:
- Use JSON field type in Strapi
- Parse JSON in React component
- Handle validation and fallbacks

## Success Indicators

✅ **Dynamic Loading Working:**
- Console shows "Dynamic sections detected"
- Sections render from Strapi data
- No fallback warnings

✅ **Fallback Working:**
- App works when Strapi is down
- Shows "Strapi not available" message
- Renders static content

✅ **Content Management:**
- Can add/edit sections in Strapi
- Changes reflect immediately in React app
- Images and media load correctly

## Next Steps

1. **Content Population**: Add real content to all sections
2. **Media Management**: Upload and organize images
3. **SEO Optimization**: Add meta fields to pages
4. **Performance**: Implement caching strategies
5. **Testing**: Add automated tests for dynamic loading

---

**Note**: This setup enables full dynamic content management through Strapi while maintaining fallback functionality for development and reliability.

