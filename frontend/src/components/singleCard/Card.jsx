import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./card.module.css";

function Card({ data, smallImage, name, id, largeImage, price }) {
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
          data={data}
          toggleModal={toggleModal}
          name={name}
          id={id}
          largeImage={largeImage}
          price={price}
        />
      )}
    </>
  );
}

export default Card;

Card.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
  smallImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
