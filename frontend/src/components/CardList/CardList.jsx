import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";

function CardList() {
  const [data, setData] = useState([]);
  const [filteredCards, setFilteredCards] = useState(data);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((d) => setData(d.data));
  }, []);
  useEffect(() => {
    setFilteredCards(data);
  }, [data]);

  const type = new Set(data.map((e) => e.types[0]));
  const typeArray = Array.from(type);

  const rarity = new Set(data.map((e) => e.rarity));
  const rarityArray = Array.from(rarity);

  const collection = new Set(data.map((e) => e.set.name));
  const collectionArray = Array.from(collection);

  const sellPrice = new Set(
    data.map((e) => parseInt(e.cardmarket.prices.averageSellPrice, 10))
  );
  const sellPriceArray = Array.from(sellPrice);
  return (
    <div className={styles.all}>
      <div className={styles.search}>
        <Filters
          filteredCards={filteredCards}
          setFilteredCards={setFilteredCards}
          typeArray={typeArray}
          rarityArray={rarityArray}
          collectionArray={collectionArray}
          sellPriceArray={sellPriceArray}
          data={data}
        />
        <div className={styles.cardList}>
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
