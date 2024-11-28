import React from "react";

const AppFeatures = () => {
  return (
    <section className="app-features">
      
      <div className="all-logos">
        <img src="./images/Logos.png" alt="Partner Logos" />
      </div>

      
      <div className="features-wrapper">
       
        <div className="features-image-left">
          <img src="./images/featuresimage.png" alt="Mobile App Screenshot" />
        </div>

       
        <div className="features-content">
          <h2>App Features</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <img src="./images/icon.png" alt="Feature Icon 1" />
              <h3>Easy Payments</h3>
              <p>Facilitate quick payments and transaction management.</p>
            </div>
            <div className="feature-item">
              <img src="./images/icon-2.png" alt="Feature Icon 2" />
              <h3>Cost Statistics</h3>
              <p>Get insights into your spending and saving habits.</p>
            </div>
            <div className="feature-item">
              <img src="./images/icon-3.png" alt="Feature Icon 3" />
              <h3>Support 24/7</h3>
              <p>Access around-the-clock support from our team.</p>
            </div>
            <div className="feature-item">
              <img src="./images/icon-4.png" alt="Feature Icon 4" />
              <h3>Data Security</h3>
              <p>We prioritize your data privacy with advanced encryption.</p>
            </div>
            <div className="feature-item">
              <img src="./images/icon-5.png" alt="Feature Icon 5" />
              <h3>Regular Cashback</h3>
              <p>Earn cashback on your everyday purchases.</p>
            </div>
            <div className="feature-item">
              <img src="./images/icon-6.png" alt="Feature Icon 6" />
              <h3>Top Standards</h3>
              <p>We meet the highest standards in the financial industry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
