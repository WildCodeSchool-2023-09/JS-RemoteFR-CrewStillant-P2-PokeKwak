import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./filters.module.css";
import SearchBar from "./searchBar/SearchBar";

function Filters({ setSearchValue }) {
  const [reduce, setReduce] = useState("Reduce");
  const [buttonName, setButtonName] = useState("<");
  const reduceClick = () => {
    setReduce((e) => !e);
    setButtonName(">");
  };
  return (
    <div className={styles.filters}>
      <SearchBar setSearchValue={setSearchValue} />
      <div className={reduce ? styles.notReduce : styles.reduce}>
        <div className="collection">
          <h1>Collection list</h1>
          <select name="collection" id="collection">
            <option value="All">All</option>
            <option value="coll1">Toto</option>
          </select>
        </div>
        <div className="types">
          <h1>Types of Pokemon</h1>
          <input type="checkbox" />
        </div>
        <div className="rarity">
          <h1>Rarity of Pokemon</h1>
          <input type="checkbox" />
        </div>
        <div className="price">
          <h1>Price of Cards</h1>
          <input type="range" />
        </div>
        <div className="reset">
          <button type="button">Reset</button>
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

Filters.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};
export default Filters;
