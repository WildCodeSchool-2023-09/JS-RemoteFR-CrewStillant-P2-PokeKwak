import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";

function CardList({ basketCount, setBasketCount }) {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  const filteredCards = apiData.filter((card) =>
    card.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?pageSize=50")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.search}>
      <Filters setSearchValue={setSearchValue} />
      {isLoading ? (
        <div className={styles.positionLoader}>
          <div className={styles.loader} />
        </div>
      ) : (
        <div className={styles.CardList}>
          {apiData.length &&
            filteredCards.map((p) => (
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
      )}
    </div>
  );
}

export default CardList;

CardList.propTypes = {
  basketCount: PropTypes.number.isRequired,
  setBasketCount: PropTypes.func.isRequired,
};
