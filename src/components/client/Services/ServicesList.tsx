import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './ServicesList.scss';

interface ServiceItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  slug: string;
}

const ServicesList: React.FC = () => {
  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      title: 'NỐI DÂN GẮN BĂNG TẢI',
      date: '15/02/2022',
      image: '/images/services/bg-1.jpg',
      description: 'Thiên Phú Chuyên Nối dán băng tải pvc, dán gân K, gân T theo yêu cầu, băng tải chạy bộ, băng tải thực phẩm...',
      slug: 'noi-dan-gan-bang-tai'
    },
    {
      id: 2,
      title: 'NỐI DÂN BĂNG TẢI PVC',
      date: '18/08/2021',
      image: '/images/services/bg-1.jpg',
      description: 'Nối dán, sửa chữa băng tải, băng tải pvc, băng tải chạy bộ, băng tải thực phẩm...',
      slug: 'noi-dan-bang-tai-pvc'
    },
    {
      id: 3,
      title: 'Lắp đặt và bảo trì băng tải công nghiệp',
      date: '15/08/2021',
      image: '/images/services/bg-1.jpg',
      description: 'Dịch vụ lắp đặt và bảo trì băng tải công nghiệp chuyên nghiệp, đảm bảo hệ thống vận hành ổn định và hiệu quả...',
      slug: 'lap-dat-bao-tri-bang-tai'
    },
    {
      id: 4,
      title: 'Tư vấn thiết kế hệ thống băng tải',
      date: '10/08/2021',
      image: '/images/services/bg-1.jpg',
      description: 'Đội ngũ kỹ sư giàu kinh nghiệm tư vấn và thiết kế hệ thống băng tải phù hợp với nhu cầu sản xuất của doanh nghiệp...',
      slug: 'tu-van-thiet-ke-bang-tai'
    }
  ];

  return (
    <section className="services-list">
      <div className="container">
        <Row gutter={[24, 24]}>
          {serviceItems.map((item) => (
            <Col xs={12} sm={12} md={6} key={item.id}>
              <div className="service-item">
                <Link to={`/services/${item.slug}`} className="service-item__image">
                  <img src={item.image} alt={item.title} />
                  <span className="service-item__date">{item.date}</span>
                </Link>
                <div className="service-item__content">
                  <h3>
                    <Link to={`/services/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  <Link to={`/services/${item.slug}`} className="service-item__more">
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

export default ServicesList; 