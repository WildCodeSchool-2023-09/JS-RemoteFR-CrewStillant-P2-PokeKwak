import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CardList from "./components/CardList/CardList";
import Footer from "./components/footer/Footer";

function App() {
  const [basketCount, setBasketCount] = useState(0);

  return (
    <div className="App">
      <Navbar basketCount={basketCount} />
      <CardList basketCount={basketCount} setBasketCount={setBasketCount} />
      <Footer />
    </div>
  );
}

export default App;
