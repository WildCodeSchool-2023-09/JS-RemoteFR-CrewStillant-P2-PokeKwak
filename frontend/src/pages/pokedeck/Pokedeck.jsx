import styles from "./pokedeck.module.css";

function Pokedeck() {
  return (
    <div className={styles.pokedeck}>
      <h1>Mon Pokedeck</h1>
      <div className={styles.cards}>
        <div className={styles.myCard}>
          <img src="" alt="name" />
          <p>Nom du pokemon</p>
        </div>
      </div>
    </div>
  );
}

export default Pokedeck;
