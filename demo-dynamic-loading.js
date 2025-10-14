#!/usr/bin/env node

/**
 * Demo script showing how dynamic loading works
 * This simulates the React app's data fetching logic
 */

import https from 'https';
import http from 'http';

// Simulate the React app's data fetching logic
async function simulateDynamicLoading() {
  console.log('🎭 Simulating React App Dynamic Loading');
  console.log('=====================================\n');

  const strapiUrl = 'https://cancerfax.unifiedinfotechonline.com';
  
  try {
    console.log('1️⃣ Fetching data from Strapi...');
    const response = await fetchStrapiData(strapiUrl);
    
    console.log('2️⃣ Checking for dynamic sections...');
    const hasDynamicSections = response.data?.sections || response.data?.attributes?.sections;
    
    if (hasDynamicSections) {
      console.log('✅ Dynamic sections detected!');
      console.log('🔄 Converting to React component format...');
      
      const convertedSections = convertStrapiSections(response.data);
      console.log(`📊 Found ${convertedSections.length} sections:`);
      
      convertedSections.forEach((section, index) => {
        console.log(`   ${index + 1}. ${section.__component} (ID: ${section.id})`);
      });
      
      console.log('\n🎉 Dynamic loading would work!');
      console.log('The React app would render these sections dynamically.');
      
    } else {
      console.log('❌ No dynamic sections found');
      console.log('📄 Using fallback data instead...');
      
      const fallbackData = getFallbackData();
      console.log(`📊 Fallback has ${Object.keys(fallbackData).length} sections`);
      console.log('🔧 The React app would use static rendering.');
    }
    
  } catch (error) {
    console.log('❌ Strapi connection failed:', error.message);
    console.log('📄 Using fallback data...');
    console.log('🔧 The React app would use static rendering.');
  }
}

// Fetch data from Strapi (simplified version)
async function fetchStrapiData(baseUrl) {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}/api/homepage?populate=*`;
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error('Invalid JSON response'));
        }
      });
    });
    
    req.on('error', reject);
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Convert Strapi sections to React format (simplified)
function convertStrapiSections(strapiData) {
  const sections = strapiData.sections || strapiData.attributes?.sections || [];
  
  return sections.map(section => ({
    __component: section.__component,
    id: section.id,
    visible: section.visible !== false,
    data: section,
    internalKey: section.__component?.split('.')[1] || section.__component
  }));
}

// Fallback data (simplified)
function getFallbackData() {
  return {
    heroSection: { title: 'Fallback Hero' },
    partnersSection: { title: 'Fallback Partners' },
    howItWorks: { title: 'Fallback How It Works' },
    ourProcess: { title: 'Fallback Our Process' },
    iwsSection: { title: 'Fallback IWS' },
    customerProofs: { title: 'Fallback Customer Proofs' },
    whyChooseQuartic: { title: 'Fallback Why Choose' },
    theQuarticAdvantage: { title: 'Fallback Advantage' },
    requestDemo: { title: 'Fallback Request Demo' },
    blogLatest: { title: 'Fallback Blog' }
  };
}

// Show component mapping
function showComponentMapping() {
  console.log('\n🔧 Component Mapping Reference');
  console.log('===============================');
  
  const componentMap = {
    'sections.hero-section': 'HeroSection',
    'sections.partners-section': 'ClientLogoSlider',
    'sections.how-it-works': 'HowItWorksSection',
    'sections.our-process': 'OurProcessSection',
    'sections.iws-section': 'IWSSection',
    'sections.customer-proofs': 'CustomerProofsSection',
    'sections.why-choose-quartic': 'WhyChooseQuarticSection',
    'sections.the-quartic-advantage': 'WhyMOMSection',
    'sections.request-demo': 'RequestDemoSection',
    'sections.blog-latest': 'BlogLatestSection'
  };
  
  Object.entries(componentMap).forEach(([strapiType, reactComponent]) => {
    console.log(`   ${strapiType} → ${reactComponent}`);
  });
}

// Show how the React app decides rendering mode
function showRenderingLogic() {
  console.log('\n⚛️  React App Rendering Logic');
  console.log('=============================');
  
  console.log(`
// In HomePage.jsx
const isDynamic = homepage?.isDynamic && homepage?.dynamicSections;

return (
  <div>
    {isDynamic ? (
      // 🎯 Dynamic rendering - sections from Strapi
      <DynamicSectionRenderer 
        sections={homepage.dynamicSections} 
        pageType="homepage" 
        homepage={homepage}
      />
    ) : (
      // 🔧 Static rendering - hardcoded sections
      <>
        <Header homepage={homepage} />
        <HeroSection homepage={homepage} />
        <ClientLogoSlider homepage={homepage} />
        // ... more static sections
      </>
    )}
  </div>
);
  `);
}

// Main execution
async function main() {
  await simulateDynamicLoading();
  showComponentMapping();
  showRenderingLogic();
  
  console.log('\n✨ Demo completed!');
  console.log('\n📚 Next steps:');
  console.log('1. Configure dynamic zones in Strapi admin');
  console.log('2. Create content with proper __component values');
  console.log('3. Test with: npm run dev');
  console.log('4. Check browser console for dynamic loading messages');
}

main().catch(console.error);


