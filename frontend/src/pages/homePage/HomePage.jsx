import { NavLink } from "react-router-dom";
import HomeImage from "../../assets/Home-image.png";
import CatchThem from "../../assets/CatchThem.png";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div className={styles.home}>
      <img src={HomeImage} alt="logo" className={styles.smallImage} />
      <img src={CatchThem} alt="CatchThem" className={styles.CatchThem} />
      <div className={styles.navContent}>
        <p className={styles.welcome}>
          Tu peux{" "}
          <NavLink className={styles.text} to="/search">
            rechercher une carte
          </NavLink>{" "}
          et l'ajouter à ton{" "}
          <NavLink className={styles.text} to="/shop">
            panier.
          </NavLink>
        </p>
        <p className={styles.welcome}>
          Mais aussi les ajouter dans ton{" "}
          <NavLink className={styles.text} to="/pokedeck">
            Pokedeck
          </NavLink>{" "}
          virtuel !
        </p>
      </div>
    </div>
  );
}

export default HomePage;
