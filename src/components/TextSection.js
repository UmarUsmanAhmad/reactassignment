import React from 'react';

function TextSection() {
  return (
    <div className="text-section">
      <div className="Main-text">
        <h1>Manage All Your Money in One App</h1>
        <p>We offer you a new generation of mobile banking.<br />Save, spend & manage money in your pocket.</p>
        <div className="store-buttons">
          <div className="app-store">
            <img src="./images/appstore.png" alt="App Store" />
          </div>
          <div className="google-play">
            <img src="./images/googleplay.png" alt="Google Play" />
          </div>
        </div>
        <span className="discover-more">Discover More</span>
      </div>
      <div className="mobile-image">
        <img src="./images/mobile01.png" alt="App Screenshot" />
      </div>
    </div>
  );
}

export default TextSection;
