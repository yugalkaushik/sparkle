import React, { useEffect, useState } from 'react';
import { slidesText } from '../assets/constants';

const TextSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('slideIn');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('slideOut');
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesText.length);
        setDirection('slideIn');
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-12 overflow-hidden bg-gray-100 flex items-center justify-center">
      {slidesText.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transform transition-transform duration-1000 ${currentSlide === index ? direction : 'translate-x-full'}`}
          style={{
            animationName: currentSlide === index ? 'slideIn, slideOut' : '',
          }}
        >
          <p className="text-lg font-semibold">{slide.Heading}</p>
        </div>
      ))}
    </div>
  );
};

export default TextSlideshow;
