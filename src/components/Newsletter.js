import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to our newsletter</h2>
      <form>
        <input type="email" placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
