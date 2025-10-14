# Quartic.ai Section Alignment Guide

## 📐 Layout Patterns & Alignment

### **1. Full Width Sections**
```css
.container-fluid {
  width: 100%;
  padding: 0 15px;
}
```
**Used in**: Header top banner, Hero section backgrounds

### **2. One Side Full Container**
```css
.one_side_full_container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: 0;
  padding-right: 0;
}
```
**Used in**: Most main sections for asymmetric layouts

### **3. Standard Centered Container**
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
```
**Used in**: Footer, some content sections

## 🎯 Section Alignment Patterns

### **Pattern A: Left Content + Right Visual**
```html
<div class="container one_side_full_container pe-0 ms-auto me-0">
  <div class="row gx-0">
    <div class="col-lg-6">
      <div class="content-left">
        <span class="tag_lightBlue">Section Tag</span>
        <h2 class="section-heading">Main Heading</h2>
        <p class="section-description">Description text</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="visual-right">
        <!-- Image, chart, or interactive element -->
      </div>
    </div>
  </div>
</div>
```
**Used in**: Insights, Data into Action, IWS, Solutions

### **Pattern B: Right Content + Left Visual**
```html
<div class="container one_side_full_container pe-0 ms-auto me-0">
  <div class="row gx-0">
    <div class="col-lg-6">
      <div class="visual-left">
        <!-- Image or interactive element -->
      </div>
    </div>
    <div class="col-lg-6">
      <div class="content-right">
        <span class="tag_lightBlue">Section Tag</span>
        <h2 class="section-heading">Main Heading</h2>
        <p class="section-description">Description text</p>
      </div>
    </div>
  </div>
</div>
```
**Used in**: Why MOM, Our Process, Why Choose Quartic

### **Pattern C: Asymmetric Layout (47/53)**
```html
<div class="container one_side_full_container pe-0 ms-auto me-0">
  <div class="row gx-0">
    <div class="osfc_left_col d-flex flex-column">
      <div class="left_top_content">
        <span class="tag_lightBlue">Section Tag</span>
        <h2 class="section-heading">Main Heading</h2>
      </div>
    </div>
    <div class="osfc_right_col">
      <div class="right_content">
        <!-- Complex content with sliders, tabs, etc. -->
      </div>
    </div>
  </div>
</div>
```
**Used in**: Roles section, Testimonials

### **Pattern D: Centered Content**
```html
<div class="container">
  <div class="row gx-0">
    <div class="col-12">
      <div class="centered-content text-center">
        <span class="tag_lightBlue">Section Tag</span>
        <h2 class="section-heading">Main Heading</h2>
        <p class="section-description">Description text</p>
      </div>
    </div>
  </div>
</div>
```
**Used in**: Footer CTA, some hero variations

## 🎨 Visual Hierarchy & Spacing

### **Section Spacing**
```css
.comn_sec_py {
  padding-top: 80px;
  padding-bottom: 80px;
}

@media (min-width: 768px) {
  .comn_sec_py {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

@media (min-width: 1200px) {
  .comn_sec_py {
    padding-top: 120px;
    padding-bottom: 120px;
  }
}
```

### **Content Spacing**
```css
.section-heading {
  margin-bottom: 20px;
}

.section-description {
  margin-bottom: 30px;
}

.tag_lightBlue {
  margin-bottom: 15px;
}
```

### **Divider Lines**
```css
.divider_line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: rgba(151, 214, 223, 0.5);
  opacity: 0.4;
}

.divider_line_horizontal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(151, 214, 223, 0.5);
}
```

## 📱 Responsive Behavior

### **Mobile (< 768px)**
- Single column layout
- Stacked content
- Reduced padding
- Hidden divider lines
- Simplified navigation

### **Tablet (768px - 991px)**
- Two column layout
- Side-by-side content
- Medium padding
- Visible divider lines
- Full navigation

### **Desktop (992px+)**
- Full grid system
- Complex layouts
- Maximum padding
- All visual elements
- Enhanced interactions

### **Large Desktop (1200px+)**
- Enhanced typography
- Increased spacing
- Larger images
- More detailed animations

## 🎯 Alignment Best Practices

### **1. Consistent Margins**
- Use `ms-auto me-0` for right-aligned containers
- Use `ms-0 me-auto` for left-aligned containers
- Use `mx-auto` for centered containers

### **2. Grid Gutters**
- Use `gx-0` for no horizontal gutters
- Use `gy-0` for no vertical gutters
- Use `g-0` for no gutters at all

### **3. Content Alignment**
- Use `text-center` for centered text
- Use `d-flex align-items-center` for vertical centering
- Use `justify-content-center` for horizontal centering

### **4. Responsive Images**
- Use `img-fluid` for responsive images
- Use `object-fit-cover` for proper aspect ratios
- Use `w-100` for full-width images

### **5. Section Backgrounds**
- Use `bg-black` for dark sections
- Use `bg-white` for light sections
- Use `position-relative` for overlay effects

## 🔧 Implementation Checklist

### **For Each Section:**
- [ ] Choose appropriate container type
- [ ] Set up grid layout (row + columns)
- [ ] Add section tag and heading
- [ ] Implement responsive behavior
- [ ] Add divider lines if needed
- [ ] Test on all breakpoints
- [ ] Ensure proper spacing
- [ ] Check content alignment

### **For Layout Consistency:**
- [ ] Use consistent container classes
- [ ] Maintain proper spacing ratios
- [ ] Align content with grid system
- [ ] Test responsive breakpoints
- [ ] Ensure visual hierarchy
- [ ] Check cross-browser compatibility

This guide ensures consistent section alignment and layout patterns throughout the Quartic.ai website.

