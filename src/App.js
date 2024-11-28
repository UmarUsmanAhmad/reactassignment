import React from "react";
import Header from "./components/Header";
import AppFeatures from "./components/AppFeatures";
import HowItWorks from "./components/HowItWorks";
import MoneyTransferReceive from "./components/MoneyTransferReceive";
import ClientsLove from "./components/ClientsLove";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import "./style.css";

const App = () => {
  return (
    <div>
      <Header />
      <AppFeatures />
      <HowItWorks />
      <MoneyTransferReceive />
      <ClientsLove />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default App;
