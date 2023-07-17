import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      id: 1,
      imageUrl: 'https://imagevars.gulfnews.com/2012/11/17/1_16a082d438c.1106213_367687829_16a082d438c_large.jpg',
      title: 'बाळासाहेब ठाकरे',
      description: 'मराठी माणसाचा अभिमान, हिंदूंची आशा, हिंदू हृदयाचा सम्राट, शिवसैनिकांचा सेनापती, शिवसेनेच्या महान मंत्राचा जनक.',
    },
    {
      id: 2,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Chief_Minister_of_Maharashtra%2C_Shri_Uddhav_Thackeray_calling_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_February_21%2C_2020_%28Uddhav_Thackeray%29_%28cropped%29.jpg',
      title: 'उद्धवजी ठाकरे',
      description: 'महाराष्ट्राचे माजी मुख्यमंत्री',
    },
    {
      id: 3,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/The_Minister_for_Tourism_and_Environment%2C_Maharashtra%2C_Shri_Aaditya_Thackeray_calling_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_February_21%2C_2020_%28Aditya_Thackeray%29_%28cropped%29.jpg',
      title: 'आदित्यजी ठाकरे ',
      description: 'महाराष्ट्राचे माजी मंत्री',
    },
    {
      id: 4,
      imageUrl: 'https://th.bing.com/th/id/R.474ee0e3f2d4f51831cad98e9d778bf2?rik=TrMPtdwB9pHAHw&riu=http%3a%2f%2fgovernancenow.com%2ftemp%2fsanjay_raut1.jpg&ehk=uGUpCJ1YnTvATVMRtzd72NOCpnSV57NSL2639khaT9U%3d&risl=&pid=ImgRaw&r=0',
      title: 'संजय राऊत',
      description: 'शिवसेनेचे मुखपत्र सामनाचे कार्यकारी संपादक , खासदार ',
    },
    // {
    //   id: 5,
    //   imageUrl: 'https://ourneta.com/wp-content/uploads/2020/02/Sunil-Prabhu-%E0%A4%B8%E0%A5%81%E0%A4%A8%E0%A4%BF%E0%A4%B2-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81.jpg',
    //   title: 'सुनील प्रभू',
    //   description: 'आमदार शिवसेने',
    // },
    // {
    //   id: 6,
    //   imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Rt5sswpmhisinFt1o65AjgHaHH&pid=Api&P=0&h=180',
    //   title: 'भास्कर जाधव',
    //   description: 'आमदार शिवसेने',
    // },
    // {
    //   id: 7,
    //   imageUrl: 'https://english.cdn.zeenews.com/sites/default/files/2022/06/22/1056475-sena-mla-nitin.jpg',
    //   title: 'नितीन देशमुख',
    //   description: 'आमदार शिवसेने',
    // },
    // {
    //   id: 8,
    //   imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.IAgl94ED0bFeiYRz5X_EVAHaLG&pid=Api&P=0&h=180',
    //   title: 'वैभव नाईक ',
    //   description: 'आमदार शिवसेने',
    // },
    // {
    //   id: 9,
    //   imageUrl: 'https://d3pc1xvrcw35tl.cloudfront.net/images/1200x900/rajan-salvi-1_2023041002128.jpg',
    //   title: 'राजन साळवी ',
    //   description: 'आमदार शिवसेने',
    // },
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
              <a href='#'>अधिक वाचा</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Slider;
