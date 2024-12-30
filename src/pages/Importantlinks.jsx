import React from 'react'
import Navbar from '../Static-components/navbar.jsx'
import Footer from '../Static-components/footer.jsx'
import '../styles/style.css'
import Importantlinksbannerplaceholder from '../assets/images/generic-placeholder-banner.png'
import '../styles/importantlinks.css'
import awomanholdingpapers from '../assets/images/chicktemplate.png'
import ourpartners from '../assets/images/ourpartneres.png'

function Importantlinks() {
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
      <img src={Importantlinksbannerplaceholder} alt="custom page placeholder" style={{width: '100%', marginTop: '170px'}} />

    {/* 2 sections - important links with button/details and a chick  */}
    <div className='importantlinks-main hvr-grow-minimal'>
        <div className='side-left hvr-grow-minimal'>
            <div className='hvr-grow-minimal'>
                <h1>Important Links</h1>
                <h2>Detail 1</h2>
            </div>
            <ul className='hvr-grow-minimal'>
                <li>Nature's Wonders - Capture the beauty of nature in your surroundings.</li>
                <li>Life in Motion - Showcase moments that express movement and energy.</li>
                <li>Colors of Culture - Highlight diversity and vibrancy within your community.</li>
            </ul>
            <div className='DivineButtons hvr-grow-minimal'>
                <button className='hvr-grow' style={{margin: '10px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >Download Previous Year Papers</button>
                <button className='hvr-grow' style={{margin: '10px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >See Exam results</button>
                <button className='hvr-grow' style={{margin: '10px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >Check Exam Dates</button>
                <button className='hvr-grow' style={{margin: '10px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >Download Admit Card</button>
                <button className='hvr-grow' style={{margin: '10px', border: 'none' ,borderRadius: '50px' ,background: '#FF9A00',boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} >See Last Examination's Rans</button>
            </div>
        </div>

        <div className='side-right'>
        <img src={awomanholdingpapers} alt="" />
        </div>
    </div>

    {/* yellow lable */}
    <div className='learnmoresplit hvr-grow-minimal' style={{justifyContent: 'center', padding:'2%'}}>
        <div className='button-out hvr-grow'>
          <button className='buttonsi'>
          <p>Register Your school</p>
          </button>
        </div>
      </div>

    {/* The Sponcers' table */}
    <div>
        <img src={ourpartners} alt="our partneres" className='hvr-grow-minimal'
            style={{
                width: '90%',
                margin: '10px'
            }}
        />
    </div>

    {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Importantlinks
