import PropTypes from "prop-types";
import styles from "./confirmModal.module.css";

function ConfirmModal({ typeButton, present }) {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        {typeButton ? (
          <div className={styles.modalContentFavorite}>
            {present ? (
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
  present: PropTypes.bool.isRequired,
};
