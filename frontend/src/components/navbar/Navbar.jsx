import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import { useBasket } from "../../context/BasketContext";

function Navbar() {
  const { basketCount } = useBasket();
  return (
    <nav className={styles.navbar}>
      <div>
        <img className={styles.logo} src={Logo} alt="logo" />
      </div>
      <h1 className={styles.title}>Pokekwak</h1>
      <ul className={styles.link}>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/search">Recherche</NavLink>
        </li>
        <li>
          <NavLink to="/pokedeck">Mon Pokedeck</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Mon panier &nbsp;{basketCount}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
