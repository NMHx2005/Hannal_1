import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './NewsList.scss';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  slug: string;
}

const NewsList: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Băng tải lưới chịu nhiệt cung cấp khả năng chịu nhiệt ra sao?',
      date: '04/08/2023',
      image: '/images/news/bang-tai-luoi-chiu-duoc-nhiet-do-cao.jpeg',
      description: 'Bạn không cần phải làm việc trong nhà máy hoặc cơ sở sản xuất để biết băng tải lưới chịu nhiệt đóng vai trò quan trọng trong nhiều ngành công nghiệp. Từ thực phẩm đến dược phẩm, từ hóa chất đến điện tử...',
      slug: 'bang-tai-luoi-chiu-nhiet'
    },
    {
      id: 2,
      title: 'Ứng dụng và tính năng của băng tải sấy hồng ngoại Thiên Phú',
      date: '04/08/2023',
      image: '/images/news/bang-tai-say-hong-ngoai-2.jpeg',
      description: 'Một trong những dòng sản phẩm băng tải tiên tiến, hiện đại nhất vì được sản xuất từ với những công nghệ mới nhất hiện nay. Băng tải sấy hồng ngoại được ứng dụng rộng rãi trong nhiều ngành công nghiệp...',
      slug: 'bang-tai-say-hong-ngoai'
    },
    {
      id: 3,
      title: 'Tìm hiểu về băng tải xích nhựa và ứng dụng trong công nghiệp',
      date: '03/08/2023',
      image: '/images/news/bang-tai-luoi-chiu-duoc-nhiet-do-cao.jpeg',
      description: 'Băng tải xích nhựa là một trong những loại băng tải được sử dụng phổ biến trong các ngành công nghiệp. Với ưu điểm bền bỉ, chịu được tải trọng lớn và độ bền cao, băng tải xích nhựa là lựa chọn lý tưởng...',
      slug: 'bang-tai-xich-nhua'
    },
    {
      id: 4,
      title: 'Giải pháp băng tải cho ngành thực phẩm và đồ uống',
      date: '02/08/2023',
      image: '/images/news/bang-tai-luoi-chiu-duoc-nhiet-do-cao.jpeg',
      description: 'Trong ngành công nghiệp thực phẩm và đồ uống, việc lựa chọn băng tải phù hợp là yếu tố quan trọng quyết định hiệu quả sản xuất. Thiên Phú cung cấp các giải pháp băng tải chuyên dụng đáp ứng tiêu chuẩn...',
      slug: 'bang-tai-thuc-pham'
    },
    {
      id: 5,
      title: 'Hướng dẫn bảo trì và bảo dưỡng hệ thống băng tải công nghiệp',
      date: '01/08/2023',
      image: '/images/news/bang-tai-luoi-chiu-duoc-nhiet-do-cao.jpeg',
      description: 'Bảo trì và bảo dưỡng định kỳ là yếu tố quan trọng để đảm bảo hệ thống băng tải hoạt động hiệu quả và kéo dài tuổi thọ. Trong bài viết này, chúng tôi sẽ hướng dẫn chi tiết các bước bảo trì...',
      slug: 'bao-tri-bang-tai'
    },
    {
      id: 6,
      title: 'So sánh các loại băng tải PVC và PU trong công nghiệp',
      date: '31/07/2023',
      image: '/images/news/bang-tai-luoi-chiu-duoc-nhiet-do-cao.jpeg',
      description: 'Băng tải PVC và PU là hai loại băng tải phổ biến nhất trong công nghiệp. Mỗi loại đều có những ưu điểm và nhược điểm riêng. Hãy cùng Thiên Phú tìm hiểu chi tiết về đặc điểm và ứng dụng...',
      slug: 'so-sanh-bang-tai-pvc-pu'
    }
  ];

  return (
    <section className="news-list">
      <div className="container">
        <Row gutter={[24, 24]}>
          {newsItems.map((item) => (
            <Col xs={12} sm={12} md={6} key={item.id}>
              <div className="news-item">
                <Link to={`/news/${item.slug}`} className="news-item__image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-item__date">{item.date}</span>
                </Link>
                <div className="news-item__content">
                  <h3>
                    <Link to={`/news/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  <Link to={`/news/${item.slug}`} className="news-item__more">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="page-pagination">
          <ul className="list-page-pagination">
            <li className="active ">
              <a href="https://www.thienphuchetaomay.vn/tin-tuc/18/tin-tuc?page=1" >
                1
              </a>
            </li>
            <li >
              <a href="#">
                2
              </a>
            </li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default NewsList; 