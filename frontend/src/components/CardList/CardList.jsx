import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";
import { useBasket } from "../../context/BasketContext";

function CardList() {
  const { basketCount, prices, setBasketCount, setPrices } = useBasket();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((data) => setApiData(data.data));
  }, []);

  return (
    <div className={styles.search}>
      <Filters />
      <div className={styles.CardList}>
        {apiData.length &&
          apiData.map((p) => (
            <Card
              key={p.id}
              rarity={p.rarity}
              name={p.name}
              smallImage={p.images.small}
              largeImage={p.images.large}
              price={p.cardmarket.prices.averageSellPrice}
              types={p.types}
              basketCount={basketCount}
              setBasketCount={setBasketCount}
              prices={prices}
              setPrices={setPrices}
            />
          ))}
      </div>
    </div>
  );
}

export default CardList;
