import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";

function CardList() {
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((data) => setFilteredCards(data.data));
  }, []);

  return (
    <div className={styles.all}>
      <div className={styles.search}>
        <Filters
          filteredCards={filteredCards}
          setFilteredCards={setFilteredCards}
        />
        <div className={styles.CardList}>
          {filteredCards.length &&
            filteredCards.map((p) => (
              <Card
                key={p.id}
                name={p.name}
                smallImage={p.images.small}
                id={p.id}
                largeImage={p.images.large}
                price={p.cardmarket.prices.averageSellPrice}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;
