import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./card.module.css";

function Card({
  smallImage,
  name,
  id,
  largeImage,
  basketCount,
  setBasketCount,
  price,
}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      document.body.classList.remove("active-modal");
    } else {
      document.body.classList.add("active-modal");
    }
  };
  return (
    <>
      <div className={styles.card}>
        <button type="button" onClick={toggleModal}>
          <img src={smallImage} alt={name} className={styles.smallImg} />
        </button>
      </div>
      {modal && (
        <Modal
          toggleModal={toggleModal}
          name={name}
          id={id}
          largeImage={largeImage}
          basketCount={basketCount}
          setBasketCount={setBasketCount}
          price={price}
        />
      )}
    </>
  );
}

export default Card;

Card.propTypes = {
  smallImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  basketCount: PropTypes.number.isRequired,
  setBasketCount: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
