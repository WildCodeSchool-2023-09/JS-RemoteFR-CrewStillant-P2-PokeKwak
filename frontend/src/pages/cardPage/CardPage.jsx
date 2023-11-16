import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";
import { useBasket } from "../../context/BasketContext";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";
import styles from "./cardPage.module.css";
import pokeball from "../../assets/pokeball.png";
import shop from "../../assets/basket.png";
import deckbox from "../../assets/deckbox.png";

function CardPage() {
  const card = useLoaderData();
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
  const [added, setAdded] = useState(false);
  const [typeButton, setTypeButton] = useState("");

  const favoriteClick = () => {
    const fav = favoriteCard.find((f) => f.idCard === card.data.id);

    if (fav) {
      card.data.isFavorite = true;
      setFavoriteCard([...favoriteCard]);
    } else {
      const newCard = {
        idCard: card.data.id,
        cardName: card.data.name,
        image: card.data.images.large,
      };
      setFavoriteCard([...favoriteCard, newCard]);
    }
    setTypeButton(true);
    setAdded(!added);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const shopClick = () => {
    const item = cardItems.find((c) => c.idItem === card.data.id);

    if (item) {
      item.quantity += 1;
      setCardItems([...cardItems]);
    } else {
      const newItem = {
        idItem: card.data.id,
        nameItem: card.data.name,
        priceItem: card.data.cardmarket.prices.averageSellPrice,
        image: card.data.images.large,
        quantity: 1,
      };
      setCardItems([...cardItems, newItem]);
    }
    setPrices(prices + card.data.cardmarket.prices.averageSellPrice);
    setBasketCount(basketCount + 1);
    setTypeButton(false);
    setAdded(!added);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.cardimg}
        src={card.data.images.large}
        alt={card.data.name}
      />
      <div className={styles.desc}>
        <div className={styles.cardText}>
          <h1>{card.data.name}</h1>
          <p>Types : {card.data.types[0]}</p>
          <p>Supertype : {card.data.supertype}</p>
          <p>Set : {card.data.set.name}</p>
          <p>Rareté : {card.data.rarity} </p>
          <p>Artiste : {card.data.artist}</p>
          <p>Prix : {card.data.cardmarket.prices.averageSellPrice} €</p>
          <p>Description : {card.data.flavorText} </p>
        </div>
        <div className={styles.cardbuttons}>
          <button type="button" onClick={shopClick}>
            <img src={shop} alt="Ajout au panier" />
            Panier + 1
          </button>
          <button type="button" onClick={favoriteClick}>
            <img src={pokeball} alt="pokeball" />
            Pokedeck + 1
          </button>
          <button type="button">
            <img src={deckbox} alt="Cartes" />
            <NavLink to="/search">Retour</NavLink>
          </button>
          {added && (
            <ConfirmModal
              typeButton={typeButton}
              isFavorite={card.data.isFavorite}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardPage;
