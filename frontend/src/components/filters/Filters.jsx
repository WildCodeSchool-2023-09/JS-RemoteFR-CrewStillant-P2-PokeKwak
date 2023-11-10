import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./filters.module.css";
import SearchBar from "./searchBar/SearchBar";
import TypesFilters from "../typesFilters/TypesFilters";
import RarityFilters from "../rarityFilters/RarityFilters";
import SetFilters from "../setFilters/SetFilters";

function Filters({ filteredCards, setFilteredCards }) {
  const [reduce, setReduce] = useState("Reduce");
  const [buttonName, setButtonName] = useState("<");
  const reduceClick = () => {
    setReduce((e) => !e);
    setButtonName(">");
  };
  return (
    <div className={styles.filters}>
      <SearchBar
        filteredCards={filteredCards}
        setFilteredCards={setFilteredCards}
      />
      <div className={reduce ? styles.notReduce : styles.reduce}>
        <div className="collection">
          <SetFilters
            filteredCards={filteredCards}
            setFilteredCards={setFilteredCards}
          />
        </div>
        <div className="types">
          <TypesFilters
            setFilteredCards={setFilteredCards}
            filteredCards={filteredCards}
          />
        </div>
        <div className="rarity">
          <RarityFilters
            setFilteredCards={setFilteredCards}
            filteredCards={filteredCards}
          />
        </div>
        <div className="price">
          <h1>Price of Cards</h1>
          <input
            type="range"
            id="prices"
            name="prices"
            min="0"
            value={filteredCards.prices}
            max="300"
            step="5"
          />
        </div>
        <div className="reset">
          <button type="button" onClick={() => setFilteredCards()}>
            Reset
          </button>
        </div>
      </div>
      <div className={styles.buttonFilter}>
        <button type="button" onClick={reduceClick}>
          {buttonName}
        </button>
      </div>
    </div>
  );
}

export default Filters;
Filters.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
