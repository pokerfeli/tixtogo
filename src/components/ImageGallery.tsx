import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  mainImage: string;
  attractionName: string;
}

export function ImageGallery({ mainImage, attractionName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create an array of images including the main image and some fallback images
  const images = [
    {
      url: mainImage,
      alt: `${attractionName} - Main View`,
    },
    {
      url: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244',
      alt: `${attractionName} - Additional View 1`,
    },
    {
      url: 'https://images.unsplash.com/photo-1583842761844-be1a1f78fc5d',
      alt: `${attractionName} - Additional View 2`,
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-[500px] group">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}