import PropTypes from "prop-types";
import styles from "./searchBar.module.css";

function SearchBar({ setSearchValue }) {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
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
  setSearchValue: PropTypes.func.isRequired,
};
export default SearchBar;
