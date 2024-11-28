import React from "react";

const MoneyTransferReceive = () => {
  return (
    <section className="money-transfer-receive">
      <div className="container">
        <div className="left-section">
          <h2>Make your money transfer simple and clear</h2>
          <ul>
            <li>Banking transactions are free for you</li>
            <li>No monthly cash commission</li>
            <li>Manage payments and transactions online</li>
          </ul>
          <a href="#" className="btn">
            Learn more
          </a>
        </div>
        <div className="right-section">
          <img src="./images/Makeyoumoneyimage.png" alt="Savings Statistics" />
        </div>
      </div>
    </section>
  );
};

export default MoneyTransferReceive;
