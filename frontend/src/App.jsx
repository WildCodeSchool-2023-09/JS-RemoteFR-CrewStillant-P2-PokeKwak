import { Outlet } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const [basketCount, setBasketCount] = useState(0);
  return (
    <div className="App">
      <Navbar basketCount={basketCount} setBasketCount={setBasketCount} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
