import PropTypes from "prop-types";
import styles from "./setFilters.module.css";

function SetFilters({ setFilteredCards, filteredCards }) {
  const handleChange = (e) => {
    setFilteredCards(
      filteredCards.filter((c) => c.set.name === e.target.value)
    );
  };
  return (
    <div>
      <h1>Collection :</h1>
      <div className={styles.set}>
        <select name="set" id="set" onChange={handleChange}>
          <option value="All">All</option>
          <option value="base4">Base</option>
          <option value="hgss4">Or et Argent</option>
          <option value="xy5">X et Y</option>
          <option value="pl1">Platine</option>
          <option value="dp3">Platine</option>
        </select>
      </div>
    </div>
  );
}

export default SetFilters;
SetFilters.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
