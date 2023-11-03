import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./card.module.css";
import pokeball from "../../assets/pokeball.png";
import shop from "../../assets/basket.png";

function Card({
  smallImage,
  largeImage,
  name,
  price,
  basketCount,
  setBasketCount,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [isVisible, setIsVisible] = useState("notVisible");
  const [cardVisible, setCardVis] = useState("true");
  const cardClick = () => {
    setIsVisible((isVis) => !isVis);
    setCardVis((cardVis) => !cardVis);
  };

  const shopClick = () => {
    setBasketCount(basketCount + 1);
  };
  return (
    <div className={styles.card}>
      <button
        type="button"
        className={cardVisible ? styles.smallCard : styles.hiddenCard}
        onClick={cardClick}
      >
        <img src={smallImage} alt={name} className={styles.smallimg} />
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
  basketCount: PropTypes.number.isRequired,
  setBasketCount: PropTypes.func.isRequired,
};
