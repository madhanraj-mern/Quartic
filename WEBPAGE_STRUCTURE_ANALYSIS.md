# Quartic.ai Webpage Structure & Design Analysis

## 📋 Complete Page Structure

### 1. **Header Section** (`wraper-header-top` + `wraper-header`)
```html
<!-- Top Banner -->
<div class="wraper-header-top">
  <div class="container-fluid">
    <div class="infoText text-md-center fw-semibold text-white">
      <span class="tag_lightBlue lh-1">Webinar</span>
      <span>The Experience Revolution: Mastering Customer Engagement in the Age of AI</span>
      <a href="#" class="fw-800">Sign Up</a>
    </div>
  </div>
</div>

<!-- Main Header -->
<header class="wraper-header w-100 z-index-9">
  <div class="wraper-header-main">
    <div class="container one_side_full_container ms-auto me-0 pe-0">
      <div class="navbar navbar-expand-xl header-main">
        <!-- Logo -->
        <div class="brand-logo">
          <a href="index.html">
            <img src="assets/images/logo.svg" alt="Logo" />
          </a>
        </div>
        
        <!-- Navigation -->
        <nav class="main-nav">
          <ul class="menu">
            <li><a href="#">Product <span class="submenu-indicator"></span></a></li>
            <li><a href="#">Solutions <span class="submenu-indicator"></span></a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Resource Hub <span class="submenu-indicator"></span></a></li>
            <li><a href="#">Company <span class="submenu-indicator"></span></a></li>
          </ul>
        </nav>
        
        <!-- CTA Button -->
        <a href="#" class="btn btn-header btn_orange">Contact</a>
      </div>
    </div>
  </div>
</header>
```

### 2. **Hero Section** (`hero-banner`)
```html
<section class="hero-banner d-flex align-items-center">
  <div class="container one_side_full_container ms-0 me-auto px-0">
    <div class="hero-content-wrapper flex-column flex-lg-row">
      <!-- Left Content -->
      <div class="hero-content-left">
        <h1 class="hero-heading">Manufacturing Operations Management Reimagined</h1>
        <p class="hero-description">AI-powered, fully connected, and ready to adapt in real time</p>
        <div class="hero-cta-buttons">
          <a href="#" class="btn btn-primary">Schedule Demo</a>
          <a href="#" class="btn btn-secondary">Watch Video</a>
        </div>
      </div>
      
      <!-- Right Content -->
      <div class="hero-content-right">
        <div class="hero-image-wrapper">
          <img src="assets/images/hero-banner-img1.jpg" alt="Hero Image" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. **Client Logos Section** (`client_logo_slider_sec`)
```html
<section class="client_logo_slider_sec">
  <div class="container one_side_full_container pe-0 ms-auto me-0 position-relative">
    <div class="client-logos-slider">
      <!-- Splide.js slider with client logos -->
      <div class="splide__track">
        <div class="splide__list">
          <div class="splide__slide">
            <img src="assets/images/partners/logo1.svg" alt="Client Logo" />
          </div>
          <!-- More client logos... -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### 4. **Insights Section** (`home_insights_sec`)
```html
<section class="home_insights_sec">
  <div class="container one_side_full_container pe-0 ms-auto me-0 position-relative">
    <div class="divider_line anim-item-clipDown-line"></div>
    <div class="row gx-0">
      <div class="col-lg-6">
        <div class="insights-content">
          <span class="tag_lightBlue">Insights</span>
          <h2 class="section-heading">Transform Data into Actionable Insights</h2>
          <p class="section-description">Real-time analytics and AI-driven recommendations</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="insights-visual">
          <!-- Interactive charts/graphs -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### 5. **Why MOM Section** (`home_why_mom_sec bg-black`)
```html
<section class="home_why_mom_sec bg-black">
  <div class="container pe-sm-0">
    <div class="w-100 position-relative">
      <div class="row gx-0">
        <div class="col-lg-6">
          <div class="why-mom-content">
            <span class="tag_lightBlue">Why MOM</span>
            <h2 class="section-heading text-white">Manufacturing Operations Management</h2>
            <p class="section-description text-white">Comprehensive solution for modern manufacturing</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="why-mom-features">
            <!-- Feature cards with icons and descriptions -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 6. **Data into Action Section** (`home_data_into_action_sec`)
