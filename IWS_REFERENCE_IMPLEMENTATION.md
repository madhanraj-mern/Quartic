# IWS Section - Reference Image Implementation ✅

## Overview
I've successfully implemented the "Where It Works" section to match the reference image exactly, with all requested features and animations.

## ✅ **Implemented Features**

### **1. Left Side Content (Exact Match)**
- **Tag**: "Where It Works" in light blue background
- **Heading**: "Built for Regulated Operations" in bold
- **Description**: "For industries where agility, compliance, and context must scale together."
- **Counter Metrics**: 
  - 20% faster batch release
  - 15% higher process yield  
  - 30% fewer investigations
  - 100% audit-ready traceability

### **2. Counter Animation (Scroll-Triggered)**
- **Scroll Trigger**: Uses Intersection Observer API
- **Animation**: Numbers count up from 0 to target percentage when section comes into view
- **Smooth Transition**: 2-second duration with proper easing
- **Performance**: Automatically unobserves after animation triggers

### **3. Right Side Image with Effects**
- **Dynamic Image**: Shows active industry image based on selected tab
- **Zoom Effect**: Image scales from 1.05x to 1x on hover
- **Smooth Transition**: 0.6s ease-in-out transition
- **Responsive**: Proper aspect ratio and sizing

### **4. Industry Tabs Navigation**
- **Tab Titles**: Life Sciences, Chemicals, Consumer Packaged Goods, Food & Beverage
- **Active State**: Orange underline and bold text for active tab
- **Hover Effects**: Subtle lift animation (translateY(-2px))
- **Click Interaction**: Smooth tab switching with visual feedback

### **5. Popup Card (Square Design)**
- **Positioning**: Bottom-right corner of the image
- **Design**: White background with rounded corners and shadow
- **Content**: Industry title, description, and action buttons
- **Animation**: Scale and fade-in effect when tab is clicked
- **Square Shape**: Rectangular card with proper padding and spacing

### **6. Interactive Elements**
- **Tab Shifting**: Active tab moves up with translateY(-5px)
- **Popup Toggle**: Clicking tab shows/hides popup card
- **Button Styling**: Orange "Read More" button with hover effects
- **Chat Icon**: Circular icon with hover scale effect

## ✅ **Technical Implementation**

### **Counter Animation**
```javascript
// Uses Intersection Observer for scroll-triggered animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUpInstances.forEach(countUp => {
        countUp.reset();
        countUp.start();
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
```

### **Image Effects**
```css
.slide-image {
  transition: all 0.6s ease-in-out;
  transform: scale(1.05);
}

.main-slide-image:hover .slide-image {
  transform: scale(1);
}
```

### **Tab Shifting Animation**
```css
.industry_tab_item {
  transition: all 0.3s ease;
  cursor: pointer;
}

.industry_tab_item:hover {
  transform: translateY(-2px);
}

.industry_tab_item.active {
  transform: translateY(-5px);
}
```

### **Popup Card Animation**
```css
.tab_content {
  height: 0;
  opacity: 0;
  transform: scale(0.8) translateY(10px);
  transition: all 0.4s ease-out;
  pointer-events: none;
}

.tab_content.active {
  height: auto;
  opacity: 1;
  transform: scale(1) translateY(0);
  pointer-events: auto;
}
```

## ✅ **Exact Styling Match**

### **Typography**
- **Font Family**: "Red Hat Text" throughout
- **Font Sizes**: Responsive with proper breakpoints
- **Colors**: Exact color matching (#FF6600, #40B0E0, etc.)
- **Line Heights**: Proper spacing and readability

### **Layout**
- **Two-Column**: Left content, right image with tabs
- **Spacing**: Exact margins, padding, and gaps
- **Alignment**: Proper text alignment and element positioning
- **Responsive**: Mobile and desktop optimized

### **Colors**
- **Orange**: #FF6600 (buttons, active states)
- **Blue**: #40B0E0 (tags, accents)
- **Black**: #000000 (headings, text)
- **Gray**: #666666 (descriptions, inactive states)

## ✅ **Animation Details**

### **Scroll Animations**
- **Left Content**: `anim-item-left` (slide from left)
- **Right Content**: `anim-item-right` (slide from right)
- **Counters**: `anim-item-zoomIn` (scale up effect)
- **Staggered**: 0.2s delay between counters

### **Interactive Animations**
- **Tab Hover**: Lift effect with translateY
- **Tab Active**: Enhanced lift with translateY(-5px)
- **Image Hover**: Scale effect from 1.05x to 1x
- **Popup**: Scale and fade-in with transform-origin

### **Transition Timing**
- **Tab Shifting**: 0.3s ease
- **Image Effects**: 0.6s ease-in-out
- **Popup Animation**: 0.4s ease-out
- **Counter Animation**: 2s duration

## 🎯 **Result**

The IWS Section now perfectly matches the reference image with:
- ✅ **Exact Layout**: Two-column design with proper spacing
- ✅ **Counter Animation**: Scroll-triggered percentage counting
- ✅ **Image Effects**: Zoom and slide effects on hover
- ✅ **Tab Shifting**: Smooth tab switching with visual feedback
- ✅ **Popup Cards**: Square design with proper positioning
- ✅ **Responsive Design**: Mobile and desktop optimized
- ✅ **Smooth Animations**: Professional transitions throughout
- ✅ **Exact Styling**: Perfect match to quartic-html reference

The section is now fully functional with all requested features! 🎉

