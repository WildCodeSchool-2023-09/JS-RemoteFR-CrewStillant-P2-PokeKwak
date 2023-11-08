import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";

function CardList({ basketCount, setBasketCount }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((data) => setApiData(data.data));
  }, []);

  return (
    <div className={styles.search}>
      <Filters />
      <div className={styles.cardList}>
        {apiData.length &&
          apiData.map((p) => (
            <Card
              key={p.id}
              name={p.name}
              smallImage={p.images.small}
              id={p.id}
              largeImage={p.images.large}
              basketCount={basketCount}
              setBasketCount={setBasketCount}
              price={p.cardmarket.prices.averageSellPrice}
            />
          ))}
      </div>
    </div>
  );
}

export default CardList;

CardList.propTypes = {
  basketCount: PropTypes.number.isRequired,
  setBasketCount: PropTypes.func.isRequired,
};
