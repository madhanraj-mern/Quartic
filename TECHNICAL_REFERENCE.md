# 🔧 Technical Reference Guide
## **React + Strapi Implementation Details**

---

## 📋 **Quick Reference for Developers**

### **Project Structure:**
```
quartic-clone/
├── src/
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── assets/             # Images, CSS, JS
│   └── utils/              # Utility functions
├── public/                 # Static assets
└── package.json           # Dependencies
```

---

## 🎨 **Animation Libraries Used**

### **1. Framer Motion (Primary)**
```bash
npm install framer-motion
```
**Used for:**
- Page transitions
- Component animations
- Hover effects
- Scroll animations

### **2. GSAP (GreenSock)**
```bash
npm install gsap
```
**Used for:**
- Advanced scroll animations
- Timeline animations
- Performance-critical animations

### **3. CSS Transitions**
**Used for:**
- Simple hover effects
- Loading states
- Micro-interactions

---

## 🧩 **Component Architecture**

### **Header Component:**
```javascript
// Sticky header with blur effect
const Header = ({ homepage }) => {
  const { isSticky, scrollDirection } = useStickyHeader();
  
  return (
    <motion.header
      className={`header ${isSticky ? 'sticky' : ''}`}
      style={{
        backdropFilter: isSticky ? 'blur(12px)' : 'none'
      }}
    >
      {/* Header content */}
    </motion.header>
  );
};
```

### **Hero Section:**
```javascript
// Animated text reveal
const HeroSection = ({ homepage }) => {
  return (
    <section className="hero">
      <AnimatedText
        tag="h1"
        text={homepage?.hero?.title || 'Default Title'}
        className="hero-title"
      />
    </section>
  );
};
```

### **Applications Section:**
```javascript
// Card hover animations
const ApplicationsSection = ({ homepage }) => {
  return (
    <div className="applications-grid">
      {applications.map((app, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Card content */}
        </motion.div>
      ))}
    </div>
  );
};
```

---

## 🔌 **Strapi CMS Integration**

### **API Configuration:**
```javascript
// src/utils/strapiConfig.js
export const STRAPI_CONFIG = {
  baseURL: 'https://cancerfax.unifiedinfotechonline.com',
  endpoints: {
    homepage: '/api/homepage',
    footer: '/api/footer',
    applications: '/api/applications'
  }
};
```

### **Data Fetching Hook:**
```javascript
// src/hooks/useHomepageData.js
const useHomepageData = () => {
  const { data, loading, error } = useStrapi('/api/homepage?populate=*');
  
  // Transform Strapi data to component format
  const transformedData = {
    hero: data?.hero || {},
    applications: data?.applications || [],
    footer: data?.footer || {}
  };
  
  return { data: transformedData, loading, error };
};
```

### **Component Data Usage:**
```javascript
// Using Strapi data in components
const Component = ({ homepage }) => {
  const title = homepage?.hero?.title || 'Fallback Title';
  const description = homepage?.hero?.description || 'Fallback Description';
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
```

---

## 🎯 **Animation Implementation**

### **1. Page Transitions:**
```javascript
// Framer Motion page variants
const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

// Usage in component
<motion.div
  initial="initial"
  animate="in"
  exit="out"
  variants={pageVariants}
  transition={pageTransition}
>
```

### **2. Scroll Animations:**
```javascript
// Intersection Observer for scroll effects
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }, []);
};
```

### **3. Hover Effects:**
```javascript
// Framer Motion hover animations
<motion.div
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
```

### **4. Staggered Animations:**
```javascript
// Staggered list animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Usage
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item, index) => (
    <motion.div key={index} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🚀 **Performance Optimizations**

### **1. Code Splitting:**
```javascript
// Lazy loading components
const LazyComponent = React.lazy(() => import('./Component'));

// Usage with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <LazyComponent />
</Suspense>
```

### **2. Memoization:**
```javascript
// Memoized components
const MemoizedComponent = React.memo(Component);

// Memoized callbacks
const handleClick = useCallback(() => {
  // Handle click
}, [dependency]);
```

### **3. Virtual Scrolling:**
```javascript
// For large lists
import { FixedSizeList as List } from 'react-window';

const VirtualList = ({ items }) => (
  <List
    height={600}
    itemCount={items.length}
    itemSize={50}
    itemData={items}
  >
    {({ index, style, data }) => (
      <div style={style}>
        {data[index].content}
      </div>
    )}
  </List>
);
```

---

## 📱 **Responsive Design**

### **Mobile-First CSS:**
```css
/* Base styles (mobile) */
.hero-section {
  padding: 2rem 1rem;
  font-size: 1.2rem;
}

/* Tablet */
@media (min-width: 768px) {
  .hero-section {
    padding: 3rem 2rem;
    font-size: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-section {
    padding: 4rem 3rem;
    font-size: 2rem;
  }
}
```

### **Touch Optimizations:**
```css
/* Touch-friendly buttons */
.button {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
```

---

## 🔧 **Development Workflow**

### **1. Local Development:**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **2. Strapi CMS:**
```bash
# Start Strapi server
cd quartic-cms
npm run develop

# Access admin panel
http://localhost:1337/admin
```

### **3. Deployment:**
```bash
# Build project
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

---

## 🛠️ **Custom Hooks**

### **1. Sticky Header Hook:**
```javascript
// src/hooks/useStickyHeader.js
const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 100);
      
      // Detect scroll direction
      setScrollDirection(scrollTop > lastScrollTop ? 'down' : 'up');
      lastScrollTop = scrollTop;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { isSticky, scrollDirection };
};
```

### **2. Scroll Animation Hook:**
```javascript
// src/hooks/useScrollAnimation.js
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, isVisible];
};
```

---

## 📊 **Performance Monitoring**

### **1. Core Web Vitals:**
```javascript
// Performance monitoring
const reportWebVitals = (metric) => {
  console.log(metric);
  // Send to analytics
};

export default reportWebVitals;
```

### **2. Bundle Analysis:**
```bash
# Analyze bundle size
npm run build
npx webpack-bundle-analyzer dist/static/js/*.js
```

---

## 🎯 **Best Practices**

### **1. Component Structure:**
```javascript
// Good component structure
const Component = ({ data, className }) => {
  // Hooks at the top
  const [state, setState] = useState();
  
  // Event handlers
  const handleClick = () => {};
  
  // Render
  return (
    <div className={className}>
      {/* JSX */}
    </div>
  );
};
```

### **2. Animation Performance:**
```javascript
// Use transform and opacity for animations
const goodAnimation = {
  transform: 'translateX(100px)',
  opacity: 0.5
};

// Avoid animating layout properties
const badAnimation = {
  width: '200px',
  height: '200px',
  margin: '10px'
};
```

### **3. Error Handling:**
```javascript
// Error boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    
    return this.props.children;
  }
}
```

---

## 🚀 **Deployment Checklist**

### **Pre-deployment:**
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] All animations working
- [ ] Mobile responsive
- [ ] Strapi data loading

### **Post-deployment:**
- [ ] Site loads correctly
- [ ] Animations smooth
- [ ] Mobile performance good
- [ ] SEO meta tags present
- [ ] Analytics tracking

---

**🎉 This technical reference provides everything your team needs to understand and maintain the React + Strapi implementation!**
