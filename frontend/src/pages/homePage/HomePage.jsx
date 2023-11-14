import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeImage from "../../assets/Home-image.png";
import CatchThem from "../../assets/CatchThem.png";
import styles from "./homePage.module.css";
import audioFile from "../../assets/audio/song.mp3";

function HomePage() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio(audioFile);

    if (!isMuted) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isMuted]);

  const onClickMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

  return (
    <div className={styles.home}>
      <img src={HomeImage} alt="logo" className={styles.smallImage} />
      <button className={styles.button} type="button" onClick={onClickMute}>
        {isMuted ? "Sound OFF" : "Sound ON"}
      </button>
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
