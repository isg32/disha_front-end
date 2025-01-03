import React from 'react';
import '../styles/pillbar.css';
import '../styles/common.css';

function Pillbar() {
  return (
        <div className='surround hvr-grow-minimal'>
            <div className='overlay2' style={{width: '60%', height: '25%', objectFit: 'cover', borderRadius: '25px'}}>
            <div className="pill-bar">
            <div className="pill-section">
                <h3>Location</h3>
                <p>Enter Your Destination</p>
            </div>
            <div className="divider" />
            <div className="pill-section">
                <h3>Date</h3>
                <p>Set Date</p>
            </div>
            <div className="divider" />
            <div className="pill-section">
                <h3>Max Price</h3>
                <p>Set Max Price</p>
            </div>
            <button className="search-button">
                <span role="img" aria-label="search">
                🔍
                </span>
            </button>
            </div>
                    </div>
            </div>
  );
}

export default Pillbar;