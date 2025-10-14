# Dynamic Sections System - Implementation Guide

## 🎯 Overview

The dynamic sections system allows you to control page layouts and content through Strapi's dynamic zones without requiring frontend code changes. This system supports both dynamic (Strapi-controlled) and static (hardcoded) rendering modes.

## 🏗️ Architecture

### Core Components

1. **DynamicSectionRenderer** - Renders sections based on Strapi data
2. **useHomepageData** - Enhanced hook with dynamic section support
3. **useDynamicPageData** - Hook for other pages (About, etc.)
4. **Component Mapping** - Maps Strapi component types to React components

### Data Flow

```
Strapi Dynamic Zone → useHomepageData/useDynamicPageData → DynamicSectionRenderer → React Components
```

## 📋 Supported Strapi Components

| Strapi Component Type | React Component | Description |
|----------------------|-----------------|-------------|
| `sections.header` | Header | Site header with navigation |
| `sections.hero-section` | HeroSection | Main hero banner |
| `sections.partners-section` | ClientLogoSlider | Client logos slider |
| `sections.how-it-works` | HowItWorksSection | How it works explanation |
| `sections.our-process` | OurProcessSection | Process flow section |
| `sections.iws-section` | IWSSection | IWS features section |
| `sections.request-demo` | RequestDemoSection | Demo request CTA |
| `sections.applications` | ApplicationsSection | Applications showcase |
| `sections.simple-applications` | SimpleApplicationsSection | Simple apps section |
| `sections.application-section` | ApplicationSection | Application details |
| `sections.who-is-it-for` | WhoIsItForSection | Target audience section |
| `sections.real-results` | RealResultsSection | Results showcase |
| `sections.cta-schedule-demo` | CTASectionScheduleDemo | Schedule demo CTA |
| `sections.real-results-grid` | RealResultsGridSection | Interactive results grid |
| `sections.customer-proofs` | CustomerProofsSection | Customer testimonials |
| `sections.blog-latest` | BlogLatestSection | Latest blog posts |
| `sections.footer` | Footer | Site footer |

## 🚀 Usage

### Homepage (Dynamic Mode)

When Strapi returns data with a `sections` array, the homepage automatically switches to dynamic mode:

```javascript
// Strapi API Response
{
  "data": {
    "id": 1,
    "sections": [
      {
        "__component": "sections.hero-section",
        "id": 31,
        "title": "Dynamic Hero Title",
        "visible": true
      },
      {
        "__component": "sections.partners-section", 
        "id": 32,
        "visible": true
      }
    ]
  }
}
```

### Homepage (Static Mode)

When Strapi is unavailable or returns regular data, the homepage uses static rendering with fallback data.

### Other Pages (About, etc.)

```javascript
// pages/AboutPage.jsx
import { useDynamicPageData } from '../hooks/useHomepageData';

const AboutPage = () => {
  const { pageData, loading, error } = useDynamicPageData(2); // Page ID 2
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <DynamicSectionRenderer 
      sections={pageData?.dynamicSections} 
      pageType="about" 
      homepage={pageData}
    />
  );
};
```

## 🔧 Backend Configuration

### Strapi Dynamic Zone Setup

1. **Create Page Content Type**:
   ```javascript
   // content-types/page/schema.json
   {
     "kind": "collectionType",
     "collectionName": "pages",
     "info": {
       "singularName": "page",
       "pluralName": "pages"
     },
     "attributes": {
       "title": {
         "type": "string"
       },
       "sections": {
         "type": "dynamiczone",
         "components": [
           "sections.hero-section",
           "sections.partners-section",
           "sections.how-it-works",
           "sections.our-process",
           "sections.iws-section",
           "sections.request-demo",
           "sections.applications",
           "sections.simple-applications",
           "sections.application-section",
           "sections.who-is-it-for",
           "sections.real-results",
           "sections.cta-schedule-demo",
           "sections.real-results-grid",
           "sections.customer-proofs",
           "sections.blog-latest",
           "sections.footer"
         ]
       }
     }
   }
   ```

2. **Create Section Components**:
   ```javascript
   // components/sections/hero-section/schema.json
   {
     "collectionName": "components_sections_hero_sections",
     "info": {
       "displayName": "Hero Section",
       "description": "Main hero banner section"
     },
     "attributes": {
       "title": {
         "type": "string"
       },
       "subtitle": {
         "type": "string"
       },
       "description": {
         "type": "text"
       },
       "primaryCtaText": {
         "type": "string"
       },
       "primaryCtaUrl": {
         "type": "string"
       },
       "secondaryCtaText": {
         "type": "string"
       },
       "secondaryCtaUrl": {
         "type": "string"
       },
       "videoUrl": {
         "type": "string"
       },
       "visible": {
         "type": "boolean",
         "default": true
       }
     }
   }
   ```

