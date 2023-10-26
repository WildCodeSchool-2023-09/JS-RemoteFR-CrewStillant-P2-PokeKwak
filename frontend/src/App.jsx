import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CardList from "./components/CardList/CardList";
import Footer from "./components/footer/Footer";

function App() {
  const [panierCount, setPanierCount] = useState(0);

  return (
    <div className="App">
      <Navbar panierCount={panierCount} />
      <CardList panierCount={panierCount} setPanierCount={setPanierCount} />
      <Footer />
    </div>
  );
}

export default App;
