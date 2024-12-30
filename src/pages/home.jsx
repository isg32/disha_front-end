import React from 'react'
import Navbar from '../Static-components/navbar.jsx'
import Footer from '../Static-components/footer.jsx'
import Pillbar from '../Static-components/pillbar.jsx'
import '../styles/style.css'
import Slideshow from '../Static-components/slideshow.jsx'
import slideshowplaceholder from '../assets/images/slideshow/image 34.png'
import seventyfiveyears from '../assets/images/disha_75years.png'
import Learnmoresplit from '../Static-components/learnmoresplit.jsx'
import Bannertwp from '../assets/images/banner2.png'
import Banner3twp from '../assets/images/banner3overlay.png'
import HighlightsFromYearago from '../Static-components/highlights.jsx'
import couponexample from '../assets/images/Coupon Example.png'
import Marquee_image from '../assets/images/sponcers_marque.png'
import sparkleicon from '../assets/images/sparkles.png'
import sponcersplaceholder from '../assets/images/sponcers-placeholder.png'

function HomePage() {
  return (
    <div className="home-page">

      {/* Navbar */}
      <Navbar/> 
      
      {/* Slideshow */}
      {/***
       * The slideshow is not commonized into a seperate module
       * since it is not used in other pages
       * and it is used as base for two overlays [sandwitch]
       * **/}
      <div className="sandwitch">
        <div>
          <p className='overlay' style={{width: '50%', height: '90%', margin: '20px', objectFit: 'cover', backgroundColor: 'rgba(250, 205, 98, 0.85)', borderRadius: '20px'}}>
          Disha: This Time, Bigger Achievements, Better Learning, and Bolder Moves!
            </p>
        </div>
        <img src={slideshowplaceholder} alt="Slideshow placeholder" style={{width: '100%', height: '450px', overflow: 'hidden', objectFit: 'cover'}} />
      </div>

      {/* The slide show is hidden since it dosent work well with vercel*/}
      {/*<Slideshow/>*/}

      {/* navwidget */}
      <Pillbar/>

      {/* learn more split */}
      <Learnmoresplit/>

      {/* Another Banner */}
      <div className='hvr-grow-minimal' style={{width: 'auto', height: 'auto', display:'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', margin: 'auto', marginBottom: '10%'}} >
      <img className='hvr-grow-minimal' src={Bannertwp} alt="Banner2" style={{width: '70%', height: 'auto'}} />
          <button className='hvr-grow' style={{margin: '10px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >Important Links</button>
      </div>

      {/* Another Banner */}
      <div className='hvr-grow-minimal' style={{ width: 'auto', height: 'auto', display:'flex', flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center', marginBottom: '10%'}} >
        <div style={{margin: '1% 15%', borderRadius: '40px', background: '#FFE9AE' }}>
        <img src={Banner3twp} alt="banner3 overlay" style={{margin: '6% 15%',width: '60%', height: 'auto'}}/>
        </div>
        <button className='hvr-grow' style={{margin: '6px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >See Last Year's winners</button>
      </div>


      {/* Last year Highlights */}
      <HighlightsFromYearago/>

      {/* Here Comes The Coupons */}
      <img 
        src={couponexample} 
        alt="Coupon Example" 
        style={
          {width: '70%', height: 'auto', margin: '0% 20px 10% 20px', borderRadius: '20px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
        } 
      />

      
    {/* previously participated schools' marque */}
    <h2 style={
      {margin: '40px 20px', color: 'rgba(0, 0, 0, 0.5)'}
      }>Previously Participated schools
    </h2>
    <div className="marquee-container">
      <div className="marquee">
        <img src={Marquee_image} alt="Scrolling Marquee" />
        <img src={Marquee_image} alt="Scrolling Marquee" /> {/* Duplicate for seamless scrolling */}
      </div>
    </div>
    
    {/* Footer */}
    <div className='sponcers-title'>
      <img src={sparkleicon} alt="" style={{transform: 'rotate(180deg)', height: '3em'}} />
      <h2>Our Sponcers</h2>
      <img src={sparkleicon} alt="" style={{height: '3em'}}/>
    </div>
    <img src={sponcersplaceholder} alt="" style={{width: '60%',margin: '5%', marginBottom: '10%'}} />

    {/* Footer */}
      <Footer/>
    </div>
  )
}

export default HomePage
