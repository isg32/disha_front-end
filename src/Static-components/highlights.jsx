import React, { useState, useEffect } from 'react';
import '../styles/highlights.css';
import image26 from '../assets/images/highlights/image 26.png';
import image27 from '../assets/images/highlights/image 27.png';
import image28 from '../assets/images/highlights/image 28.png';

function HighlightsFromA() {
  return (
    <div className="highlights">
      <SlideshowA />
    </div>
  );
}

const slides = [
  {
    id: 1,
    image: image26, // Use the imported image directly
    caption: 'XYZ Sir giving Award to the students',
  },
  {
    id: 2,
    image: image27, // Replace this with another image path if needed
    caption: 'Students Attending previous exam',
  },
  {
    id: 3,
    image: image28, // Replace this with another image path if needed
    caption: 'Another Highlight',
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
      <h2 className='hvr-grow-minimal'>Highlights from last year</h2>
     
      <div className="slide-container">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="slide"
          style={{ width: '90%', opacity: '1', objectFit: 'cover', borderRadius: '20px' }}
        />
      </div>
      <p className="caption">{slides[currentIndex].caption}</p>
    </div>
  );
}

export default HighlightsFromA;
