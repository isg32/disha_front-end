import React from 'react'
import '../styles/navbar.css'
import '../styles/common.css'
import disha_logo from '../assets/images/disha_Logo.svg'
import seventyfiveyears from '../assets/images/disha_75years.png'
import sparkicon from '../assets/images/Navbar-icons/spark.svg'
import homeicon from '../assets/images/Navbar-icons/home.svg'
import cubicleicon from '../assets/images/Navbar-icons/cubicle.svg'
import commandicon from '../assets/images/Navbar-icons/command.svg'

function Navbar() {
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-top'>
        <div>
          <img src={disha_logo} className='icons' alt="Disha logo" />
        </div>
        <div>
          <img src={seventyfiveyears} className='icons' alt="Disha 75 years" />
        </div>
        </div>
        <div className='navbar-bottom'>
            <a href="/" className='navlinks hvr-grow'> <img src={homeicon}  alt="home icon" /> Home</a> 
            <a href="/" className='navlinks hvr-grow'> <img src={cubicleicon}  alt="home icon" /> Disha Exam</a> 
            <a href="/" className='navlinks hvr-grow'> <img src={commandicon}  alt="home icon" /> Events & Quizes</a> 
            <a href="/" className='navlinks hvr-grow'> <img src={sparkicon}  alt="home icon" /> Our Highlights</a> 
        </div>
      </nav>
    </>
  )
}

export default Navbar;
