import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductsPage.scss';

interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  image: string;
  items: ProductItem[];
}

interface ProductItem {
  id: string;
  title: string;
  image: string;
  slug: string;
}

const ProductsPage: React.FC = () => {
  const categories: ProductCategory[] = [
    {
      id: '1',
      title: 'BĂNG TẢI',
      slug: 'bang-tai',
      image: '/images/products/bang-tai-cover.jpg',
      items: [
        {
          id: '1',
          title: 'Khung Băng Tải',
          image: '/images/products/BANG TAI.jpg',
          slug: 'khung-bang-tai'
        },
        {
          id: '2',
          title: 'Băng Chuyền',
          image: '/images/products/BANG TAI.jpg',
          slug: 'bang-chuyen'
        },
        {
          id: '3',
          title: 'Băng Tải PVC - PU',
          image: '/images/products/BANG TAI.jpg',
          slug: 'bang-tai-pvc-pu'
        },
        {
          id: '4',
          title: 'Băng Tải Lắp Ráp - Kiểm Tra',
          image: '/images/products/BANG TAI.jpg',
          slug: 'bang-tai-lap-rap'
        },
        {
          id: '5',
          title: 'Băng Tải Lắp Ráp - Kiểm Tra',
          image: '/images/products/BANG TAI.jpg',
          slug: 'bang-tai-lap-rap'
        }
      ]
    },
    {
      id: '2',
      title: 'BÀN THAO TÁC',
      slug: 'ban-thao-tac',
      image: '/images/products/BANG TAI.jpg',
      items: [
        {
          id: '1',
          title: 'Bàn Thao Tác, Bàn Lắp Ráp',
          image: '/images/products/ban-thao-tac.jpg',
          slug: 'ban-thao-tac-lap-rap'
        },
        {
          id: '2',
          title: 'Bàn Thao Tác Nhôm Định Hình',
          image: '/images/products/ban-thao-tac.jpg',
          slug: 'ban-thao-tac-nhom'
        },
        {
          id: '3',
          title: 'Bàn Thao Tác Ống Inox, Thép',
          image: '/images/products/ban-thao-tac.jpg',
          slug: 'ban-thao-tac-inox'
        },
        {
          id: '4',
          title: 'Băng Tải Phòng Sạch',
          image: '/images/products/ban-thao-tac.jpg',
          slug: 'bang-tai-phong-sach'
        },
        {
          id: '5',
          title: 'Băng Tải Phòng Sạch',
          image: '/images/products/ban-thao-tac.jpg',
          slug: 'bang-tai-phong-sach'
        }
      ]
    },
    {
      id: '3',
      title: 'PHỤ KIỆN BĂNG TẢI',
      slug: 'phu-kien-bang-tai',
      image: '/images/products/phu-kien-cover.jpg',
      items: [
        {
          id: '1',
          title: 'Phụ Kiện Băng Tải Thiên Phú',
          image: '/images/products/phu-kien-bang-tai.jpg',
          slug: 'phu-kien-bang-tai-1'
        },
        {
          id: '2',
          title: 'Phụ Kiện Băng Tải Thiên Phú',
          image: '/images/products/phu-kien-bang-tai.jpg',
          slug: 'phu-kien-bang-tai-2'
        },
        {
          id: '3',
          title: 'Phụ Kiện Băng Tải Thiên Phú',
          image: '/images/products/phu-kien-bang-tai.jpg',
          slug: 'phu-kien-bang-tai-3'
        },
        {
          id: '4',
          title: 'Phụ Kiện Băng Tải Thiên Phú',
          image: '/images/products/phu-kien-bang-tai.jpg',
          slug: 'phu-kien-bang-tai-4'
        },
        {
          id: '5',
          title: 'Phụ Kiện Băng Tải Thiên Phú',
          image: '/images/products/phu-kien-bang-tai.jpg',
          slug: 'phu-kien-bang-tai-4'
        }
      ]
    }
  ];

  return (
    <div className="products">
      <Header />
      <div className="bannerchild">
        <div className="container">
          <h1>Sản phẩm</h1>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li>Sản phẩm</li>
          </ul>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          {categories.map((category) => (
            <div key={category.id} className="product-category">
              <div className="category-header">
                <h2>{category.title}</h2>
                <Link to={`/products/${category.slug}`} className="view-all">
                  Xem tất cả
                </Link>
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={2}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 16
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24
                  },
                }}
                className="products-slider"
              >
                {category.items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link to={`/products/${category.slug}/${item.slug}`} className="product-item">
                      <div className="product-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <h3>{item.title}</h3>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage; 