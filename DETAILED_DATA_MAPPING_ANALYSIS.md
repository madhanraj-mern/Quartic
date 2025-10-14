# Detailed Data Mapping Analysis - Project vs Strapi

## 🔍 **Component-by-Component Data Analysis**

### **1. IndustriesSection → WhereItWorks (Strapi)**

#### **Current IndustriesSection Data Structure:**
```javascript
const defaultIndustries = [
  {
    title: 'iLuminator DataOps',
    description: 'Create Context-in-Motion: Stream real-time context for materials, processes, procedures, and equipment.',
    ctaLabel: 'Learn More',
    background: pharmaImg,
    type: 'iluminator',
    metrics: [
      { value: 35, label: 'faster data integration' },
      { value: 45, label: 'reduction in data prep time' },
      { value: 60, label: 'improved data quality' },
      { value: 100, label: 'real-time data access' },
    ],
  },
  {
    title: 'Chemicals & Advanced Materials',
    description: 'Improve formulations and quality consistency.',
    ctaLabel: 'Read More',
    background: chemicalsImg,
    metrics: [
      { value: 22, label: 'increase in first-pass quality' },
      { value: 27, label: 'reduction in deviations' },
      { value: 18, label: 'faster validation cycles' },
      { value: 40, label: 'higher asset utilization' },
    ],
  },
  // ... more industries
];
```

#### **Strapi WhereItWorks Data:**
```json
{
  "id": 10,
  "title": "Where It Works",
  "Heading": "Built for Regulated Operations",
  "description": "For industries where agility, compliance, and context must scale together.",
  "visible": null
}
```

#### **❌ MISMATCH ANALYSIS:**
- **Project**: Complex industry data with metrics, images, CTAs
- **Strapi**: Simple title/description structure
- **Action**: Need to add detailed industry data to Strapi or use fallback data

---

### **2. VideoCTASection → RequestDemo (Strapi)**

#### **Current VideoCTASection Data Structure:**
```javascript
// Hardcoded content
const title = "See what real-time, intelligent manufacturing looks like";
const ctaText = "Request a Demo";
const ctaUrl = "#";
const videoSrc = ctaVideo; // Video file
```

#### **Strapi RequestDemo Data:**
```json
{
  "id": 31,
  "title": "See what real-time, intelligent manufacturing looks like",
  "subtitle": null,
  "description": null,
  "visible": null
}
```

#### **✅ PERFECT MATCH:**
- **Project**: "See what real-time, intelligent manufacturing looks like"
- **Strapi**: "See what real-time, intelligent manufacturing looks like"
- **Action**: Direct integration possible

---

### **3. StakeholdersSection → whoIsItFor (Strapi)**

#### **Current StakeholdersSection Data Structure:**
```javascript
const stakeholders = [
  {
    id: 1,
    title: 'Process Engineers',
    description: 'Optimize manufacturing processes with real-time data insights and predictive analytics.',
    image: processEngineerImg,
    icon: '⚙️',
    features: [
      'Real-time process monitoring',
      'Predictive quality control',
      'Automated optimization recommendations'
    ]
  },
  {
    id: 2,
    title: 'Data Analysts',
    description: 'Transform raw manufacturing data into actionable business intelligence.',
    image: dataAnalystImg,
    icon: '📊',
    features: [
      'Advanced analytics dashboards',
      'Custom data visualizations',
      'Automated reporting'
    ]
  },
  // ... more stakeholders
];
```

#### **Strapi whoIsItFor Data:**
```json
{
  "id": 13,
  "title": "Who Is It For",
  "subtitle": "Quartic Built for every stakeholder",
  "description": null,
  "visible": null
}
```

#### **❌ MISMATCH ANALYSIS:**
- **Project**: Detailed stakeholder data with features, images, descriptions
- **Strapi**: Simple title/subtitle structure
- **Action**: Need to add detailed stakeholder data to Strapi or use fallback data

---

### **4. CustomerTestimonialsSection → customerProofs (Strapi)**

#### **Current CustomerTestimonialsSection Data Structure:**
```javascript
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    title: "Plant Manager",
    company: "Global Manufacturing Co.",
    quote: "Quartic has transformed our manufacturing operations with real-time insights and predictive analytics.",
    image: "/assets/images/testimonials/customer1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson", 
    title: "Process Engineer",
    company: "Pharma Solutions Inc.",
    quote: "The DataOps approach has revolutionized how we handle process data and make decisions.",
    image: "/assets/images/testimonials/customer2.jpg",
    rating: 5
  }
];
```