```html
<section class="home_data_into_action_sec">
  <div class="container position-relative pe-0">
    <div class="divider_line d-none d-md-block"></div>
    <div class="row gx-0">
      <div class="col-lg-6">
        <div class="data-action-content">
          <span class="tag_lightBlue">Data into Action</span>
          <h2 class="section-heading">Turn Data into Decisions</h2>
          <p class="section-description">AI-powered analytics for better manufacturing outcomes</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="data-action-visual">
          <!-- Interactive data visualization -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### 7. **Our Process Section** (`home_our_process_sec bg-black`)
```html
<section class="home_our_process_sec bg-black">
  <div class="home_our_process_top">
    <div class="container px-sm-0">
      <div class="row gx-0">
        <div class="col-lg-6">
          <div class="process-content">
            <span class="tag_lightBlue">Our Process</span>
            <h2 class="section-heading text-white">How We Deliver Results</h2>
            <p class="section-description text-white">Step-by-step approach to manufacturing excellence</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="process-steps">
            <!-- Process flow visualization -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 8. **IWS Section** (`home_iws_sec`)
```html
<section class="home_iws_sec" id="statistics">
  <div class="container one_side_full_container pe-0 ms-auto me-0">
    <div class="divider_line"></div>
    <div class="row gx-0">
      <div class="col-lg-6">
        <div class="iws-content">
          <span class="tag_lightBlue">IWS</span>
          <h2 class="section-heading">Integrated Workflow Solutions</h2>
          <p class="section-description">Seamless integration across your manufacturing ecosystem</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="iws-features">
          <!-- Feature cards with statistics -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### 9. **Partner CTA Section** (`partner_cta_sec bg-black`)
```html
<section class="partner_cta_sec position-relative bg-black overflow-hidden">
  <div class="bg_graphic_gbox_top">
    <div class="container">
      <div class="row gx-0">
        <div class="col-lg-6">
          <div class="partner-cta-content">
            <span class="tag_lightBlue">Partners</span>
            <h2 class="section-heading text-white">Trusted by Industry Leaders</h2>
            <p class="section-description text-white">Join the companies transforming manufacturing</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="partner-logos">
            <!-- Partner company logos -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 10. **Solutions Section** (`home_solutions_sec`)
```html
<section class="home_solutions_sec">
  <div class="home_solutions_top">
    <div class="container px-sm-0">
      <div class="row gx-0">
        <div class="col-lg-6">
          <div class="solutions-content">
            <span class="tag_lightBlue">Solutions</span>
            <h2 class="section-heading">Comprehensive Manufacturing Solutions</h2>
            <p class="section-description">End-to-end solutions for every manufacturing need</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="solutions-grid">
            <!-- Solution cards grid -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 11. **Roles Section** (`home_roles_sec bg-black`)
```html
<section class="home_roles_sec bg-black">
  <div class="container one_side_full_container pe-0 ms-auto me-0">
    <div class="row gx-0">
      <div class="osfc_left_col d-flex flex-column">
        <div class="left_top_content">
          <div class="sec_heading_wrap">
            <div class="sec_heading_holder">
              <span class="tag_lightBlue lh-base tag-mb-20px">Roles</span>
              <h2 class="h3_heading_text fw-medium text-white">Quartic Built for every stakeholders</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="osfc_right_col">
        <div class="roles_slider_holder">
          <div class="divider_line anim-item-clipDown-line"></div>
          <div class="roles_slider_container">
            <!-- Thumb Slider -->
            <div class="roles_thumb_slider">
              <!-- Role navigation tabs -->
            </div>
            <!-- Main Slider -->
            <div class="roles_main_slider">
              <div class="row gx-0 gy-4 gy-lg-0">
                <div class="col-lg-5 pe-lg-4">
                  <div class="roles_main_slider_content">
                    <!-- Role content -->
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="roles_main_slider_content">
                    <!-- Role image -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 12. **Why Choose Quartic Section** (`home_wcq_sec`)
```html
<section class="home_wcq_sec position-relative w-100">
  <div class="home_wcq_content_wrap overflow-hidden">
    <div class="bg_img_holder anim-item-blur">
      <div class="container">
        <div class="row gx-0">
          <div class="col-lg-6">
            <div class="wcq-content">
              <span class="tag_lightBlue">Why Choose Quartic</span>
              <h2 class="section-heading text-white">The Quartic Advantage</h2>
              <p class="section-description text-white">Why leading manufacturers choose our platform</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="wcq-features">
              <!-- Feature cards with benefits -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 13. **Testimonials Section** (`testimonial_sec home_testimonial_sec`)
```html
<section class="testimonial_sec home_testimonial_sec comn_sec_py">
  <div class="container one_side_full_container ps-sm-0 ms-md-0 me-md-auto">
    <div class="row gx-0">
      <div class="col-lg-6">
        <div class="testimonial-content">
          <span class="tag_lightBlue">Testimonials</span>
          <h2 class="section-heading">What Our Customers Say</h2>
          <p class="section-description">Real results from real manufacturers</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="testimonial-slider">
          <!-- Customer testimonial cards -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### 14. **Blog Section** (`blog_latest_list_sec`)
