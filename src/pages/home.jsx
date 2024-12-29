import React from 'react'
import Navbar from '../Static-components/navbar.jsx'
import Footer from '../Static-components/footer.jsx'
import Pillbar from '../Static-components/pillbar.jsx'
import '../styles/style.css'
import Slideshow from '../Static-components/slideshow.jsx'
import slideshowplaceholder from '../assets/images/slideshow/image 34.png'
import seventyfiveyears from '../assets/images/disha_75years.png'

function HomePage() {
  return (
    <div className="home-page">

      {/* Navbar */}
      <Navbar/> 
      
      {/* Slideshow */}
      <div className="sandwitch">
        <div>
          <p className='overlay' style={{width: '50%', height: '90%', margin: '20px', objectFit: 'cover', backgroundColor: 'rgba(250, 205, 98, 0.85)', borderRadius: '20px'}}>
          Disha: This Time, Bigger Achievements, Better Learning, and Bolder Moves!
            </p>
        </div>
        <img src={slideshowplaceholder} alt="Slideshow placeholder" style={{width: '100%', height: '450px', overflow: 'hidden', objectFit: 'cover'}} />
      </div>

      {/* navwidget */}
      <Pillbar/>
      {/*<Slideshow/>*/}

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default HomePage
