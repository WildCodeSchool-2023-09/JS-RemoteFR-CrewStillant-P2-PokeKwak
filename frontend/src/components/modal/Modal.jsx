import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ConfirmModal from "../confirmModal/ConfirmModal";
import pokeball from "../../assets/pokeball.png";
import shop from "../../assets/basket.png";
import styles from "./modal.module.css";
import { useBasket } from "../../context/BasketContext";

function Modal({ data, toggleModal, largeImage, name, price, id }) {
  const {
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
    const fav = favoriteCard.find((f) => f.idCard === id);

    if (fav) {
      const temp = data;
      temp.isFavorite = true;
      setFavoriteCard([...favoriteCard]);
    } else {
      const newCard = {
        idCard: id,
        cardName: name,
        image: largeImage,
      };
      setFavoriteCard([...favoriteCard, newCard]);
      localStorage.setItem(
        "favoriteCard",
        JSON.stringify([...favoriteCard, newCard])
      );
    }
    setTypeButton(true);
    setAdded(!added);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
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

  useEffect(() => {
    localStorage.setItem("favoriteCard", JSON.stringify(favoriteCard));
  }, [favoriteCard]);

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
        {added && (
          <ConfirmModal typeButton={typeButton} isFavorite={data.isFavorite} />
        )}
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
