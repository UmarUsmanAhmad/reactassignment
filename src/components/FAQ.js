import React, { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is any of my personal information stored in the App?",
      answer: "Your personal information is securely encrypted and stored only as necessary for the app's functionality.",
    },
    {
      question: "What formats can I download my transaction history in?",
      answer: "You can download your transaction history in CSV, PDF, or Excel formats for your convenience.",
    },
    {
      question: "Can I schedule future transfers?",
      answer:
        "Yes, you can schedule transfers ahead of time using the app’s scheduling feature. Simply choose a date and time.",
    },
    {
      question: "When can I use Banking App services?",
      answer: "Banking App services are available 24/7 to ensure you have access anytime you need them.",
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer:
        "Yes, you can create a personalized password during account setup or by updating it in your account settings.",
    },
    {
      question: "What happens if I forget or lose my password?",
      answer:
        "If you forget your password, you can reset it through the 'Forgot Password' link on the login screen.",
    },
  ];
  
  return (
    <section className="faq-section">
      <div className="container">
        <h2>Any questions? Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>
        <div className="contact-options">
          <div className="contact-option">
            <img src="./images/Bluephonecicon.png" alt="Phone Support" />
            <p>
              <strong>Still have questions?</strong>
              <br />
              <a href="/contact">Contact us →</a>
            </p>
          </div>
          <div className="contact-option">
            <img src="./images/greenchaticon.png" alt="Chat Support" />
            <p>
              <strong>Don't like phone calls?</strong>
              <br />
              <a href="/contact">Contact us →</a>
            </p>
          </div>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${expanded === index ? "expanded" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h4>{item.question}</h4>
              {expanded === index && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
