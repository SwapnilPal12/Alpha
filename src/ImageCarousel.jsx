import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import React360Viewer from 'react-360-view';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [is360ViewActive, setIs360ViewActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleBeforeSlide = (currentIndex) => {
    if (currentIndex !== 0) {
      setIs360ViewActive(false);
    }
  };

  const handleScreenChange = (isFull) => {
    setIsFullscreen(isFull); 
  };

  const images = [
    {
      renderItem: () => (
        <div
          className={`image-360-container ${
            isFullscreen ? 'fullscreen-mode' : ''
          }`}
        >
          {is360ViewActive ? (
            <React360Viewer
              amount={44}
              imagePath="/car_images"
              fileName="car-{index}.png"
            />
          ) : (
            <button
              className="show-360-button"
              onClick={() => setIs360ViewActive(true)}
            >
              View 360°
            </button>
          )}
        </div>
      ),
      thumbnail: '/car_images/car-1.png',
    },
    {
      original: '/car_images/car-37.png',
      thumbnail: '/car_images/car-37.png',
    },
    {
      original: '/car_images/car-30.png',
      thumbnail: '/car_images/car-30.png',
    },
    {
      original: '/car_images/car-22.png',
      thumbnail: '/car_images/car-22.png',
    },
  ];

  return (
    <div className="carousel-container">
      <ImageGallery
        items={images}
        onBeforeSlide={handleBeforeSlide}
        onScreenChange={handleScreenChange} 
      />
    </div>
  );
};

export default ImageCarousel;
