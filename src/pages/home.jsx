import React from 'react'
import Navbar from '../Static-components/navbar.jsx'
import Footer from '../Static-components/footer.jsx'
import '../styles/style.css'
import Slideshow from '../Static-components/slideshow.jsx'

function HomePage() {
  return (
    <div className="home-page">
      <Navbar/>
      <Slideshow/>
      <Footer/>
    </div>
  )
}

export default HomePage
