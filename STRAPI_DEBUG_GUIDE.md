# Strapi Data Debug Guide

## 🔍 Troubleshooting Strapi Data Not Reflecting

### **Step 1: Check Browser Console**

1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Look for these debug messages:

```
🎉 Strapi data loaded successfully: [data object]
🔍 Data structure: [JSON structure]
✅ Dynamic sections detected: X sections
🔄 Converted sections: [converted data]
```

**OR**

```
📄 Regular homepage data detected (no sections array)
```

### **Step 2: Check Network Tab**

1. Go to Network tab in Developer Tools
2. Refresh the page
3. Look for requests to:
   - `https://cancerfax.unifiedinfotechonline.com/api/pages/1?populate=sections`
   - `https://cancerfax.unifiedinfotechonline.com/api/homepage?populate=*`

4. Check the response:
   - **Status**: Should be 200
   - **Response**: Should contain your Strapi data

### **Step 3: Test Strapi API Directly**

Open these URLs in your browser to test:

1. **Pages API**: `https://cancerfax.unifiedinfotechonline.com/api/pages/1?populate=sections`
2. **Homepage API**: `https://cancerfax.unifiedinfotechonline.com/api/homepage?populate=*`

### **Step 4: Check Your Strapi Data Structure**

Your Strapi data should look like this:

```json
{
  "data": {
    "id": 1,
    "sections": [
      {
        "__component": "sections.hero-section",
        "id": 31,
        "title": "Your Title",
        "visible": true
      }
    ]
  }
}
```

### **Step 5: Use the Refresh Button**

1. Look for the orange "🔄 Refresh Data" button in the top-right corner
2. Click it to manually refresh the data
3. Check console for new debug messages

### **Step 6: Common Issues & Solutions**

#### **Issue 1: No Sections Array**
**Problem**: Data doesn't have `sections` array
**Solution**: 
- Check if you're using the correct API endpoint
- Ensure your Strapi content type has a dynamic zone field named `sections`

#### **Issue 2: Wrong API Endpoint**
**Problem**: Getting 404 or wrong data
**Solution**:
- Verify the correct Strapi URL
- Check if your page ID is correct (currently using ID 1)
- Update the URL in `useHomepageData.js` if needed

#### **Issue 3: CORS Issues**
**Problem**: Network errors in console
**Solution**:
- Check Strapi CORS settings
- Ensure the frontend domain is allowed

#### **Issue 4: Data Not Published**
**Problem**: Data exists but not visible
**Solution**:
- Check if your Strapi content is published
- Verify the `visible` field is set to `true`

### **Step 7: Debug Mode**

To enable more detailed logging, you can modify the console.log statements in `useHomepageData.js`:

```javascript
// Add this for more detailed debugging
console.log('🔍 Full API Response:', data);
console.log('🔍 Sections Array:', data.data?.sections);
console.log('🔍 Section Count:', data.data?.sections?.length);
```

### **Step 8: Test with Sample Data**

You can test the dynamic system by temporarily modifying the API response. Add this to your Strapi or test with this sample data:

```json
{
  "data": {
    "id": 1,
    "sections": [
      {
        "__component": "sections.hero-section",
        "id": 1,
        "title": "Test Dynamic Hero",
        "subtitle": "This is from Strapi!",
        "visible": true
      },
      {
        "__component": "sections.partners-section",
        "id": 2,
        "title": "Test Partners",
        "visible": true
      }
    ]
  }
}
```

### **Step 9: Verify Component Mapping**

Check that your Strapi component types match the mapping in `DynamicSectionRenderer.jsx`:

```javascript
const componentMap = {
  'sections.hero-section': HeroSection,
  'sections.partners-section': ClientLogoSlider,
  // ... other mappings
};
```

### **Step 10: Check Strapi Configuration**

1. **Content Type**: Ensure you have a `Page` content type
2. **Dynamic Zone**: Make sure it's named `sections`
3. **Components**: Verify all section components exist in Strapi
4. **Permissions**: Check if the API is publicly accessible

## 🚀 Quick Fixes

### **Force Refresh Data**
```javascript
// In browser console
window.location.reload();
```

### **Clear Cache**
```javascript
// In browser console
localStorage.clear();
sessionStorage.clear();
```

### **Check Current Data**
```javascript
// In browser console
console.log('Current homepage data:', window.homepageData);
```

## 📞 Need Help?

If you're still having issues:

1. **Check Console**: Look for error messages
2. **Check Network**: Verify API calls are successful
3. **Test API**: Try the Strapi URLs directly
4. **Verify Data**: Ensure your Strapi data has the correct structure

The system will automatically fall back to static data if Strapi is unavailable, so your site will always work!

