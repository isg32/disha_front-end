import React, { useState, useEffect } from 'react';
import '../styles/slideshow.css';
import image26 from '../assets/images/slideshow/image 34.png';
import image27 from '../assets/images/slideshow/image 35.png';
import image28 from '../assets/images/slideshow/image 36.png';

function Slideshow() {
  return (
    <div className="slideshow">
      <SlideshowA />
    </div>
  );
}

const slides = [
  {
    id: 1,
    image: image26,
  },
  {
    id: 2,
    image: image27,
  },
  {
    id: 3,
    image: image28,
  }
];

function SlideshowA() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="slideshow2 hvr-grow-minimal">    
      <div className="slide-container">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="slide"
          style={{ width: '100%', opacity: '1', objectFit: 'cover', borderRadius: '20px' }}
        />
      </div>
    </div>
  );
}

export default Slideshow;
