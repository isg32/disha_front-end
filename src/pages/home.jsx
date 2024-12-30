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
      <div className='hvr-grow-minimal' style={{width: 'auto', height: 'auto', display:'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', margin: 'auto'}} >
      <img className='hvr-grow-minimal' src={Bannertwp} alt="Banner2" style={{width: '90%', height: 'auto'}} />
          <button className='hvr-grow' style={{margin: '10px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >Important Links</button>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default HomePage
