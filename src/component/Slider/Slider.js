import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
        id: 1,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Chief_Minister_of_Maharashtra%2C_Shri_Uddhav_Thackeray_calling_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_February_21%2C_2020_%28Uddhav_Thackeray%29_%28cropped%29.jpg',
        title: 'Udhav Thakare',
        description: 'Ex Chief Minister of Maharashtra',
      },
    {
        id: 1,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Minister_for_Tourism_and_Environment%2C_Maharashtra%2C_Shri_Aaditya_Thackeray_calling_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_February_21%2C_2020_%28Aditya_Thackeray%29_%28cropped%29.jpg',
        title: 'Aditya Thakre ',
        description: 'Ex Chief Minister of Maharashtra',
      },
    {
        id: 2,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Bappa_Lahiri%2C_Bappi_Lahiri%2C_Swapna_Patker%2C_Sanjay_Raut_%28cropped%29.jpg',
        title: 'Sanjay Raut ',
        description: 'Mp Maharashtra',
      },
    {
      id: 3,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.IuNfizAswKx0Itm2z_jIMgHaDt&pid=Api&P=0&h=180',
      title: 'Leader',
      description: 'position 1',
    },
    // {
    //     id: 4,
    //     imageUrl: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/12/27/w600X390/SHIV_SENA_TWITTER.JPG',
    //     title: 'Leader',
    //     description: 'positio 1',
    //   },
    // {
    //     id: 5,
    //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Vinayak_Raut.jpg',
    //     title: 'Vinayak Raut',
    //     description: 'positio 1',
    //   },
    // {
    //     id: 6,
    //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ajay_Choudhari.webp/400px-Ajay_Choudhari.webp.png',
    //     title: 'Ajay Choudhari',
    //     description: 'positio 1',
    //   },
    // Add more images as needed
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
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
  );
};

export default Slider;
