import { NavLink } from "react-router-dom";
import HomeImage from "../../assets/Home-image.png";
import CatchThem from "../../assets/CatchThem.png";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div className={styles.HomeImage}>
      <img src={HomeImage} alt="logo" className={styles.smallImage} />
      <img src={CatchThem} alt="CatchThem" className={styles.CatchThem} />
      <p className={styles.welcome}>
        <NavLink className={styles.text} to="/search">
          Recherche une carte
        </NavLink>{" "}
        et ajoute la à ton{" "}
        <NavLink className={styles.text} to="/shop">
          panier
        </NavLink>
      </p>
    </div>
  );
}

export default HomePage;
