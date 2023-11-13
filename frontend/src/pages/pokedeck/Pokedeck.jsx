import { useBasket } from "../../context/BasketContext";
import styles from "./pokedeck.module.css";

function Pokedeck() {
  const { favoriteCard } = useBasket();

  return (
    <div className={styles.pokedeck}>
      <h1>Mon Pokedeck</h1>
      <div className={styles.cards}>
        {favoriteCard.map((c) => (
          <div className={styles.myCard} key={c.idCard}>
            <img src={c.image} alt={c.cardName} />
            <p>{c.cardName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokedeck;
