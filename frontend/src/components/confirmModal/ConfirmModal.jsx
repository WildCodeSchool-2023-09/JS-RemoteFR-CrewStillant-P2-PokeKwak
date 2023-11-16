import PropTypes from "prop-types";
import styles from "./confirmModal.module.css";

function ConfirmModal({ typeButton, isFavorite }) {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        {typeButton ? (
          <div className={styles.modalContentFavorite}>
            {isFavorite ? (
              <p>La carte est déjà dans ton Pokédeck !</p>
            ) : (
              <p>La carte a bien été ajouté à ton Pokédeck !</p>
            )}
          </div>
        ) : (
          <div className={styles.modalContentShop}>
            <p>La carte a bien été ajouté au panier !</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmModal;

ConfirmModal.propTypes = {
  typeButton: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool,
};

ConfirmModal.defaultProps = { isFavorite: false };
