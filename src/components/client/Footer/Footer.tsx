import React from 'react';
import { Row, Col } from 'antd';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[24, 24]} align="middle">
          {/* Cột 1: Logo và Social Icons */}
          <Col xs={24} md={12} className="footer__logo--social">
            <div className="footer__logo">
              <img src="/images/Logo Thien Phu.png" alt="Thiên Phú Chế Tạo Máy" />
            </div>
            <div className="footer__social">
              <h3 className="tit-followus-social">
                <span>Kết nối với chúng tôi</span>
              </h3>
              <ul className="social-footer">
                <li>
                  <a target="_blank" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fab fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Cột 2: Thông tin công ty */}
          <Col xs={24} md={12} className="footer__info">
            <h3>CÔNG TY TNHH THƯƠNG MẠI VÀ CHẾ TẠO MÁY HANNAL</h3>
            <p>
              <strong>Địa Chỉ:</strong> Số 33 - Tổ 4 - Yên Sở – Hoàng Mai – Hà Nội
            </p>
            <p>
              <strong>Xưởng sản xuất:</strong> Số 15 - 17, Ngõ 197 Thúy Lĩnh, P. Trần Phú, Q. Hoàng Mai, Thành Phố Hà Nội
            </p>
            <p>
              <strong>Nhà Máy Sản Xuất:</strong> Thị Trấn Cao Thượng, Huyện Tân Yên, Tỉnh Bắc Giang
            </p>
            <p>
              <strong>Tax code:</strong> 0106816711
            </p>
            <p>
              <strong>Hotline:</strong> 0966695386 - 0936295389
            </p>
            <p>
              <strong>Email:</strong> thienphuchetaomay@gmail.com
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;