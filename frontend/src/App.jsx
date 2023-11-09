import { Outlet } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BasketContextProvider from "./context/BasketContext";

function App() {
  return (
    <div className="App">
      <BasketContextProvider>
        <Navbar />
        <Outlet />
      </BasketContextProvider>
      <Footer />
    </div>
  );
}

export default App;
