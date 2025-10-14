import React from 'react';
import heroImg1 from '../assets/images/home/hero-banner-img1.jpg';
import heroImg2 from '../assets/images/home/home_banner_img2.jpg';
import heroImg3 from '../assets/images/home/home_banner_img3.jpg';
import heroImg4 from '../assets/images/home/home_banner_img4.jpg';

const ImageTest = () => {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Image Test Component</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {images.map((img, index) => (
          <div key={index} style={{ border: '2px solid #ccc', padding: '10px' }}>
            <h3>Image {index + 1}</h3>
            <p>URL: {img}</p>
            <img 
              src={img} 
              alt={`Hero ${index + 1}`}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              onLoad={() => console.log(`Image ${index + 1} loaded successfully`)}
              onError={(e) => console.error(`Image ${index + 1} failed to load:`, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
