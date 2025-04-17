import React from 'react';
import Header from '@/components/client/Header/Header';
import Slider from '@/components/client/HomePage/Slider';
import ProductCard from '@/components/client/HomePage/ProductCard';
import NewsCard from '@/components/client/HomePage/NewsCard';
import { Gallery } from '@/components/client/HomePage/Gallery';
import Footer from '@/components/client/Footer/Footer';
import { Row, Col } from 'antd';
import './HomePage.scss';
import { ContactInfo } from '@/components/client/HomePage/ContactInfo';
import SideIcons from '@/components/client/SideIcons';

interface Item {
  imgSrc: string;
  altText: string;
  description: string;
  borderColor: string;
}

const HomePage: React.FC = () => {
  const products = [
    {
      title: 'Băng tải PVC',
      image: '/images/products/BANG TAI.jpg',
      description: 'Băng tải PVC chất lượng cao',
      link: '/products/conveyor-pvc'
    },
    {
      title: 'Băng tải PU',
      image: '/images/products/BAN NHAM DINH HINH.jpg',
      description: 'Băng tải PU chống dầu',
      link: '/products/conveyor-pu'
    },
    {
      title: 'Băng tải xích',
      image: '/images/products/BANG TAI.jpg',
      description: 'Băng tải xích công nghiệp',
      link: '/products/conveyor-chain'
    },
    {
      title: 'Băng tải xích',
      image: '/images/products/BANG TAI.jpg',
      description: 'Băng tải xích công nghiệp',
      link: '/products/conveyor-chain'
    }
  ];


  const data: Item[] = [
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/k7hN77LOi7fPe0DjTh-2a4ZnaTj83Evji0gCeRR4XKg.jpg',
      altText: 'Consulting and designing conveyor belts',
      description: 'TƯ VẤN THIẾT KẾ BĂNG TẢI',
      borderColor: '#00b300',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/7_dLDvl_zqHn8C4_NuhPUl3J4Bzu1--GT9HnPNxOTbE.jpg',
      altText: 'Comparison of high-quality PVC conveyor belts',
      description: 'SO SÁNH BĂNG TẢI PVC CHẤT LƯỢNG TỐT VÀ',
      borderColor: '#ff6600',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/w8j1X9LwR3sjRvOXNJaflNGTCk_jMhiW6l1YzZ-5oHA.jpg',
      altText: 'Understanding special types of conveyor belts',
      description: 'TÌM HIỂU CÁC LOẠI BĂNG TẢI ĐẶC CHỦNG',
      borderColor: '#ddd',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/M7A2w6jKpcDsPT-OWNj7PeqX4u0l0wpSHGLhShUuOc8.jpg',
      altText: 'Conveyor belts for assembling electronic components',
      description: 'BĂNG TẢI LẮP RÁP LINH KIỆN ĐIỆN TỬ',
      borderColor: '#ddd',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/41Myq-26XWYEJhb7ZTA338A0m1k0SH_bsUjFLuyMdcU.jpg',
      altText: 'How to buy and use rubber conveyor belts',
      description: 'CÁCH MUA VÀ SỬ DỤNG BĂNG TẢI CAO SU',
      borderColor: '#ddd',
    },
  ];


  const dataVideos = [
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/Buds4RAqJjzJXA338uzno3u4LIQ5sL-AcIA9RGzt5QE.jpg',
      title: 'BĂNG TẢI, BĂNG TẢI XÍCH NHỰA, BẮN BĂNG TẢI, LH',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/FvVbcEbjC4mIhhmpdGXdlr0KVWtT2qidYDAk8hL4Vlk.jpg',
      title: 'BĂNG TẢI, BĂNG CHUYỀN TẢI, CHUYỂN SẢN XUẤT',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/4ewBmQ004cXCRoo1hpbEL0Ate_OinvIm6j_uteUUdpI.jpg',
      title: 'KHUNG BĂNG TẢI BAO BÌ, KHUNG BĂNG TẢI GÂN',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/pZg_UdM1T56Fw6jp9ZHbm9FlyoeCwuA4Q1rryuaRGeQ.jpg',
      title: 'BĂNG TẢI CAO SU, BĂNG CHUYỀN CAO SU, BĂNG TẢI',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/OnrpjfplWARIx536pPYTEqa6tHUiGajOMsxq30CM0ds.jpg',
      title: 'BĂNG TẢI THIÊN PHÚ, VIDEO BĂNG TẢI',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/nLbj2tcFr3C6KmGw9DW1ajJaPTAQCX5ppdul-8Jusak.jpg',
      title: 'BĂNG TẢI PVC, BĂNG TẢI, NỐI PVC',
    },
  ];

  return (
    <div className="home">
      <Header />
      <Slider />
      
      <section className="home__products">
        <div className="container">
          <div className="home__title">
            <span>Sản phẩm</span>
          </div>
          <div className="home__content">
            <Row gutter={[24, 24]}>
              {products.map((product, index) => (
                <Col xs={12} sm={12} md={6} key={index}>
                  <ProductCard {...product} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      <section className="home__body">
        <div className="container">
          <div className='home__content--main'>
            <div className="home__content">
              <div className="home__title--main">
                <span><i className="fa fa-video"></i>Video Clip</span>
              </div>
              <div className="items-videos">
                <div className="img-videos">
                  <a href="https://www.youtube.com/watch?v=8trUTEYe1CQ" className="swipebox popup-youtube">
                    <img src="./images/news/bang tai nap rap ve sinh hang.jpg" alt="Băng  Tải Lắp Ráp Linh Kiện"/>
                  </a>
                </div>
                <p className="name-videos">Băng  Tải Lắp Ráp Linh Kiện</p>
              </div>
              <Gallery items={dataVideos} />
            </div>

            
            <div className="home__content">
              <div className="home__title--main">
                <span><i className="fa fa-newspaper"></i> Tin Tức</span>
              </div>
              <Row gutter={[24, 24]}>
                    <NewsCard data={data} />
              </Row>
            </div>


            <div className="home__content">
              <div className="home__title--main">
                <span><i className="fa fa-map-marker-alt"></i> Hệ Thống</span>
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <section className="home__products">
        <div className="container">
          <div className="home__title">
            <span>Dự Án Tiêu Biểu</span>
          </div>
          <div className="home__content">
            <Row gutter={[24, 24]}>
              {products.map((product, index) => (
                <Col xs={12} sm={12} md={6} key={index}>
                  <ProductCard {...product} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      <Footer />
      <SideIcons />
    </div>
  );
};

export default HomePage; 