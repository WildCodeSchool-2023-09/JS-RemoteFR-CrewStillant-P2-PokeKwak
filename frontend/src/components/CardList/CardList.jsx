import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./CardList.module.css";
import Card from "../singleCard/Card";
import Filters from "../filters/Filters";

function CardList({ cards }) {
  const [filteredCards, setFilteredCards] = useState(cards.data);

  const type = new Set(cards.data.map((e) => e.types[0]));
  const typeArray = Array.from(type);

  const rarity = new Set(cards.data.map((e) => e.rarity));
  const rarityArray = Array.from(rarity);

  const collection = new Set(cards.data.map((e) => e.set.name));
  const collectionArray = Array.from(collection);

  const sellPrice = new Set(
    cards.data.map((e) => parseInt(e.cardmarket.prices.averageSellPrice, 10))
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
          data={cards}
        />
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
    </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default CardList;
