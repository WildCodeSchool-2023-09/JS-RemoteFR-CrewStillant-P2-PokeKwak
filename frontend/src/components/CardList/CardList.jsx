import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../Card/Card";

function CardList({ panierCount, setPanierCount }) {
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
            panierCount={panierCount}
            setPanierCount={setPanierCount}
          />
        ))}
    </div>
  );
}

export default CardList;

CardList.propTypes = {
  panierCount: PropTypes.number.isRequired,
  setPanierCount: PropTypes.func.isRequired,
};
