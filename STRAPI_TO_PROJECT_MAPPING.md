# Strapi to Project Component Mapping

## 🎯 **Complete Mapping Based on Strapi Admin Interface**

Based on the Strapi admin interface shown, here's the exact mapping between Strapi sections and your project components:

### **✅ EXACT MATCHES (Direct Integration)**

| **Strapi Section** | **Project Component** | **Status** | **Action** |
|-------------------|----------------------|------------|------------|
| `Hero Section` | `HeroSection` | ✅ **Perfect Match** | Direct integration |
| `How It Works` | `HowItWorksSection` | ✅ **Already Done** | ✅ **Completed** |
| `Our Process` | `OurProcessSection` | ✅ **Already Done** | ✅ **Completed** |
| `Resources` | `BlogLatestSection` | ✅ **Already Done** | ✅ **Completed** |

### **🔄 SECTION RENAMES (Strapi → Project)**

| **Strapi Section** | **Project Component** | **Match Level** | **Action** |
|-------------------|----------------------|-----------------|------------|
| `Real Results` | `WhyChooseQuarticSection` | 🔄 **Rename Match** | Map Strapi data to component |
| `Where It Works` | `IndustriesSection` | 🔄 **Rename Match** | Map Strapi data to component |
| `Request Demo` | `VideoCTASection` | 🔄 **Rename Match** | Map Strapi data to component |
| `Application` | `SophisticatedApplicationsSection` | 🔄 **Rename Match** | Map Strapi data to component |
| `Who Is It For` | `StakeholdersSection` | 🔄 **Rename Match** | Map Strapi data to component |
| `Customer Proofs` | `CustomerTestimonialsSection` | 🔄 **Rename Match** | Map Strapi data to component |
| `CTA Section Schedule Demo` | `Footer` (or new component) | 🔄 **Rename Match** | Map Strapi data to component |

### **❓ UNMAPPED PROJECT COMPONENTS**

| **Project Component** | **Current Status** | **Action** |
|----------------------|-------------------|------------|
| `Header` | No Strapi equivalent | Keep as is (static) |
| `ClientLogoSlider` | No Strapi equivalent | Keep as is (static) |
| `WhyMOMSection` | No Strapi equivalent | Keep as is (static) |
| `DataIntoActionSection` | No Strapi equivalent | Keep as is (static) |
| `IWSSection` | No Strapi equivalent | Keep as is (static) |
| `ApplicationsSection` | No Strapi equivalent | Keep as is (static) |
| `SimpleApplicationsSection` | No Strapi equivalent | Keep as is (static) |
| `Footer` | No Strapi equivalent | Keep as is (static) |

## 🚀 **Integration Strategy**

### **Phase 1: Direct Matches (Already Done)**
- ✅ `HowItWorksSection` ↔ `How It Works`
- ✅ `OurProcessSection` ↔ `Our Process`  
- ✅ `BlogLatestSection` ↔ `Resources`

### **Phase 2: Rename Matches (Next Steps)**
1. **`VideoCTASection`** ↔ **`Request Demo`**
   - Strapi: "See what real-time, intelligent manufacturing looks like"
   - Perfect match for title

2. **`IndustriesSection`** ↔ **`Where It Works`**
   - Strapi: "Built for Regulated Operations"
   - Use as section title, keep existing industry data

3. **`SophisticatedApplicationsSection`** ↔ **`Application`**
   - Strapi: "Transform Your Operations with Quartic"
   - Use as section title, keep existing app data

4. **`StakeholdersSection`** ↔ **`Who Is It For`**
   - Strapi: "Quartic Built for every stakeholder"
   - Use as section title, keep existing stakeholder data

5. **`CustomerTestimonialsSection`** ↔ **`Customer Proofs`**
   - Strapi: "What our customers say"
   - Use as section title, keep existing testimonial data

6. **`WhyChooseQuarticSection`** ↔ **`Real Results`**
   - Strapi: "Driving KPIs in Batch-Critical Environments"
   - Use as section title, keep existing content

### **Phase 3: New Components (Optional)**
- **`HeroSection`** ↔ **`Hero Section`** (if Strapi has hero data)
- **`CTASectionScheduleDemo`** ↔ **`CTA Section Schedule Demo`** (new component)

## 📋 **Implementation Plan**

### **Step 1: Update useHomepageData.js**
Add all Strapi sections to the fallback data structure:

```javascript
const fallbackData = {
  // Existing sections...
  heroSection: homepage?.attributes?.heroSection || { /* fallback */ },
  realResults: homepage?.attributes?.realResults || { /* fallback */ },
  whereItWorks: homepage?.attributes?.whereItWorks || { /* fallback */ },
  requestDemo: homepage?.attributes?.requestDemo || { /* fallback */ },
  application: homepage?.attributes?.application || { /* fallback */ },
  whoIsItFor: homepage?.attributes?.whoIsItFor || { /* fallback */ },
  customerProofs: homepage?.attributes?.customerProofs || { /* fallback */ },
  ctaSectionScheduleDemo: homepage?.attributes?.ctaSectionScheduleDemo || { /* fallback */ }
};
```

### **Step 2: Update Components**
Update each component to use Strapi data for titles/headings while keeping existing complex data:

```javascript
// Example for VideoCTASection
const sectionData = homepage?.attributes?.requestDemo || fallbackData;
const title = sectionData.title || "See what real-time, intelligent manufacturing looks like";
```

### **Step 3: Test Integration**
- Verify all sections display Strapi titles
- Ensure existing functionality is preserved
- Test responsive design

## 🎯 **Expected Result**

After integration:
- ✅ All sections will use Strapi data for titles/headings
- ✅ Complex data structures preserved
- ✅ Full functionality maintained
- ✅ Easy content management through Strapi
- ✅ Fallback data for offline/error states

This approach gives you the best of both worlds: Strapi content management for basic content and preserved rich functionality for complex components.

