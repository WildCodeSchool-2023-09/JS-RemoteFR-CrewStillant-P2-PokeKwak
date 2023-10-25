import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./card.module.css";
import pokeball from "../../assets/pokeball.png";
import shop from "../../assets/panier.png";

function Card({
  smallImage,
  largeImage,
  name,
  price,
  panierCount,
  setPanierCount,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [isVisible, setIsVisible] = useState("notVisible");
  const [cardVisible, setCardVis] = useState("small-card");
  const cardClick = () => {
    setIsVisible((isVis) => !isVis);
    setCardVis((cardVis) => !cardVis);
  };

  const shopClick = () => {
    setPanierCount(panierCount + 1);
  };
  return (
    <div className={styles.card}>
      <button
        type="button"
        className={cardVisible ? styles.smallCard : styles.hiddenCard}
        onClick={cardClick}
      >
        <img src={smallImage} alt={name} />
      </button>
      <div className={isVisible ? styles.notVisible : styles.isVisible}>
        <img src={largeImage} alt={name} className={styles.largeImage} />
        <span className={styles.cardDescription}>
          <div className={styles.addFavorite}>
            {isHovering && (
              <label htmlFor="favorite" className={styles.label}>
                Ajouter à mon Pokédeck
              </label>
            )}
            <button
              type="button"
              name="favorite"
              onMouseOver={handleMouseOver}
              onFocus={handleMouseOver}
              onMouseOut={handleMouseOut}
              onBlur={handleMouseOut}
              className={styles.buttonFavorite}
            >
              <img src={pokeball} alt="pokeball" />
            </button>
          </div>
          <div className={styles.shop}>
            <p>{price}€</p>
            <button
              type="button"
              onClick={shopClick}
              className={styles.shopButton}
            >
              <img src={shop} alt="Ajout au panier" />
            </button>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  panierCount: PropTypes.number.isRequired,
  setPanierCount: PropTypes.func.isRequired,
};
