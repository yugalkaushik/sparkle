import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TextSlideshow = () => {
  const [slidesText, setSlidesText] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [enteringSlide, setEnteringSlide] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5100/api/textslides');
        console.log('Response data:', response.data);
        setSlidesText(response.data);
        setEnteringSlide(response.data.length > 1 ? 1 : 0);
      } catch (error) {
        console.error('Error fetching slides text:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (slidesText.length > 1) {
      const interval = setInterval(() => {
        setTransitioning(true);
        setTimeout(() => {
          setCurrentSlide(enteringSlide);
          setEnteringSlide((prev) => (prev + 1) % slidesText.length);
          setTransitioning(false);
        }, 1000); // Transition duration
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [slidesText.length, enteringSlide]);

  return (
    <div className="relative w-full h-14 overflow-hidden bg-gray-100 flex items-center justify-center">
      {slidesText.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-1000 ease-in-out ${
            currentSlide === index && !transitioning
              ? 'transform translate-x-0'
              : currentSlide === index && transitioning
              ? 'hidden'
              : enteringSlide === index && transitioning
              ? 'transform translate-x-0'
              : 'transform translate-x-full'
          }`}
        >
          <div className="text-center">
            <p className="text-lg font-semibold">{slide.heading}</p>
            <p className="text-sm underline">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextSlideshow;