```html
<section class="blog_latest_list_sec blog_latest_list_tab_sec w-100 bg-white comn_sec_py pt-0">
  <div class="container">
    <div class="blog_latest_tab_content_wrap w-100">
      <div class="row gx-0">
        <div class="col-lg-6">
          <div class="blog-content">
            <span class="tag_lightBlue">Blog</span>
            <h2 class="section-heading">Latest Insights</h2>
            <p class="section-description">Stay updated with manufacturing trends</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="blog-posts">
            <!-- Blog post cards -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 15. **Footer CTA Section** (`comn-footer-before-sec`)
```html
<section class="comn-footer-before-sec">
  <div class="container">
    <div class="comn-footer-cta-holder">
      <div class="row gx-0">
        <div class="col-lg-8">
          <div class="footer-cta-content">
            <h2 class="section-heading text-white">Ready to Transform Your Manufacturing?</h2>
            <p class="section-description text-white">Get started with Quartic today</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="footer-cta-buttons">
            <a href="#" class="btn btn-primary">Schedule Demo</a>
            <a href="#" class="btn btn-secondary">Contact Sales</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 16. **Footer Section** (`comn-footer-sec`)
```html
<footer class="comn-footer-sec">
  <div class="container">
    <div class="comn-footer-main">
      <div class="row gy-0 gy-lg-0">
        <div class="col-12 col-md-12 col-lg-3">
          <div class="comn-footer-left-content">
            <!-- Company logo and description -->
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-9">
          <div class="comn-footer-right-content">
            <div class="row gx-0">
              <div class="col-lg-3">
                <div class="footer-links">
                  <h3>Product</h3>
                  <!-- Product links -->
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-links">
                  <h3>Solutions</h3>
                  <!-- Solution links -->
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-links">
                  <h3>Resources</h3>
                  <!-- Resource links -->
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-links">
                  <h3>Company</h3>
                  <!-- Company links -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comn-footer-bottom">
      <!-- Copyright and legal links -->
    </div>
  </div>
</footer>
```

## 🎨 Design System & Layout Patterns

### **Container System**
- **Full Width**: `container-fluid` for full-width sections
- **One Side Full**: `one_side_full_container` for asymmetric layouts
- **Standard**: `container` for centered content
- **Custom**: `px-sm-0`, `pe-0`, `ms-auto`, `me-0` for specific positioning

### **Grid System**
- **Bootstrap Grid**: `row gx-0` for no gutters
- **Two Column**: `col-lg-6` for 50/50 splits
- **Asymmetric**: `col-lg-5` + `col-lg-7` for 47/53 splits
- **Responsive**: `flex-column flex-lg-row` for mobile-first

### **Color Scheme**
- **Primary**: `#f15a29` (Orange)
- **Secondary**: `#C6E8F0` (Light Blue)
- **Background**: `#000000` (Black), `#ffffff` (White)
- **Text**: `text-white`, `text-black`

### **Typography Hierarchy**
- **H1**: Hero headings (large, bold)
- **H2**: Section headings (medium, bold)
- **H3**: Subsection headings (smaller, medium weight)
- **Tags**: `tag_lightBlue` for section labels
- **Body**: Standard paragraph text

### **Spacing System**
- **Section Padding**: `comn_sec_py` for consistent vertical spacing
- **Custom Padding**: `pt-0`, `pb-0` for specific needs
- **Margins**: `ms-auto`, `me-0` for positioning

### **Animation Classes**
- **Clip Down**: `anim-item-clipDown-line` for divider animations
- **Blur**: `anim-item-blur` for background effects
- **Slide**: `words_slide_from_right` for text animations

## 📱 Responsive Breakpoints

### **Mobile First Approach**
- **Base**: Mobile styles (default)
- **sm**: 576px+ (small tablets)
- **md**: 768px+ (tablets)
- **lg**: 992px+ (desktops)
- **xl**: 1200px+ (large desktops)
- **xxl**: 1400px+ (extra large)

### **Layout Adaptations**
- **Mobile**: Single column, stacked content
- **Tablet**: Two column, side-by-side
- **Desktop**: Full grid system, complex layouts
- **Large**: Enhanced spacing and typography

## 🔧 Technical Implementation

### **CSS Framework**
- **Bootstrap 5**: Grid system and utilities
- **Custom SCSS**: Component-specific styles
- **Responsive**: Mobile-first approach

### **JavaScript Libraries**
- **Splide.js**: Slider functionality
- **Fancybox**: Lightbox for images/videos
- **GSAP**: Advanced animations
- **AOS**: Scroll animations

### **Performance Optimizations**
- **Lazy Loading**: Images and content
- **Preloading**: Critical resources
- **Minification**: CSS and JS files
- **CDN**: External libraries

This structure provides a comprehensive foundation for implementing the complete Quartic.ai website with proper section alignment and responsive design.

