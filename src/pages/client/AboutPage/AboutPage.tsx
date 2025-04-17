import React from 'react';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import AboutContent from '@/components/client/About/AboutContent';
import './AboutPage.scss';

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <Header />
      <div className="bannerchild">
          <img src="/images/about/bg-about.jpg" alt="bannerchild"/>
          <div className="background-overlay">
            <div className="container">
              <h1 className="title-featured_page">Giới thiệu</h1>
              <p className="desc-featured_page"></p>
            </div>
          </div>
      </div>
      <AboutContent />
      <Footer />
    </div>
  );
};

export default AboutPage; 