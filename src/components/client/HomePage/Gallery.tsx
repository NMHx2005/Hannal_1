import React from 'react';
import './Gallery.scss';
import { GalleryItem } from './GalleryItem';

interface GalleryProps {
  items: { imgSrc: string; title: string }[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <GalleryItem key={index} imgSrc={item.imgSrc} title={item.title} />
      ))}
    </div>
  );
};