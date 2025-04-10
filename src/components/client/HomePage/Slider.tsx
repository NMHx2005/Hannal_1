import React from 'react';
import { Carousel } from 'antd';
import './Slider.scss';

const Slider: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: './slider/silde1.jpg',
      title: 'Băng Tải Lắp Ráp',
      description: 'Hệ thống băng tải chuyên nghiệp cho lắp ráp'
    },
    {
      id: 2,
      image: './slider/slide2.jpg',
      title: 'Hệ thống băng tải',
      description: 'Giải pháp băng tải toàn diện cho doanh nghiệp'
    },
    {
      id: 3,
      image: './slider/slide3.png',
      title: 'Băng Tải Máy Đúc Thiên Phú',
      description: 'Sản phẩm chất lượng cao từ Thiên Phú'
    },
    {
      id: 4,
      image: './slider/slide4.jpg',
      title: 'Băng Tải PVC - PU',
      description: 'Băng tải chất lượng cao cho mọi ứng dụng'
    }
  ];

  return (
    <div className="slider">
      <Carousel 
        autoplay 
        autoplaySpeed={2000}
        dots={true}
        infinite={true}
        draggable={true}
        swipeToSlide={true}
        touchMove={true}
        effect="fade"
        easing="linear"
      >
        {slides.map(slide => (
          <div key={slide.id} className="slide">
            <div 
              className="slide-image" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider; 