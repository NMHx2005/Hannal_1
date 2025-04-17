import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContent.scss';

const AboutContent: React.FC = () => {
  return (
    <div className="about-content">
      <div className="container">
        <div className="about-content__wrapper">
          <div className="about-content__intro">
            <p>
              <strong>Công Ty TNHH Và Chế Tạo Máy Thiên Phú trân trọng gửi tới Quý khách hàng lời chúc An Khang - Thịnh Vượng!</strong>
            </p>
            <p>  Với phương châm: <strong>"Uy Tín - Chất Lượng - Khẳng Định Thương Hiệu"</strong>, chúng tôi nhận thấy rằng phải luôn nỗ lực và nỗ lực hơn nữa để đem lại cho Quý khách hàng những sản phẩm tốt nhất và đáp ứng nhu cầu ngày càng cao của Khách hàng.
           

              Với mong muốn ấy, chúng tôi không ngừng hoàn thiện mình bằng sự quyết tâm và lòng nhiệt tình của toàn thể lãnh đạo và nhân viên trong công ty với mục tiêu đáp ứng mọi yêu cầu của Khách hàng với chất lượng ngày càng cao.

              Chúng tôi tin rằng với đội ngũ công nhân viên lành nghề, sáng tạo, chuyên nghiệp và tận tâm trong công việc, Công ty sẽ tạo được lòng tin đối với khách hàng, Thiên Phú cam kết hợp tác cùng phát triển bền vững với Qúy khách trong quá trình công nghiệp hóa.
      
              Chúng tôi rất hy vọng sự ủng hộ nhiệt tình của Quý khách hàng đối với sự phát triển của Công ty.
            </p>
          </div>

          <div className="about-content__services">
            <h2>Công Ty TNHH Và Chế Tạo Máy Thiên Phú chuyên cung cấp các sản phẩm, dịch vụ sau:</h2>
            <ul>
              <li>Sản xuất, lắp đặt, tư vấn thiết kế: <Link to="/products/conveyor"><strong>Hệ Thống băng tải</strong></Link>, Băng Tải chuyển Linh Kiện, Băng Tải Lắp Ráp, Kiểm tra SP, Bàn Thao Tác Kiểm Tra, Dàn Con Lăn Inox, Thanh Chuyền, Nhôm Định Hình và Phụ Kiện Băng Tải…</li>
              <li>Tư Vấn Thiết Kế: Hệ Thống Tự Động Hóa, Băng Tải Tự Động Hóa, Dây Chuyền Đóng Gói, Hệ Thống Cân Định Lượng, Dây Chuyền Chiết Rót, Hệ Thống Phân Loại Sản Phẩm...</li>
              <li>Cung cấp băng tải PVC, <strong>Băng tải</strong> PU, Các gân Nối dán, Dây Đai Băng Tải, Nhôm Tấm, Nhôm Phi Tròn công nghiêp, phụ Kiện băng tải kèo theo…</li>
              <li>Quạt công nghiệp, Quạt ly tâm, Quạt hướng trục, Quạt thông gió, Hệ thống hút lọc bụi,…Hệ thống khung băng tải, Băng truyền tải, Khung băng tải, Rulo, Con lăn,…</li>
              <li>Dịch vụ sửa chữa, bảo dưỡng quạt công nghiệp, hệ thống hút lọc bụi,…</li>
              <li>Cung cấp Hệ thống làm mát nước, Tháp giải nhiệt,…</li>
              <li>Cung cấp các loại Băng tải: Băng tải cao su, <Link to="/products/pvc-conveyor"><strong>Băng tải PVC</strong></Link>, Băng tải gân, Dây đai tải.</li>
              <li>Dịch vụ bọc Rulo cao su, <strong>con lăn</strong> băng tải, nối dán băng tải,…</li>
            </ul>
            <p>
              Công ty chúng tôi rất mong nhận được sự hợp tác của khách hàng ! Hãy liên hệ ngay với chúng tôi để có được sự tư vấn và sự đáp ứng tốt nhất cho nhu cầu sản xuất của Quý khách.
            </p>
            <div className="about-content__footer">
              <p className="signature"><b>Trân trọng !</b></p>
              <p className="company-name">CT TNHH TM & CTM THIÊN PHÚ</p>
              <p className="slogan">"Uy tín, Chất lượng, Khẳng định thương hiệu"</p>
              
              <div className="social-share">
                <p>Chia sẻ:</p>
                <div className="social-buttons">
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent; 