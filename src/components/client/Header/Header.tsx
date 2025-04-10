import React, { useState, useEffect } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.scss';

interface MenuItem {
  key: string;
  label: string;
  link?: string;
  children?: MenuItem[];
}

const Header: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { key: 'home', label: 'Trang chủ', link: '/' },
    { key: 'about', label: 'Giới thiệu', link: '/about' },
    { 
      key: 'products', 
      label: 'Sản phẩm',
      children: [
        { key: 'conveyor', label: 'Băng tải', link: '/products/conveyor' },
        { key: 'workbench', label: 'Bàn thao tác', link: '/products/workbench' },
      ]
    },
    { key: 'news', label: 'Tin tức', link: '/news' },
    { key: 'services', label: 'Dịch vụ', link: '/services' },
    { key: 'recruitment', label: 'Tuyển dụng', link: '/recruitment' },
    { key: 'videos', label: 'Video', link: '/videos' },
    { key: 'contact', label: 'Liên hệ', link: '/contact' },
  ];

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map(item => {
      if (item.children) {
        return {
          key: item.key,
          label: item.label,
          children: item.children.map((child: MenuItem) => ({
            key: child.key,
            label: <Link to={child.link || '/'}>{child.label}</Link>
          }))
        };
      }
      return {
        key: item.key,
        label: <Link to={item.link || '/'}>{item.label}</Link>
      };
    });
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/">
              <img src="./images/Logo Thien Phu.png" alt="Thiên Phú Chế Tạo Máy" />
            </Link>
          </div>
          
          <div className="header__menu">
            <Menu mode="horizontal" items={renderMenuItems(menuItems)} />
          </div>
          
          <div className="header__mobile-button">
            <Button 
              type="text" 
              icon={<MenuOutlined />} 
              onClick={() => setMobileMenuVisible(true)}
            />
          </div>
          
          <div className="header__contact">
            <a href="tel:0966695386">0966 695 386</a>
          </div>
        </div>
      </div>
      
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
      >
        <Menu mode="vertical" items={renderMenuItems(menuItems)} />
      </Drawer>
    </header>
  );
};

export default Header; 