# Strapi Data vs Project Sections Comparison

## 📊 **Data Mapping Analysis**

### **✅ SECTIONS WITH STRAPI DATA (Available in Strapi)**

| Project Component | Strapi Section | Status | Data Match |
|------------------|----------------|--------|------------|
| `Header` | `bannerCtaSection` | ✅ **Available** | ✅ **Perfect Match** |
| `HeroSection` | `heroSection` | ✅ **Available** | ✅ **Perfect Match** |
| `ClientLogoSlider` | `partnersSection` | ✅ **Available** | ✅ **Perfect Match** |
| `WhyMOMSection` | `theQuarticAdvantage` | ✅ **Available** | ✅ **Perfect Match** |
| `WhyChooseQuarticSection` | `whyChooseQuartic` | ✅ **Available** | ✅ **Perfect Match** |
| `BlogLatestSection` | `resources` | ✅ **Available** | ✅ **Perfect Match** |

### **🆕 NEW SECTIONS IN STRAPI (Not in Project Yet)**

| Strapi Section | Description | Project Component Needed |
|----------------|-------------|-------------------------|
| `HowItWorks` | "AI in Manufacturing Needs Real-Time Context" | `HowItWorksSection` |
| `RealResults` | "Driving KPIs in Batch-Critical Environments" | `RealResultsSection` |
| `OurProcess` | "How MOM Becomes Intelligent" | `OurProcessSection` |
| `WhereItWorks` | "Built for Regulated Operations" | `WhereItWorksSection` |
| `RequestDemo` | "See what real-time, intelligent manufacturing looks like" | `RequestDemoSection` |
| `Application` | "Transform Your Operations with Quartic" | `ApplicationSection` |
| `whoIsItFor` | "Quartic Built for every stakeholder" | `WhoIsItForSection` |
| `customerProofs` | "What our customers say" | `CustomerProofsSection` |
| ~~`resources`~~ | ~~"Explore More on Intelligent Manufacturing"~~ | ✅ **`BlogLatestSection`** |
| `ctaSectionScheduleDemo` | "Deliver Consistency, Agility, and Cost Efficiency in CPG Operations" | `CTASectionScheduleDemo` |

### **❓ SECTIONS IN PROJECT (Need Strapi Mapping)**

| Project Component | Current Data Source | Strapi Mapping Needed |
|------------------|-------------------|----------------------|
| `InsightsSection` | `insightsSection` (fallback) | ❌ **Not in Strapi** |
| `DataIntoActionSection` | `dataIntoAction` (fallback) | ❌ **Not in Strapi** |
| `ProcessFlowSection` | `processFlow` (fallback) | ❌ **Not in Strapi** |
| `IWSSection` | `iwsSection` (fallback) | ❌ **Not in Strapi** |
| `VideoCTASection` | `videoCTA` (fallback) | ❌ **Not in Strapi** |
| `SophisticatedApplicationsSection` | `sophisticatedApplications` (fallback) | ❌ **Not in Strapi** |
| `StakeholdersSection` | `stakeholders` (fallback) | ❌ **Not in Strapi** |
| `IndustriesSection` | `industries` (fallback) | ❌ **Not in Strapi** |
| `CustomerTestimonialsSection` | `customerTestimonials` (fallback) | ❌ **Not in Strapi** |
| ~~`BlogLatestSection`~~ | ~~`blogLatest` (fallback)~~ | ✅ **Now uses `resources`** |

## 🔍 **Detailed Strapi Data Analysis**

### **1. bannerCtaSection** ✅
```json
{
  "id": 30,
  "title": "Podcast",
  "subtitle": "Global UNS, Local Complexity: Why Edge Context Isn't Enough",
  "description": null,
  "visible": null
}
```
**Status**: Perfect match with Header component

### **2. heroSection** ✅
```json
{
  "id": 21,
  "title": "Decision Intelligence for Manufacturing Operations Management",
  "subtitle": "Deliver responsive, agile operations with smart manufacturing solutions powered by AI and DataOps for real-time context.",
  "primaryCtaText": "Request a Demo",
  "primaryCtaUrl": "https://www.quartic.ai/demo/",
  "secondaryCtaText": "Watch Video",
  "secondaryCtaUrl": "https://www.quartic.ai/wp-content/uploads/2025/09/Quartic-Platform-Rebrand1.mp4",
  "videoUrl": "https://www.quartic.ai/wp-content/uploads/2025/09/Quartic-Platform-Rebrand1.mp4"
}
```
**Status**: Perfect match with HeroSection component

### **3. partnersSection** ✅
```json
{
  "id": 20,
  "title": "Trusted by leading global manufacturers",
  "subtitle": null,
  "description": null,
  "visible": null
}
```
**Status**: Perfect match with ClientLogoSlider component

### **4. theQuarticAdvantage** ✅
```json
{
  "id": 20,
  "title": "The Quartic Advantage",
  "subtitle": "Connected, Intelligent MOM",
  "visible": null
}
```
**Status**: Perfect match with WhyMOMSection component

