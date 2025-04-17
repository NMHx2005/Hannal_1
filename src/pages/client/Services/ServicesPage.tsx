import React from 'react';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import ServicesList from '@/components/client/Services/ServicesList';
import './ServicesPage.scss';

const ServicesPage: React.FC = () => {
  return (
    <div className="services">
      <Header />
      <div className="bannerchild">
        <div className="container">
          <h1>Dịch vụ</h1>
          <p>Thiên Phú cung cấp các dịch vụ chuyên nghiệp về băng tải và thiết bị công nghiệp, từ tư vấn, thiết kế đến lắp đặt và bảo trì.</p>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li>Dịch vụ</li>
          </ul>
        </div>
      </div>
      <ServicesList />
      <Footer />
    </div>
  );
};

export default ServicesPage; 