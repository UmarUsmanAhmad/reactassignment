
import './Testimonials.css'; 
import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      message: "This app changed my life!",
      name: "John Doe",
      role: "Designer",
      avatar: "./images/default-avatar.png", 
    },
    {
      message: "Highly recommended for everyone.",
      name: "Jane Smith",
      role: "Developer",
      avatar: "./images/default-avatar.png", 
    },
    {
      message: "A must-have tool for all professionals.",
      name: "Alex Johnson",
      role: "Manager",
      avatar: "./images/default-avatar.png", 
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="testimonial-avatar"
            />
            <p className="testimonial-text">"{testimonial.message}"</p>
            <h4>{testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