#### **Strapi customerProofs Data:**
```json
{
  "id": 8,
  "title": "Customer Proof",
  "subtitle": "What our customers say",
  "description": null,
  "visible": null
}
```

#### **❌ MISMATCH ANALYSIS:**
- **Project**: Detailed testimonial data with names, companies, quotes, images
- **Strapi**: Simple title/subtitle structure
- **Action**: Need to add detailed testimonial data to Strapi or use fallback data

---

### **5. SophisticatedApplicationsSection → Application (Strapi)**

#### **Current SophisticatedApplicationsSection Data Structure:**
```javascript
const applications = [
  {
    title: "Process Optimizer",
    description: "AI-powered process control for yield, quality, and diagnostics.",
    icon: "/assets/images/home/solutions/icons/performance-improvement.svg",
    image: "/assets/images/home/solutions/process-optimizer.jpg",
    features: [
      "Real-time process monitoring",
      "Predictive quality control",
      "Automated optimization"
    ]
  },
  {
    title: "Reliability",
    description: "Predictive failure detection to minimize downtime.",
    icon: "/assets/images/home/solutions/icons/predictive-maintenance.svg",
    image: "/assets/images/home/solutions/reliability.jpg",
    features: [
      "Predictive maintenance",
      "Failure analysis",
      "Asset optimization"
    ]
  }
];
```

#### **Strapi Application Data:**
```json
{
  "id": 14,
  "heading": "Transform Your Operations with Quartic",
  "description": null,
  "title": "Applications",
  "visible": null
}
```

#### **❌ MISMATCH ANALYSIS:**
- **Project**: Detailed application data with features, icons, images
- **Strapi**: Simple heading/title structure
- **Action**: Need to add detailed application data to Strapi or use fallback data

---

## 📊 **Data Mismatch Summary**

### **✅ PERFECT MATCHES (1 component)**
| Component | Strapi Section | Match Level | Action |
|-----------|----------------|-------------|--------|
| `VideoCTASection` | `RequestDemo` | ✅ **100%** | Direct integration |

### **❌ MAJOR MISMATCHES (4 components)**
| Component | Strapi Section | Match Level | Issue |
|-----------|----------------|-------------|-------|
| `IndustriesSection` | `WhereItWorks` | ❌ **20%** | Complex data vs simple structure |
| `StakeholdersSection` | `whoIsItFor` | ❌ **20%** | Detailed data vs simple structure |
| `CustomerTestimonialsSection` | `customerProofs` | ❌ **20%** | Complex data vs simple structure |
| `SophisticatedApplicationsSection` | `Application` | ❌ **20%** | Complex data vs simple structure |

## 🎯 **Integration Strategy**

### **Option 1: Use Fallback Data (Recommended)**
- Keep existing complex data structures
- Use Strapi for titles/headings only
- Maintain rich functionality and styling

### **Option 2: Enhance Strapi Data**
- Add detailed data structures to Strapi
- Migrate all complex data to Strapi
- Requires significant Strapi content management

### **Option 3: Hybrid Approach**
- Use Strapi for basic content (titles, descriptions)
- Keep complex data in fallback structures
- Best of both worlds

## 🚀 **Recommended Implementation**

### **Phase 1: Quick Integration (Use Fallback Data)**
1. **RequestDemoSection** - Direct integration (100% match)
2. **WhereItWorksSection** - Use Strapi title + fallback data
3. **WhoIsItForSection** - Use Strapi title + fallback data
4. **CustomerProofsSection** - Use Strapi title + fallback data
5. **ApplicationSection** - Use Strapi title + fallback data

### **Phase 2: Enhanced Integration (Optional)**
- Add detailed data structures to Strapi
- Migrate complex data to Strapi
- Full dynamic content management

## 📋 **Next Steps**

1. **Start with RequestDemoSection** (perfect match)
2. **Create other sections with hybrid approach**
3. **Test all integrations**
4. **Consider Strapi enhancement for future**

The analysis shows that most components have complex data structures that don't match the simple Strapi data. The recommended approach is to use Strapi for basic content and maintain fallback data for complex structures.
