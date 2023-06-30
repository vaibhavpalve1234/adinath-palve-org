import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      id: 1,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP._I9HqjkCS0t-TQnbz-sSjQHaGV&pid=Api&P=0&h=180',
      title: 'Balashahe Thakare',
      description: 'President of Shivsena',
    },
    {
      id: 2,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Chief_Minister_of_Maharashtra%2C_Shri_Uddhav_Thackeray_calling_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_February_21%2C_2020_%28Uddhav_Thackeray%29_%28cropped%29.jpg',
      title: 'Udhav Thakare',
      description: 'Ex Chief Minister of Maharashtra',
    },
    {
      id: 3,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Minister_for_Tourism_and_Environment%2C_Maharashtra%2C_Shri_Aaditya_Thackeray_calling_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_February_21%2C_2020_%28Aditya_Thackeray%29_%28cropped%29.jpg',
      title: 'Aditya Thakre ',
      description: 'Ex  Minister of Maharashtra',
    },
    {
      id: 4,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Bappa_Lahiri%2C_Bappi_Lahiri%2C_Swapna_Patker%2C_Sanjay_Raut_%28cropped%29.jpg',
      title: 'Sanjay Raut ',
      description: 'Member of Parliament Maharashtra',
    },
  ];

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
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Slider;
