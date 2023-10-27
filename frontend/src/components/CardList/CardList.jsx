import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../singleCard/Card";

function CardList({ basketCount, setBasketCount }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((data) => setApiData(data.data));
  }, []);

  return (
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
          />
        ))}
    </div>
  );
}

export default CardList;

CardList.propTypes = {
  basketCount: PropTypes.number.isRequired,
  setBasketCount: PropTypes.func.isRequired,
};
