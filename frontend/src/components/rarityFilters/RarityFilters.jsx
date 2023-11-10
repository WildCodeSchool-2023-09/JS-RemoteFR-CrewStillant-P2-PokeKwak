import PropTypes from "prop-types";
import styles from "./rarityFilters.module.css";

function RarityFilters({ setFilteredCards, filteredCards }) {
  const handleChange = (e) => {
    setFilteredCards(filteredCards.filter((c) => c.rarity === e.target.value));
  };
  return (
    <div>
      <h1>Rareté :</h1>
      <div className={styles.rarity}>
        <select name="rarity" id="rarity" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Common">Commune</option>
          <option value="Promo">Promo</option>
          <option value="Rare">Rare</option>
          <option value="Uncommon">Peu commune</option>
        </select>
      </div>
    </div>
  );
}

export default RarityFilters;
RarityFilters.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
