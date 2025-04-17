import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './RecruitmentList.scss';

interface RecruitmentItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  slug: string;
}

const RecruitmentList: React.FC = () => {
  const recruitmentItems: RecruitmentItem[] = [
    {
      id: 1,
      title: 'TUYỂN NHÂN VIÊN KỸ THUẬT',
      date: '28/04/2022',
      image: '/images/recruitment/ky-thuat-vien.gif',
      description: 'Kỹ thuật viên băng tải, cơ khí có tay nghề',
      slug: 'tuyen-nhan-vien-ky-thuat'
    },
    {
      id: 2,
      title: 'TUYỂN DỤNG KỸ SƯ CƠ KHÍ',
      date: '25/04/2022',
      image: '/images/recruitment/ky-thuat-vien.gif',
      description: 'Kỹ sư cơ khí có kinh nghiệm thiết kế và lắp đặt hệ thống băng tải công nghiệp',
      slug: 'tuyen-dung-ky-su-co-khi'
    },
    {
      id: 3,
      title: 'TUYỂN NHÂN VIÊN KINH DOANH',
      date: '20/04/2022',
      image: '/images/recruitment/ky-thuat-vien.gif',
      description: 'Nhân viên kinh doanh thiết bị công nghiệp, có kinh nghiệm trong lĩnh vực băng tải',
      slug: 'tuyen-nhan-vien-kinh-doanh'
    },
    {
      id: 4,
      title: 'TUYỂN THỢ HÀN',
      date: '15/04/2022',
      image: '/images/recruitment/ky-thuat-vien.gif',
      description: 'Thợ hàn có kinh nghiệm, đam mê công việc và có tinh thần trách nhiệm cao',
      slug: 'tuyen-tho-han'
    }
  ];

  return (
    <section className="recruitment-list">
      <div className="container">
        <Row gutter={[24, 24]}>
          {recruitmentItems.map((item) => (
            <Col xs={12} sm={12} md={6} key={item.id}>
              <div className="recruitment-item">
                <Link to={`/recruitment/${item.slug}`} className="recruitment-item__image">
                  <img src={item.image} alt={item.title} />
                  <span className="recruitment-item__date">{item.date}</span>
                </Link>
                <div className="recruitment-item__content">
                  <h3>
                    <Link to={`/recruitment/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  <Link to={`/recruitment/${item.slug}`} className="recruitment-item__more">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="page-pagination">
          <ul className="list-page-pagination">
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentList; 