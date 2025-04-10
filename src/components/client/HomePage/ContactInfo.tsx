
import React from 'react';
import './ContactInfo.scss';

export const ContactInfo: React.FC = () => {
  return (
    <div className="contact">
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <h3>VP: CÔNG TY TNHH TM & CTM THIÊN PHÚ</h3>
          <p>Số 33 - Tổ 4 - Yên Sở – Hoàng Mai – Hà Nội</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <h3>Xưởng sản xuất</h3>
          <p>Số 15 - 17, Ngõ 197 Thúy Lĩnh, P. Trần Phú, Q. Hoàng Mai, Thành Phố Hà Nội</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <h3>Nhà máy sản xuất</h3>
          <p>Thị Trấn Cao Thượng, Huyện Tân Yên, Tỉnh Bắc Giang</p>
        </div>
      </div>
    </div>
  );
};
