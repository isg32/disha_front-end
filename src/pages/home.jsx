import React from 'react'
import Navbar from '../Static-components/navbar.jsx'
import Footer from '../Static-components/footer.jsx'
import '../styles/style.css'
import Slideshow from '../Static-components/slideshow.jsx'
import slideshowplaceholder from '../assets/images/slideshow/image 34.png'

function HomePage() {
  return (
    <div className="home-page">
      <Navbar/>
      <img src={slideshowplaceholder} alt="Slideshow placeholder" style={{width: '100%', height: '450px', overflow: 'hidden', objectFit: 'cover'}} />
      {/*<Slideshow/>*/}
      <Footer/>
    </div>
  )
}

export default HomePage
