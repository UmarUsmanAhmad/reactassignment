import React from "react";

const ClientsLove = () => {
  return (
    <section className="clients-love">
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="quote-icon-wrapper">
              <img src="./images/Comaicon.png" alt="Quote Icon" />
            </div>
            <div className="rating">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>☆</span>
            </div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
              sagittis. Laoreet posuere rhoncus.
            </p>
            <div className="testimonial-footer">
              <img src="./images/Fannisicon.png" alt="Fannie Summers" />
              <div className="details">
                <span className="name">Fannie Summers</span>
                <span className="role">Designer</span>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="testimonial">
            <div className="quote-icon-wrapper">
              <img src="./images/Comaicon.png" alt="Quote Icon" />
            </div>
            <div className="rating">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p>
              Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
              amet porttitor. Nisi bibendum nulla tincidunt eu.
            </p>
            <div className="testimonial-footer">
              <img src="./images/Alberticon.png" alt="Albert Flores" />
              <div className="details">
                <span className="name">Albert Flores</span>
                <span className="role">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLove;
