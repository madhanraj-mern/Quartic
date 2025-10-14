// Check what sections are available in Strapi
// Run with: node check-strapi-sections.js

const checkStrapiSections = async () => {
  const apiUrl = 'https://cancerfax.unifiedinfotechonline.com/api/homepage?populate=*';
  
  console.log('🔍 Checking Strapi API for available sections...\n');
  console.log('API URL:', apiUrl);
  console.log('---\n');
  
  try {
    const response = await fetch(apiUrl);
    
    console.log('Response Status:', response.status);
    console.log('Response Headers:', Object.fromEntries(response.headers.entries()));
    console.log('---\n');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    console.log('✅ API Response received successfully!\n');
    console.log('📊 Data Structure:');
    console.log(JSON.stringify(data, null, 2));
    
    if (data.data && data.data.attributes) {
      console.log('\n📋 Available Sections:');
      const sections = Object.keys(data.data.attributes);
      sections.forEach((section, index) => {
        console.log(`${index + 1}. ${section}`);
      });
      
      console.log('\n🔍 Section Details:');
      sections.forEach(section => {
        const sectionData = data.data.attributes[section];
        console.log(`\n--- ${section} ---`);
        if (typeof sectionData === 'object' && sectionData !== null) {
          if (Array.isArray(sectionData)) {
            console.log(`Type: Array (${sectionData.length} items)`);
            if (sectionData.length > 0) {
              console.log('Sample item:', JSON.stringify(sectionData[0], null, 2));
            }
          } else {
            console.log('Type: Object');
            console.log('Properties:', Object.keys(sectionData));
            console.log('Sample data:', JSON.stringify(sectionData, null, 2));
          }
        } else {
          console.log('Type:', typeof sectionData);
          console.log('Value:', sectionData);
        }
      });
    } else {
      console.log('❌ No data structure found in response');
      console.log('Available keys:', Object.keys(data));
    }
    
  } catch (error) {
    console.error('❌ Error checking Strapi API:', error.message);
    console.log('\n🔧 Possible issues:');
    console.log('1. API endpoint might not exist');
    console.log('2. CORS issues (try from browser)');
    console.log('3. Authentication required');
    console.log('4. Network connectivity issues');
  }
};

// Run the check
checkStrapiSections();
