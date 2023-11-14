import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";

function CardList({ cards }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredCards = cards.data.filter((card) =>
    card.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  return (
    <div className={styles.all}>
      <div className={styles.search}>
        <Filters setSearchValue={setSearchValue} />
      </div>
      <div className={styles.cardList}>
        {filteredCards.map((p) => (
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

CardList.propTypes = {
  cards: PropTypes.func.isRequired,
};

export default CardList;
