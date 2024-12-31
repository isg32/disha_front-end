import React, { useState, useEffect } from 'react';
import Navbar from '../Static-components/navbar.jsx';
import Footer from '../Static-components/footer.jsx';
import Pillbar from '../Static-components/pillbar.jsx';
import '../styles/style.css';
import '../styles/common.css';
import Learnmoresplit from '../Static-components/learnmoresplit.jsx';
import HighlightsFromYearago from '../Static-components/highlights.jsx';
import Bannertwp from '../assets/images/banner2.png';
import Banner3twp from '../assets/images/banner3overlay.png';
import couponexample from '../assets/images/Coupon Example.png';
import Marquee_image from '../assets/images/sponcers_marque.png';
import sparkleicon from '../assets/images/sparkles.png';
import sponcersplaceholder from '../assets/images/sponcers-placeholder.png';
import image26 from '../assets/images/slideshow/image 34.png';
import image27 from '../assets/images/slideshow/image 50.png';
import image28 from '../assets/images/slideshow/image 51.png';

const slides = [
  { id: 1, image: image26 },
  { id: 2, image: image27 },
  { id: 3, image: image28 },
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="slideshow">
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        className="slide"
        style={{ width: '100%', height: '450px', objectFit: 'cover' }}
      />
    </div>
  );
}

function HomePage() {

  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar id="navbar" />

      <div className='main-body'>
        {/* Slideshow */}
        <div className="sandwitch">
          <div>
            <p
              className="overlay hvr-grow-minimal"
              style={{
                width: '50%',
                height: '90%',
                margin: '20px',
                objectFit: 'cover',
                backgroundColor: 'rgba(250, 205, 98, 0.85)',
                borderRadius: '20px',
              }}
            >
              Disha: This Time, Bigger Achievements, Better Learning, and Bolder Moves!
            </p>
          </div>
          <Slideshow />
        </div>

        {/* Navigation Widget */}
        <Pillbar />

        {/* Learn More Section */}
        <Learnmoresplit />

        {/* Banner Section */}
        <div
          className="hvr-grow-minimal"
          style={{
            width: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginBottom: '10%',
          }}
        >
          <img
            className="hvr-grow-minimal"
            src={Bannertwp}
            alt="Banner2"
            style={{ width: '70%', height: 'auto' }}
          />
          <button
            className="hvr-grow"
            style={{
              margin: '10px',
              border: 'none',
              borderRadius: '50px',
              background: '#FF9A00',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
            onClick={() => window.location.href = '/Importantlinks'}
          >
            Important Links
          </button>
        </div>

        {/* Another Banner */}
        <div
          className="hvr-grow-minimal"
          style={{
            width: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10%',
          }}
        >
          <div
            style={{
              margin: '1% 15%',
              borderRadius: '40px',
              background: '#FFE9AE',
            }}
          >
            <img
              src={Banner3twp}
              alt="banner3 overlay"
              style={{ margin: '6% 15%', width: '60%', height: 'auto' }}
            />
          </div>
          <button
            className="hvr-grow"
            style={{
              margin: '6px',
              border: 'none',
              borderRadius: '50px',
              background: '#FF9A00',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            See Last Year's winners
          </button>
        </div>

        {/* Last Year Highlights */}
        <HighlightsFromYearago />

        {/* Coupons */}
        <img
          src={couponexample}
          className="hvr-grow-minimal"
          alt="Coupon Example"
          style={{
            width: '70%',
            height: 'auto',
            margin: '0% 20px 10% 20px',
            borderRadius: '20px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        />

        {/* Previously Participated Schools */}
        <h2 style={{ margin: '40px 20px', color: 'rgba(0, 0, 0, 0.5)' }}>
          Previously Participated Schools
        </h2>
        <div className="marquee-container">
          <div className="marquee">
            <img src={Marquee_image} alt="Scrolling Marquee" />
            <img src={Marquee_image} alt="Scrolling Marquee" /> {/* Duplicate for seamless scrolling */}
          </div>
        </div>

        {/* Sponsors */}
        <div className="sponcers-title hvr-grow-minimal">
          <img src={sparkleicon} alt="" style={{ transform: 'rotate(180deg)', height: '3em' }} />
          <h2>Our Sponsors</h2>
          <img src={sparkleicon} alt="" style={{ height: '3em' }} />
        </div>
        <img
          className="hvr-grow-minimal"
          src={sponcersplaceholder}
          alt="Sponsors"
          style={{ width: '75%', margin: '5%', marginBottom: '10%' }}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
