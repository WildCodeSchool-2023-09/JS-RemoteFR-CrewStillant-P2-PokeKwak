import { useLoaderData, NavLink } from "react-router-dom";
import styles from "./cardPage.module.css";
import pokeball from "../../assets/pokeball.png";
import shop from "../../assets/basket.png";
import deckbox from "../../assets/deckbox.png";

function CardPage() {
  const card = useLoaderData();
  return (
    <div className={styles.card}>
      <img src={card.data.images.large} alt={card.data.name} />
      <div className={styles.cardText}>
        <h1>{card.data.name}</h1>
        <p>Types : {card.data.types[0]}</p>
        <p>Supertype : {card.data.supertype}</p>
        <p>Set : {card.data.set.name}</p>
        <p>Rareté : {card.data.rarity} </p>
        <p>Artiste : {card.data.artist}</p>
        <p>Prix : {card.data.cardmarket.prices.averageSellPrice} €</p>
        <p>Description : {card.data.flavorText} </p>

        <div className={styles.buttons}>
          <button type="button">
            <img src={shop} alt="Ajout au panier" />
            Ajouter au panier
          </button>
          <button type="button">
            <img src={pokeball} alt="pokeball" />
            Ajouter au Pokedeck
          </button>
          <button type="button">
            <img src={deckbox} alt="Cartes" />
            <NavLink to="/search">Retour aux cartes</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
