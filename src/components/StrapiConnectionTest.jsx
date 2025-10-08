import React, { useState, useEffect } from 'react';
import StrapiAPI from '../utils/strapiConfig';

const StrapiConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState('Testing...');
  const [testResults, setTestResults] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const testConnection = async () => {
      const results = {};
      
      try {
        // Test applications
        const applications = await StrapiAPI.getApplications();
        results.applications = applications ? `${applications.length} items` : 'Failed';
      } catch (error) {
        results.applications = 'Failed';
      }

      try {
        // Test stakeholders
        const stakeholders = await StrapiAPI.getStakeholders();
        results.stakeholders = stakeholders ? `${stakeholders.length} items` : 'Failed';
      } catch (error) {
        results.stakeholders = 'Failed';
      }

      try {
        // Test industries
        const industries = await StrapiAPI.getIndustries();
        results.industries = industries ? `${industries.length} items` : 'Failed';
      } catch (error) {
        results.industries = 'Failed';
      }

      try {
        // Test success stories
        const successStories = await StrapiAPI.getSuccessStories();
        results.successStories = successStories ? `${successStories.length} items` : 'Failed';
      } catch (error) {
        results.successStories = 'Failed';
      }

      setTestResults(results);
      
      const successCount = Object.values(results).filter(result => result !== 'Failed').length;
      const totalCount = Object.keys(results).length;
      
      if (successCount === totalCount) {
        setConnectionStatus('✅ Strapi Connected - All endpoints working');
      } else if (successCount > 0) {
        setConnectionStatus(`⚠️ Partial Connection - ${successCount}/${totalCount} endpoints working`);
      } else {
        setConnectionStatus('❌ Strapi Not Available - Using fallback data');
      }
    };

    testConnection();
  }, []);

  if (!isVisible) {
    return (
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        background: '#f0f0f0',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        cursor: 'pointer'
      }} onClick={() => setIsVisible(true)}>
        🔗 Strapi Status
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 9999,
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      border: '2px solid #007bff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      minWidth: '300px',
      maxWidth: '400px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, color: '#007bff' }}>Strapi Connection Status</h3>
        <button 
          onClick={() => setIsVisible(false)}
          style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}
        >
          ✕
        </button>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', background: '#f8f9fa', borderRadius: '4px' }}>
        <strong>{connectionStatus}</strong>
      </div>

      <div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Endpoint Test Results:</h4>
        {Object.entries(testResults).map(([endpoint, result]) => (
          <div key={endpoint} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '5px',
            fontSize: '12px'
          }}>
            <span style={{ textTransform: 'capitalize' }}>{endpoint}:</span>
            <span style={{ 
              color: result === 'Failed' ? '#dc3545' : '#28a745',
              fontWeight: 'bold'
            }}>
              {result}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>
        <p><strong>Note:</strong> If Strapi is not running, the website will use fallback data and work perfectly.</p>
        <p><strong>Setup:</strong> Follow STRAPI_SETUP_GUIDE.md to configure your Strapi instance.</p>
      </div>
    </div>
  );
};

export default StrapiConnectionTest;
