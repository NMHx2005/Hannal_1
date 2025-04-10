import React from 'react';
import './SideIcons.scss';

const SideIcons: React.FC = () => {
  return (
    <div className="side-icons">
      <a href="#" className="icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="icon phone">
        <i className="fas fa-phone"></i>
      </a>
      {/* <a href="#" className="icon zalo">
        <i className="fab fa-zalo"></i>
      </a> */}
      {/* <a href="#" className="icon contact">
        <i className="fas fa-envelope"></i>
      </a> */}
    </div>
  );
};

export default SideIcons; 