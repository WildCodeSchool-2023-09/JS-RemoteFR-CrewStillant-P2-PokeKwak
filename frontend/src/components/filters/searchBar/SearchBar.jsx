import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./searchBar.module.css";

function SearchBar({ setFilteredCards, cards }) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setFilteredCards(
      cards.filter((card) =>
        card.name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
    );
  };
  return (
    <div>
      <h1>Recherche :</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default SearchBar;
