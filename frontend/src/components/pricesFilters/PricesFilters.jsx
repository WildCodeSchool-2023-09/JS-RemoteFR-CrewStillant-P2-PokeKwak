import PropTypes from "prop-types";
import styles from "./pricesFilters.module.css";

function PricesFilters({ setFilteredCards, filteredCards }) {
  const handleChange = (e) => {
    setFilteredCards(filteredCards.filter((c) => c.prices === e.target.value));
  };
  const pricesValue = handleChange.prices;
  return (
    <div>
      <h1>Prix :</h1>
      <div className={styles.types}>
        <input
          type="range"
          id="prices"
          name="prices"
          min="0"
          value={pricesValue}
          max="300"
          step="5"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
PricesFilters.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default PricesFilters;
