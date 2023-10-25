import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../Card/Card";

function CardList() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <div className={styles.CardList}>
      {apiData.length &&
        apiData.map((p) => (
          <Card
            id={p.id}
            rarity={p.rarity}
            name={p.name}
            smallImage={p.images.small}
            largeImage={p.images.large}
            price={p.averageSellPrice}
            types={p.types}
          />
        ))}
    </div>
  );
}

export default CardList;
