import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";

function CardList() {
  const [apiData, setApiData] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const filteredCards = apiData.filter((card) =>
    card.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((data) => setApiData(data.data));
  }, []);

  return (
    <div className={styles.search}>
      <Filters setSearchValue={setSearchValue} />
      <div className={styles.CardList}>
        {apiData.length &&
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
  );
}

export default CardList;
