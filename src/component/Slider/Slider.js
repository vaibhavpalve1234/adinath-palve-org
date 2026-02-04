import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='display-flex'>
      <div className="multiple-video-player">
        <div className="card-image-list">
          <div className="slider">
            <div className="small-card-container">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`small-card ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <img src={image.imageUrl} alt={image.title} />
                </div>
              ))}
            </div>
            <div className="image-details">
              <img
                src={images[activeIndex].imageUrl}
                alt={images[activeIndex].title}
              />
              <h3>{images[activeIndex].title}</h3>
              <p>{images[activeIndex].description}</p>
              <a href='#'>अधिक वाचा</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Slider;
