import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, link }) => {
  return (
    <Link to={link} className="product-card-link">
      <Card 
        hoverable 
        className="product-card"
        cover={<img alt={title} src={image} />}
      >
        <Card.Meta 
          title={title} 
          // description={description} 
        />
      </Card>
    </Link>
  );
};

export default ProductCard; 