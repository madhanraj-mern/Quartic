import React, { useState, useEffect } from 'react';

const DirectImageTest = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Test the actual URLs from Vercel
    const testUrls = [
      'https://quartic-zgr5.vercel.app/assets/images/hero-banner-img1-CdsjqXth.jpg',
      'https://quartic-zgr5.vercel.app/assets/images/home_banner_img2-BmdFbmA.jpg',
      'https://quartic-zgr5.vercel.app/assets/images/home_banner_img3-BpAjKaz1.jpg',
      'https://quartic-zgr5.vercel.app/assets/images/home_banner_img4-BLoUuF3p.jpg'
    ];

    // Test each URL
    const testPromises = testUrls.map((url, index) => 
      fetch(url, { method: 'HEAD' })
        .then(response => ({
          index: index + 1,
          url,
          status: response.status,
          contentType: response.headers.get('content-type'),
          accessible: response.ok
        }))
        .catch(error => ({
          index: index + 1,
          url,
          status: 'ERROR',
          contentType: 'N/A',
          accessible: false,
          error: error.message
        }))
    );

    Promise.all(testPromises).then(results => {
      setImageUrls(results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Testing image URLs...</div>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', margin: '20px 0' }}>
      <h2>Direct Image URL Test</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {imageUrls.map((result, index) => (
          <div key={index} style={{ 
            border: '2px solid #dee2e6', 
            padding: '15px', 
            borderRadius: '8px',
            backgroundColor: result.accessible ? '#d4edda' : '#f8d7da'
          }}>
            <h3>Image {result.index}</h3>
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>Content-Type:</strong> {result.contentType}</p>
            <p><strong>Accessible:</strong> {result.accessible ? '✅ Yes' : '❌ No'}</p>
            <p><strong>URL:</strong> <a href={result.url} target="_blank" rel="noopener noreferrer">{result.url}</a></p>
            {result.error && <p><strong>Error:</strong> {result.error}</p>}
            
            {result.accessible && (
              <div style={{ marginTop: '10px' }}>
                <img 
                  src={result.url} 
                  alt={`Test ${result.index}`}
                  style={{ 
                    width: '100%', 
                    height: '150px', 
                    objectFit: 'cover',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                  }}
                  onLoad={() => console.log(`Direct image ${result.index} loaded successfully`)}
                  onError={(e) => console.error(`Direct image ${result.index} failed to load:`, e)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectImageTest;
