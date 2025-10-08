# Quartic Website - React Application

A modern, responsive website for Quartic built with React, featuring advanced animations, Strapi CMS integration, and enterprise-level functionality.

## 🚀 Features

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Styled Components** - CSS-in-JS styling solution
- **GSAP Animations** - Professional animation library with ScrollTrigger
- **Strapi CMS Integration** - Dynamic content management
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Fast loading and smooth interactions

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and configurations
├── assets/             # Images, icons, and static files
└── styles/             # Global styles and themes
```

## 🎯 Key Components

### **Hero Section**
- Animated background with gradient overlays
- Dynamic text animations using GSAP
- Video integration with custom controls
- Responsive design with mobile optimization

### **Applications Section**
- Card-based layout with sophisticated hover effects
- Content swapping on interaction
- Image sliding animations
- Staggered text animations

### **Industries Section**
- Dynamic industry cards from Strapi CMS
- Hover animations and transitions
- Responsive grid layout

### **Footer Section**
- Dynamic navigation menus from Strapi
- Social media links integration
- Office locations management
- Newsletter subscription

## 🔧 Strapi CMS Integration

### **Working Endpoints:**
- **Applications** - `/api/applications?populate=*`
- **Industries** - `/api/industries?populate=*`
- **Footer** - `/api/footer?populate=all`

### **Features:**
- Dynamic content loading
- Real-time updates from CMS
- Robust fallback system
- Error handling and graceful degradation

## 🛠️ Installation & Setup

### **Prerequisites:**
- Node.js (v16 or higher)
- npm or yarn

### **Installation:**
```bash
# Clone the repository
git clone <repository-url>
cd quartic-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌐 Deployment

### **Development Server:**
- **Local**: `http://localhost:3000/`
- **Network**: `http://192.168.1.4:3000/`

### **Production Deployment:**
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Connect your GitHub repository
   - Automatic deployment on push

3. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Drag and drop the `dist` folder
   - Get instant global URL

4. **Deploy to GitHub Pages:**
   - Enable GitHub Pages in repository settings
   - Deploy from `dist` folder

## 🎨 Animation System

### **GSAP Animations:**
- Scroll-triggered animations
- Timeline animations for complex sequences
- Easing functions for natural motion
- Performance-optimized animations

### **CSS Transitions:**
- Smooth property transitions
- Hardware-accelerated animations
- Responsive design considerations
- Cross-browser compatibility

## 📱 Responsive Design

### **Breakpoints:**
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### **Features:**
- Mobile-first design approach
- Flexible grid systems
- Responsive typography
- Touch-friendly interactions

## 🔧 Configuration

### **Environment Variables:**
Create a `.env.local` file:
```env
VITE_STRAPI_URL=https://cancerfax.unifiedinfotechonline.com
```

### **Strapi Configuration:**
- Base URL: `https://cancerfax.unifiedinfotechonline.com`
- Timeout: 10 seconds
- Retry logic: 2 attempts
- Error handling: Graceful fallbacks

## 📊 Performance

### **Optimizations:**
- Code splitting and lazy loading
- Image optimization (WebP format)
- Bundle optimization with tree shaking
- Efficient caching strategies
- Hardware-accelerated animations

### **Metrics:**
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Open browser**: Navigate to `http://localhost:3000/`

## 📞 Support

For questions or support, please contact the development team.

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for Quartic**