import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ConfirmModal from "../confirmModal/ConfirmModal";
import pokeball from "../../assets/pokeball.png";
import shop from "../../assets/basket.png";
import styles from "./modal.module.css";
import { useBasket } from "../../context/BasketContext";

function Modal({ toggleModal, largeImage, name, price, id }) {
  const {
    toto,
    setToto,
    basketCount,
    setBasketCount,
    prices,
    setPrices,
    cardItems,
    setCardItems,
    favoriteCard,
    setFavoriteCard,
  } = useBasket();

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [added, setAdded] = useState(false);
  const [typeButton, setTypeButton] = useState("");

  const favoriteClick = () => {
    const newCard = {
      idCard: id,
      cardName: name,
      image: largeImage,
    };
    if (favoriteCard.find((e) => e.idCard === newCard.idCard)) {
      setFavoriteCard([...favoriteCard]);
      setToto(true);
    } else {
      setFavoriteCard([...favoriteCard, newCard]);
      setToto(false);
    }

    setTypeButton(true);
    setAdded(!added);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const shopClick = () => {
    const item = cardItems.find((c) => c.idItem === id);

    if (item) {
      item.quantity += 1;
      setCardItems([...cardItems]);
    } else {
      const newItem = {
        idItem: id,
        nameItem: name,
        priceItem: price,
        image: largeImage,
        quantity: 1,
      };
      setCardItems([...cardItems, newItem]);
    }
    setPrices(prices + price);
    setBasketCount(basketCount + 1);
    setTypeButton(false);
    setAdded(!added);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.modalContent}>
          <button
            className={styles.closeModal}
            type="button"
            onClick={toggleModal}
          >
            X
          </button>
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
                onClick={favoriteClick}
                className={styles.buttonFavorite}
              >
                <img src={pokeball} alt="pokeball" />
              </button>
            </div>
            <div className={styles.shop}>
              <NavLink to={`/search/${id}`}>En savoir plus</NavLink>
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
        {added && <ConfirmModal typeButton={typeButton} toto={toto} />}
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
