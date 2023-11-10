import PropTypes from "prop-types";
import styles from "./typesFilters.module.css";

function TypesFilters({ setFilteredCards, filteredCards }) {
  const handleChange = (e) => {
    setFilteredCards(
      filteredCards.filter((c) => c.types[0] === e.target.value)
    );
  };
  return (
    <div>
      <h1>Types :</h1>
      <div className={styles.types}>
        <select name="types" id="types" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Fire">Feu</option>
          <option value="Metal">Acier</option>
          <option value="Grass">Plante</option>
          <option value="Lightning">Electrique</option>
          <option value="water">Eau</option>
          <option value="Psychic">Psy</option>
          <option value="Figthting">Combat</option>
          <option value="Darkness">Tenebre</option>
          <option value="Dragon">Dragon</option>
          <option value="Fairy">Fee</option>
          <option value="Colorless">Normal</option>
        </select>
      </div>
    </div>
  );
}
TypesFilters.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default TypesFilters;
