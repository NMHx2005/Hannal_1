import React from 'react';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import NewsList from '@/components/client/News/NewsList';
import './NewsPage.scss';

const NewsPage: React.FC = () => {
  return (
    <div className="news">
      <Header />
      <div className="bannerchild">
        <div className="container">
          <h1>Tin tức</h1>
          <p>Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản.</p>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li>Tin tức</li>
          </ul>
        </div>
      </div>
      <NewsList />
      <Footer />
    </div>
  );
};

export default NewsPage; 