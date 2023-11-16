import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./filters.module.css";
import SearchBar from "./searchBar/SearchBar";

function Filters({
  setFilteredCards,
  typeArray,
  rarityArray,
  sellPriceArray,
  collectionArray,
  data,
}) {
  const [reduce, setReduce] = useState("Reduce");
  const [buttonName, setButtonName] = useState("<");
  const reduceClick = () => {
    setReduce((e) => !e);
    setButtonName(">");
  };
  const typeChange = (e) => {
    setFilteredCards(
      data.filter(
        (c) => e.target.value === "All" || c.types[0] === e.target.value
      )
    );
  };
  const rarityChange = (e) => {
    setFilteredCards(
      data.filter(
        (c) => e.target.value === "All" || c.rarity === e.target.value
      )
    );
  };
  const collectionChange = (e) => {
    setFilteredCards(
      data.filter(
        (c) => e.target.value === "All" || c.set.name === e.target.value
      )
    );
  };
  const pricesChange = (e) => {
    setFilteredCards(
      data.filter((c) => c.cardmarket.prices.averageSellPrice > e.target.value)
    );
  };
  const pricesValue = pricesChange.prices;
  return (
    <div className={styles.filters}>
      <SearchBar setFilteredCards={setFilteredCards} data={data} />
      <div className={reduce ? styles.notReduce : styles.reduce}>
        <div className="collection">
          <h1>Collection :</h1>
          <div className={styles.collection}>
            <select
              name="collection"
              id="collection"
              onChange={collectionChange}
            >
              <option value="All">All</option>
              {collectionArray.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="types">
          <h1>Types :</h1>
          <div className={styles.types}>
            <select name="types" id="types" onChange={typeChange}>
              <option value="All">All</option>
              {typeArray.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div />

          <div className="rarity">
            <div>
              <h1>Rareté :</h1>
              <div className={styles.rarity}>
                <select name="rarity" id="rarity" onChange={rarityChange}>
                  <option value="All">All</option>
                  {rarityArray.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="price">
            <h1>Prix :</h1>
            <div className={styles.prices}>
              <div>
                <input
                  type="range"
                  id="prices"
                  name="prices"
                  min={Math.min(...sellPriceArray)}
                  value={pricesValue}
                  max={Math.max(...sellPriceArray)}
                  step="1"
                  onChange={pricesChange}
                />
                {pricesValue}
              </div>
            </div>
          </div>
        </div>
        <div className="reset">
          <button type="button" onClick={() => setFilteredCards(data)}>
            Reset
          </button>
        </div>

        <div className={styles.buttonFilter}>
          <button type="button" onClick={reduceClick}>
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
Filters.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  typeArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
  rarityArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
  sellPriceArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
  collectionArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
