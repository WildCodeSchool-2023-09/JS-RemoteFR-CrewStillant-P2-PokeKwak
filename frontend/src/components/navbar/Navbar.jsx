import PropTypes from "prop-types";
import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import Panier from "../../assets/panier.png";

function Navbar({ basketCount }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <h1 className={styles.title}>Pokekwak</h1>
      <button type="button" className={styles.panier}>
        <img src={Panier} alt="panier" />
        {basketCount}
      </button>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  basketCount: PropTypes.number.isRequired,
};
