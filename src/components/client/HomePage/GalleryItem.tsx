import React from 'react';

interface GalleryItemProps {
    imgSrc: string;
    title: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ imgSrc, title }) => {
    return (
        <div className="gallery-item">
            <img src={imgSrc} alt={title} />
            <i className="fas fa-play play-button"></i>
            <p>{title}</p>
        </div>
    );
};