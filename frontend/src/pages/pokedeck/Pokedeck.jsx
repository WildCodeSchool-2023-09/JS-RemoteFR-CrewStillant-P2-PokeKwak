import { NavLink } from "react-router-dom";
import { useBasket } from "../../context/BasketContext";
import styles from "./pokedeck.module.css";
import roudoudou from "../../assets/roudoudou.png";

function Pokedeck() {
  const { favoriteCard, setFavoriteCard } = useBasket();

  const deleteCard = (id) => {
    const itemIndex = favoriteCard.findIndex((f) => f.idCard === id);
    favoriteCard.splice(itemIndex, 1);
    setFavoriteCard([...favoriteCard]);
  };
  return (
    <div className={styles.pokedeck}>
      <h1>Mon Pokedeck</h1>
      <div className={styles.cards}>
        {favoriteCard.length === 0 ? (
          <div className={styles.empty}>
            <img src={roudoudou} alt="pokémon triste" />
            <p>Le Pokédeck est vide, remplis-le vite !</p>
          </div>
        ) : (
          <>
            {favoriteCard.map((c) => (
              <div className={styles.myCard} key={c.idCard}>
                <img
                  className={styles.cardimg}
                  src={c.image}
                  alt={c.cardName}
                />

                <NavLink to={`/search/${c.idCard}`} className={styles.nav}>
                  {c.cardName}
                </NavLink>
                <button
                  type="button"
                  onClick={() => deleteCard(c.idCard)}
                  className={styles.deleteButton}
                >
                  Retirer du Pokédeck
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Pokedeck;
