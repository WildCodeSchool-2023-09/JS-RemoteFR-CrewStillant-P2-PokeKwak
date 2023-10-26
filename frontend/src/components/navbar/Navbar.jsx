import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import Panier from "../../assets/panier.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <h1 className={styles.title}>Pokekwak</h1>
      <button type="button" className={styles.panier}>
        <img src={Panier} alt="panier" />
      </button>
    </nav>
  );
}

export default Navbar;
