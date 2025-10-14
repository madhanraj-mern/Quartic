# WHO IS IT FOR Section - Strapi Integration Guide

## 🎯 Overview

The "WHO IS IT FOR" section has been updated to match your reference image exactly. It now features a two-column layout with tabbed navigation and dynamic content switching.

## 📋 Current Implementation

### **Layout Structure:**
- **Left Column**: Title, subtitle, and description
- **Right Column**: Tabbed navigation and content area with image
- **Background**: Black (#000000)
- **Active Tab**: "Quality & Compliance" (matches your reference)

### **Tab Navigation:**
1. Process Engineers
2. Data Analysts  
3. **Quality & Compliance** (Active by default)
4. Reliability & Maintenance
5. Digital Transformation

## 🔧 Strapi Data Structure

### **Required Strapi Content Type: `who-is-it-for`**

```json
{
  "title": "WHO IS IT FOR",
  "subtitle": "Quartic Built for every stakeholder", 
  "description": "Comprehensive solutions designed for every role in manufacturing operations.",
  "stakeholders": [
    {
      "id": 0,
      "title": "Process Engineers",
      "description": "Optimize manufacturing processes with real-time data insights and predictive analytics.",
      "features": [
        "Real-time process monitoring",
        "Predictive quality control", 
        "Automated optimization recommendations"
      ]
    },
    {
      "id": 1,
      "title": "Data Analysts",
      "description": "Transform raw manufacturing data into actionable business intelligence.",
      "features": [
        "Advanced analytics dashboards",
        "Custom data visualizations",
        "Automated reporting"
      ]
    },
    {
      "id": 2,
      "title": "Quality & Compliance",
      "description": "Maximize equipment uptime with predictive maintenance and reliability engineering.",
      "features": [
        "Predictive maintenance",
        "Asset performance monitoring", 
        "Maintenance optimization"
      ]
    },
    {
      "id": 3,
      "title": "Reliability & Maintenance",
      "description": "Ensure equipment reliability and minimize downtime.",
      "features": [
        "Preventive maintenance",
        "Equipment monitoring",
        "Reliability analysis"
      ]
    },
    {
      "id": 4,
      "title": "Digital Transformation",
      "description": "Lead digital transformation initiatives across manufacturing operations.",
      "features": [
        "Digital roadmap planning",
        "Change management",
        "Technology integration"
      ]
    }
  ]
}
```

## 🎨 Visual Features

### **Left Side:**
- ✅ **Tag**: Light blue "WHO IS IT FOR" tag
- ✅ **Heading**: "Quartic Built for every stakeholder"
- ✅ **Description**: Subtitle text
- ✅ **Background**: Black background

### **Right Side:**
- ✅ **Tab Navigation**: Horizontal tabs with orange active state
- ✅ **Content Area**: Dynamic content with checkmarks
- ✅ **Read More Link**: Orange "Read More →" button
- ✅ **Navigation Arrows**: Left/right arrow buttons
- ✅ **Image**: Stakeholder image with gradient overlay

## 🔄 Dynamic Features

### **Tab Switching:**
- Click any tab to switch content
- Smooth animations between tabs
- Active tab highlighted in orange

### **Content Updates:**
- Description changes per stakeholder
- Feature list updates dynamically
- Image changes per stakeholder

### **Navigation:**
- Arrow buttons for previous/next
- Circular navigation (last → first)
- Smooth transitions

## 📱 Responsive Design

### **Desktop (1200px+):**
- Two-column layout
- Full image display
- All features visible

### **Tablet (768px - 1200px):**
- Stacked layout
- Reduced image size
- Maintained functionality

### **Mobile (< 768px):**
- Single column
- Compact tabs
- Optimized spacing

## 🚀 How to Use in Strapi

### **1. Create Content Type:**
```json
{
  "kind": "collectionType",
  "collectionName": "who_is_it_for",
  "info": {
    "singularName": "who-is-it-for",
    "pluralName": "who-is-it-for-sections"
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "subtitle": {
      "type": "string", 
      "required": true
    },
    "description": {
      "type": "text"
    },
    "stakeholders": {
      "type": "json"
    }
  }
}
```

### **2. Add to Dynamic Zone:**
Add `sections.who-is-it-for` to your page's dynamic zone components.

### **3. Content Management:**
- **Title**: "WHO IS IT FOR"
- **Subtitle**: "Quartic Built for every stakeholder"
- **Description**: Your description text
- **Stakeholders**: JSON array with stakeholder data

## 🎯 Key Features Implemented

### **✅ Exact Match to Reference:**
- Black background
- Two-column layout
- Tab navigation with orange active state
- Checkmark bullet points
- "Read More" link with arrow
- Navigation arrows
- Stakeholder image

### **✅ Dynamic Content:**
- Strapi data integration
- Fallback data for offline mode
- Smooth animations
- Responsive design

### **✅ Interactive Elements:**
- Tab switching
- Arrow navigation
- Hover effects
- Smooth transitions

## 🔍 Testing

### **Check These Elements:**
1. **Tab Navigation**: All 5 tabs visible and clickable
2. **Active State**: "Quality & Compliance" highlighted in orange
3. **Content Switching**: Description and features change per tab
4. **Images**: Different image per stakeholder
5. **Navigation**: Arrow buttons work correctly
6. **Responsive**: Layout adapts to screen size

### **Console Debug:**
Look for these messages in browser console:
```
WhoIsItForSection - homepage: [data]
WhoIsItForSection - data: [section data]
WhoIsItForSection - stakeholders: [array]
```

## 🎉 Result

Your "WHO IS IT FOR" section now perfectly matches the reference image with:
- ✅ **Exact Visual Match**: Layout, colors, typography
- ✅ **Dynamic Content**: Controlled by Strapi
- ✅ **Interactive Features**: Tabs, navigation, animations
- ✅ **Responsive Design**: Works on all devices
- ✅ **Easy Management**: Update content in Strapi

The section will automatically update when you change content in Strapi, maintaining all styling and functionality! 🚀