## 🎨 Styling Preservation

### CSS Classes

All existing CSS classes are preserved:
- Component-specific classes remain unchanged
- Section wrapper classes added for dynamic sections
- Responsive breakpoints maintained

### Dynamic Section CSS

```css
/* Added to dynamic-sections.css */
.section-wrapper {
  position: relative;
  width: 100%;
}

.section-wrapper[data-section-type] {
  /* Debug border in development */
  /* border: 1px dashed rgba(255, 106, 0, 0.2); */
}
```

## 🔄 Migration Strategy

### Phase 1: Parallel Implementation ✅
- Dynamic system implemented alongside static system
- Automatic detection of dynamic vs static content
- No breaking changes to existing functionality

### Phase 2: Gradual Migration
1. Configure Strapi with dynamic zones
2. Test with sample dynamic content
3. Migrate pages one by one
4. Remove static fallbacks (optional)

### Phase 3: Full Dynamic Control
- All pages controlled through Strapi
- Easy reordering and content management
- No frontend deployments for content changes

## 🛠️ Development

### Adding New Sections

1. **Create Strapi Component**:
   ```javascript
   // components/sections/new-section/schema.json
   {
     "collectionName": "components_sections_new_sections",
     "info": {
       "displayName": "New Section"
     },
     "attributes": {
       "title": { "type": "string" },
       "visible": { "type": "boolean", "default": true }
     }
   }
   ```

2. **Add to Dynamic Zone**:
   ```javascript
   // Add "sections.new-section" to page schema
   ```

3. **Update Component Mapping**:
   ```javascript
   // components/DynamicSectionRenderer.jsx
   const componentMap = {
     // ... existing mappings
     'sections.new-section': NewSectionComponent,
   };
   ```

4. **Update Hook Mapping**:
   ```javascript
   // hooks/useHomepageData.js
   const componentMapping = {
     // ... existing mappings
     'sections.new-section': 'newSection',
   };
   ```

### Debugging

Enable debug mode in development:
```javascript
// Add to DynamicSectionRenderer
console.log('Rendering section:', section.__component, section);
```

## 📊 Benefits

### For Backend Team
- ✅ **Easy Content Management**: Add/remove/reorder sections in Strapi
- ✅ **No Code Deployments**: Content changes don't require frontend updates
- ✅ **Flexible Layouts**: Create different page layouts easily
- ✅ **Conditional Visibility**: Show/hide sections per page

### For Frontend Team
- ✅ **Preserved Functionality**: All existing features work unchanged
- ✅ **Clean Architecture**: Single source of truth for section rendering
- ✅ **Type Safety**: Component mapping ensures valid components
- ✅ **Easy Maintenance**: Add new sections by updating mappings

### For Users
- ✅ **Consistent Experience**: Same visual design and functionality
- ✅ **Fast Loading**: Optimized rendering and caching
- ✅ **Responsive Design**: All sections work on all devices

## 🚨 Important Notes

1. **Data Structure**: Ensure Strapi returns data in the expected format
2. **Component Props**: All components receive `homepage`, `data`, `pageType` props
3. **Error Handling**: Unknown components are logged and skipped
4. **Performance**: Only visible sections are rendered
5. **Fallback**: Static rendering ensures site works even if Strapi is down

## 🔍 Testing

### Test Dynamic Rendering
```javascript
// Test with sample Strapi data
const testSections = [
  {
    __component: 'sections.hero-section',
    id: 1,
    title: 'Test Hero',
    visible: true
  }
];

<DynamicSectionRenderer sections={testSections} pageType="test" />
```

### Test Static Fallback
```javascript
// Test when Strapi is unavailable
// Should fall back to static rendering
```

## 📈 Future Enhancements

1. **Section Templates**: Pre-defined section combinations
2. **A/B Testing**: Multiple section variations
3. **Analytics**: Track section performance
4. **Caching**: Optimize section loading
5. **Preview Mode**: Live preview of changes

---

This system provides maximum flexibility while maintaining all existing functionality and styling. The frontend automatically adapts to backend changes without requiring code deployments.

