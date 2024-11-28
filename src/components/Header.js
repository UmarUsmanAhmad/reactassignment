import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="./images/Siliconlogo.png" alt="Silicon Logo" />
          <span className="brand-name">Silicon</span>
        </div>
        <ul className="menu">
          <li>
            <a href="#features">Features</a>
          </li>
        </ul>
        <div className="header-actions">
          <div className="dark-mode-toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
            <span>Dark Mode</span>
          </div>
          <button className="sign-in-btn">Sign in / up</button>
        </div>
      </nav>
      <div className="text-section">
        <div className="Main-text">
          <h1>Manage All Your Money in One App</h1>
          <p>
            We offer you a new generation of mobile banking.
            <br />
            Save, spend & manage money in your pocket.
          </p>
          <div className="store-buttons">
            <img src="./images/appstore.png" alt="App Store" />
            <img src="./images/googleplay.png" alt="Google Play" />
          </div>
          <span className="discover-more">Discover More</span>
        </div>
        <div className="mobile-image">
          <img src="./images/mobile01.png" alt="App Screenshot" />
        </div>
      </div>
    </header>
  );
};

export default Header;
