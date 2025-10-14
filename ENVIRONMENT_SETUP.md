# Environment Setup for Strapi Dynamic Zones

## Current Status
✅ **Strapi Connection**: Working  
✅ **API Access**: Available  
❌ **Dynamic Zones**: Not configured yet  

## Quick Setup

### 1. Create .env.local file
Create a `.env.local` file in the `quartic-clone` root directory with:

```bash
# Strapi Configuration
VITE_STRAPI_URL=https://cancerfax.unifiedinfotechonline.com
```

### 2. Test Current Setup
Run the test script to verify connection:
```bash
node test-strapi-dynamic.js
```

### 3. Configure Strapi Dynamic Zones
Follow the complete guide in `STRAPI_DYNAMIC_ZONES_SETUP.md`

## Test Results Summary

**✅ Working Endpoints:**
- `https://cancerfax.unifiedinfotechonline.com/api/homepage?populate=*` - Status: 200
- `https://cancerfax.unifiedinfotechonline.com/api/pages` - Status: 200  
- `https://cancerfax.unifiedinfotechonline.com/api/homepage` - Status: 200

**❌ Missing Dynamic Zones:**
- No sections with `__component` field found
- Need to configure dynamic zones in Strapi admin

**🔧 Next Steps:**
1. Access Strapi admin at `https://cancerfax.unifiedinfotechonline.com/admin`
2. Create Page content type with sections dynamic zone
3. Add section components as per setup guide
4. Create and publish content
5. Test dynamic loading

## Expected Dynamic Zone Structure

The Strapi API should return data like this:

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Homepage",
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
          // ... other fields
        }
        // ... more sections
      ]
    }
  }
}
```

## Component Mapping

The React app expects these component types:
- `sections.hero-section`
- `sections.partners-section`
- `sections.how-it-works`
- `sections.our-process`
- `sections.iws-section`
- `sections.customer-proofs`
- `sections.why-choose-quartic`
- `sections.the-quartic-advantage`
- `sections.request-demo`
- `sections.blog-latest`

## Testing Dynamic Loading

Once dynamic zones are configured:

1. **Start React app**: `npm run dev`
2. **Check console**: Look for "Dynamic sections detected" message
3. **Verify rendering**: Sections should load from Strapi data
4. **Test fallback**: Stop Strapi to test fallback behavior

## Troubleshooting

**If dynamic loading doesn't work:**
1. Check `.env.local` file exists and has correct URL
2. Verify Strapi admin has dynamic zones configured
3. Ensure content is published in Strapi
4. Check API permissions in Strapi settings
5. Run test script to validate connection

**If fallback doesn't work:**
1. Check `useHomepageData.js` has proper error handling
2. Verify fallback data is comprehensive
3. Check console for error messages


