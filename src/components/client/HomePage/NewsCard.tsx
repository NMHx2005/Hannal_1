import React from 'react';
import './NewsCard.scss';

interface Item {
  imgSrc: string;
  altText: string;
  description: string;
  borderColor: string;
}


const NewsCard = ({data}: {data: Item[]}) => {
  return (
    <>
     <div className="container">
      {data.map((item, index) => (
        <div className="item" key={index}>
          <img
            src={item.imgSrc}
            alt={item.altText}
            style={{ border: `2px solid ${item.borderColor}` }}
          />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default NewsCard; 