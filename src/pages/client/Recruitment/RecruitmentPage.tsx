import React from 'react';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import RecruitmentList from '@/components/client/Recruitment/RecruitmentList';
import './RecruitmentPage.scss';

const RecruitmentPage: React.FC = () => {
  return (
    <div className="recruitment">
      <Header />
      <div className="bannerchild">
        <div className="container">
          <h1>Tuyển dụng</h1>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li>Tuyển dụng</li>
          </ul>
        </div>
      </div>
      <RecruitmentList />
      <Footer />
    </div>
  );
};

export default RecruitmentPage; 