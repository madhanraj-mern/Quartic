# IWS Section - Card Design Update ✅

## Overview
I've updated the IWS Section to match the exact design from your reference image, where only the industry headings are visible initially, and clicking on a heading reveals the full card content with description, "Read More" button, and chat icon.

## ✅ **Key Design Features Implemented**

### **1. Industry Navigation Bar**
- **Layout**: Horizontal bar at the bottom with industry titles
- **Titles**: "Life Sciences", "Chemicals", "Consumer Packaged Goods", "Food & Beverage"
- **Styling**: Clean text with hover effects and active state indicators
- **Active State**: Orange underline for the selected industry

### **2. Expandable Card Design**
- **Initial State**: Only the industry heading is visible
- **Click Interaction**: Clicking a heading expands the card
- **Card Content**: 
  - Industry description text
  - "Read More" button (orange)
  - Chat icon (circular with speech bubble)
- **Positioning**: Card appears above the selected industry title

### **3. Card Styling**
- **Background**: Clean white background
- **Shadow**: Subtle drop shadow for depth
- **Border Radius**: Rounded corners (8px)
- **Padding**: Comfortable spacing (20px)
- **Width**: Minimum 280px, responsive sizing

### **4. Interactive Elements**
- **"Read More" Button**: 
  - Orange background (#FF6600)
  - White text
  - Hover effects with color change
  - Rounded corners
- **Chat Icon**: 
  - Circular gray background
  - Speech bubble SVG icon
  - Hover effects with scale animation
  - Positioned next to the button

## ✅ **Animation & Transitions**

### **Card Expansion**
- **Smooth Animation**: 0.3s easeInOut transition
- **Height Animation**: Auto height with smooth expansion
- **Opacity Fade**: Content fades in/out smoothly
- **Framer Motion**: Powered by Framer Motion for smooth animations

### **Hover Effects**
- **Industry Titles**: Color change on hover
- **Buttons**: Scale and color transitions
- **Chat Icon**: Scale animation on hover
- **Card**: Subtle scale effect on hover

## ✅ **Responsive Design**

### **Desktop (1200px+)**
- Industry titles in horizontal row
- Card appears above selected title
- Full-size card with proper spacing

### **Tablet (768px - 1199px)**
- Industry titles remain horizontal
- Card appears below selected title
- Adjusted card sizing

### **Mobile (767px and below)**
- Industry titles wrap to multiple rows
- Card appears below selected title
- Full-width card on small screens
- Stacked button and icon layout

## ✅ **Technical Implementation**

### **Component Structure**
```jsx
// Industry tab with expandable content
<motion.div className="industry_tab_item">
  <div className="tab_title">{industry.title}</div>
  <motion.div className="tab_content">
    <div className="tab_description">{industry.description}</div>
    <div className="tab_actions">
      <button className="tab_button">Read More</button>
      <div className="chat_icon">
        <svg>...</svg>
      </div>
    </div>
  </motion.div>
</motion.div>
```

### **CSS Classes**
- `.industry_tab_item`: Main container for each industry
- `.tab_title`: Industry heading text
- `.tab_content`: Expandable card content
- `.tab_actions`: Container for button and icon
- `.tab_button`: "Read More" button styling
- `.chat_icon`: Circular chat icon container

### **State Management**
- `activeIndustry`: Tracks which industry is currently selected
- `setActiveIndustry`: Function to change active industry
- Smooth transitions between different industry cards

## ✅ **Visual Design Details**

### **Color Scheme**
- **Primary Orange**: #FF6600 (buttons and active states)
- **Text Gray**: #666666 (descriptions)
- **Black**: #000000 (headings and active titles)
- **Light Gray**: #f0f0f0 (chat icon background)

### **Typography**
- **Industry Titles**: 16px, medium weight
- **Card Descriptions**: 14px, regular weight
- **Button Text**: 14px, semi-bold weight

### **Spacing & Layout**
- **Card Padding**: 20px
- **Button Padding**: 8px 16px
- **Icon Size**: 32px circular
- **Gap Between Elements**: 15px

## ✅ **User Experience**

### **Interaction Flow**
1. **Initial State**: Only industry headings visible
2. **Click Heading**: Card expands with smooth animation
3. **Click Another Heading**: Previous card closes, new card opens
4. **Hover Effects**: Visual feedback on interactive elements
5. **Mobile Friendly**: Touch-optimized interactions

### **Accessibility**
- **Keyboard Navigation**: Tab-accessible elements
- **Focus States**: Clear focus indicators
- **Screen Reader**: Proper semantic structure
- **Touch Targets**: Adequate size for mobile interaction

## 🎯 **Result**

The IWS Section now perfectly matches your reference image with:
- ✅ Industry headings only visible initially
- ✅ Click to expand card with full content
- ✅ "Read More" button and chat icon
- ✅ Smooth animations and transitions
- ✅ Responsive design for all devices
- ✅ Professional card styling with shadows and rounded corners

The implementation provides an intuitive and engaging user experience that matches the design specification exactly!


