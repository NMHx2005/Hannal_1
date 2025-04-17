import React from 'react';
import { Form, Input, Button } from 'antd';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import './ContactPage.scss';

const { TextArea } = Input;

interface IValueContact {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const onFinish = (values: IValueContact) => {
    console.log('Form values:', values);
  };

  return (
    <div className="contact">
      <Header />
      <div className="bannerchild">
        <div className="container">
          <h1>Liên hệ</h1>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="company-info">
            <h2>CÔNG TY TNHH THƯƠNG MẠI VÀ CHẾ TẠO MÁY THIÊN PHÚ</h2>
            
            <div className="info-item">
              <strong>Địa Chỉ:</strong>
              <p>Số 53 - TG 4 - Yên Sở – Hoàng Mai – Hà Nội</p>
            </div>

            <div className="info-item">
              <strong>Xưởng sản xuất:</strong>
              <p>Số 15 - 17, Ngõ 197 Thúy Lĩnh, P. Trần Phú, Q. Hoàng Mai, Thành Phố Hà Nội</p>
            </div>

            <div className="info-item">
              <strong>Nhà Máy Sản Xuất:</strong>
              <p>Thị Trấn Cao Thượng Huyện Tân Yên, Tỉnh Bắc Giang</p>
            </div>

            <div className="info-item">
              <strong>Tax code:</strong>
              <p>0106816711</p>
            </div>

            <div className="info-item">
              <strong>Hotline:</strong>
              <p>0966695386 - 0932952389</p>
            </div>

            <div className="info-item">
              <strong>Email:</strong>
              <p>thienphuchetaomay@gmail.com</p>
            </div>
          </div>

          <div className="contact-form">
            <Form
              name="contact"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
              >
                <Input placeholder="Họ tên" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { type: 'email', message: 'Email không hợp lệ!' },
                  { required: true, message: 'Vui lòng nhập email!' }
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Vui lòng nhập lời nhắn!' }]}
              >
                <TextArea rows={4} placeholder="Lời nhắn" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="submit-btn">
                  Đăng ký thông tin
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1957800991837!2d105.86650067498093!3d20.981531080655635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac0a383826c5%3A0x7b373f4ae3b0a1f6!2zQ8O0bmcgdHkgVE5ISCBUTSAmIENo4bq_IHThuqFvIG3DoXkgVGhpw6puIFBow7o!5e0!3m2!1svi!2s!4v1681141427071!5m2!1svi!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage; 