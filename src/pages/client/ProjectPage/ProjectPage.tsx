import React from 'react';
import { Typography } from 'antd';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import './ProjectPage.scss';

const { Title } = Typography;

const ProjectPage: React.FC = () => {
  return (
    <div className="project">
      <Header />
      <div className="container">
        <div className="project__content">
          <Title level={2} className="project__title">Dự án của chúng tôi</Title>
          <div className="project__body">
            {/* Content will be added later */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage; 