import React from 'react'
import '../styles/footer.css'
import '../styles/common.css'
import disha_logo from '../assets/images/disha_Logo.svg'
import seventyfiveyears from '../assets/images/disha_75years.png'
import sparkicon from '../assets/images/Navbar-icons/spark.svg'
import homeicon from '../assets/images/Navbar-icons/home.svg'
import cubicleicon from '../assets/images/Navbar-icons/cubicle.svg'
import commandicon from '../assets/images/Navbar-icons/command.svg'

function Footer() {
  
  return (
    <>
      <>
      <nav className='footerx'>
        <div className='footer-top'>
        <div>
          <p className='footer-top-left'>Are you a student, startup, or in between jobs? Email Us at <a href="mailto:disha@exmaple.com">disha@exmaple.com</a> for a special discount</p>
        </div>
        <div>
        <p className='footer-top-right'>Explore exclusive partnership opportunities - <a href="mailto:disha@exmaple.com">contact now</a>!</p>
        </div>
        </div>
        <div className='footer-middle'>
            <p className='taglinex'>Stay <br />updated</p>
            <div className='newsletter'><input type="email" placeholder="Your Email" />
            <button className='button'><span>Subscribe</span></button></div>
        </div>
        <div className='footer-bottom'>
            <p>© 2024 Amar Ujala Disha - All rights reserved | Contact Us</p>
            <img src={disha_logo} alt="disha logo" /> 
        </div>
      </nav>
    </>
    </>
  )
}

export default Footer;