import { useState } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import pokeball from "../../assets/pokeball.png";
import shop from "../../assets/basket.png";
import styles from "./modal.module.css";

function Modal({
  toggleModal,
  setBasketCount,
  basketCount,
  largeImage,
  name,
  price,
  id,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const shopClick = () => {
    setBasketCount(basketCount + 1);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.modalContent}>
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
            <form method="dialog">
              <button type="button" onClick={toggleModal}>
                Fermer
              </button>
              <NavLink to={`/search/${id}`}>En savoir plus</NavLink>
            </form>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  basketCount: PropTypes.number.isRequired,
  setBasketCount: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