### **5. whyChooseQuartic** ✅
```json
{
  "id": 11,
  "title": "Why Choose Quartic",
  "visible": null
}
```
**Status**: Perfect match with WhyChooseQuarticSection component

### **6. resources** ✅
```json
{
  "id": 7,
  "title": "Resources",
  "subtitle": "Explore More on Intelligent Manufacturing",
  "description": null,
  "visible": null
}
```
**Status**: Perfect match with BlogLatestSection component

## 🆕 **NEW STRAPI SECTIONS TO INTEGRATE**

### **7. HowItWorks** ⭐ NEW
```json
{
  "id": 20,
  "title": "How It Works",
  "subtitle": "AI in Manufacturing Needs Real-Time Context",
  "description": null,
  "visible": null
}
```
**Action**: Create `HowItWorksSection` component

### **8. RealResults** ⭐ NEW
```json
{
  "id": 16,
  "title": "Real Results",
  "subtitle": "Driving KPIs in Batch-Critical Environments",
  "description": "Discover all customer use cases",
  "visible": null
}
```
**Action**: Create `RealResultsSection` component

### **9. OurProcess** ⭐ NEW
```json
{
  "id": 18,
  "title": "Our Process",
  "subtitle": "How MOM Becomes Intelligent",
  "description": "Quartic uses DataOps for real-time context to convert raw signals into decision intelligence across the enterprise.",
  "visible": null
}
```
**Action**: Create `OurProcessSection` component

### **10. WhereItWorks** ⭐ NEW
```json
{
  "id": 10,
  "title": "Where It Works",
  "Heading": "Built for Regulated Operations",
  "description": "For industries where agility, compliance, and context must scale together.",
  "visible": null
}
```
**Action**: Create `WhereItWorksSection` component

### **11. RequestDemo** ⭐ NEW
```json
{
  "id": 31,
  "title": "See what real-time, intelligent manufacturing looks like",
  "subtitle": null,
  "description": null,
  "visible": null
}
```
**Action**: Create `RequestDemoSection` component

### **12. Application** ⭐ NEW
```json
{
  "id": 14,
  "heading": "Transform Your Operations with Quartic",
  "description": null,
  "title": "Applications",
  "visible": null
}
```
**Action**: Create `ApplicationSection` component

### **13. whoIsItFor** ⭐ NEW
```json
{
  "id": 13,
  "title": "Who Is It For",
  "subtitle": "Quartic Built for every stakeholder",
  "description": null,
  "visible": null
}
```
**Action**: Create `WhoIsItForSection` component

### **14. customerProofs** ⭐ NEW
```json
{
  "id": 8,
  "title": "Customer Proof",
  "subtitle": "What our customers say",
  "description": null,
  "visible": null
}
```
**Action**: Create `CustomerProofsSection` component

### **14. resources** ⭐ NEW
```json
{
  "id": 7,
  "title": "Resources",
  "subtitle": "Explore More on Intelligent Manufacturing",
  "description": null,
  "visible": null
}
```
**Action**: Create `ResourcesSection` component

### **15. ctaSectionScheduleDemo** ⭐ NEW
```json
{
  "id": 32,
  "title": "Deliver Consistency, Agility, and Cost Efficiency in CPG Operations",
  "subtitle": null,
  "description": null,
  "visible": null
}
```
**Action**: Create `CTASectionScheduleDemo` component

## 📋 **Action Plan**

### **Phase 1: Update Existing Components** ✅
- [x] Update `useHomepageData.js` to use Strapi data
- [x] Ensure existing components work with Strapi data structure

### **Phase 2: Create New Components** ⏳
- [ ] Create `HowItWorksSection` component
- [ ] Create `RealResultsSection` component
- [ ] Create `OurProcessSection` component
- [ ] Create `WhereItWorksSection` component
- [ ] Create `RequestDemoSection` component
- [ ] Create `ApplicationSection` component
- [ ] Create `WhoIsItForSection` component
- [ ] Create `CustomerProofsSection` component
- [ ] Create `ResourcesSection` component
- [ ] Create `CTASectionScheduleDemo` component

### **Phase 3: Add Missing Strapi Content** ⏳
- [ ] Add `insightsSection` to Strapi
- [ ] Add `dataIntoAction` to Strapi
- [ ] Add `processFlow` to Strapi
- [ ] Add `iwsSection` to Strapi
- [ ] Add `videoCTA` to Strapi
- [ ] Add `sophisticatedApplications` to Strapi
- [ ] Add `stakeholders` to Strapi
- [ ] Add `industries` to Strapi
- [ ] Add `customerTestimonials` to Strapi
- [ ] Add `blogLatest` to Strapi

## 🎯 **Summary**

- **✅ Working**: 6 sections with perfect Strapi integration
- **🆕 New**: 9 new sections available in Strapi (need components)
- **❓ Missing**: 9 sections in project (need Strapi content)
- **📊 Total**: 24 sections to manage (15 in Strapi + 9 in project)

The integration is working well for the existing sections, but there are many opportunities to expand with the new Strapi content!
