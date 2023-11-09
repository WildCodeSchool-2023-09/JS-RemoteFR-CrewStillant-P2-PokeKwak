import React from "react";
import styles from "./shopList.module.css";
import { useBasket } from "../../context/BasketContext";

function ShopList() {
  const { prices, basketCount, cardItems } = useBasket();

  const roundedPrices = Math.round(prices * 100) / 100;

  return (
    <>
      <h2 className={styles.titleShop}>Votre Panier</h2>
      <div className={styles.shopList}>
        {cardItems.map((item) => (
          <div key={item.id} className={styles.cartItems}>
            <div className={styles.cartItems_img}>
              <img src={item.image} alt={item.nameItem} />
              <p>{item.nameItem}</p>
            </div>
            <div className={styles.cartItems_info}>
              <div className={styles.buttonsItems}>
                <button type="button"> + </button>
                <span> &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;</span>
                <button type="button"> - </button>&nbsp;&nbsp;
              </div>
              <div className={styles.priceItems}>
                <span>{item.priceItem}€</span>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.textBasket}>
          <p className={styles.quantity}>Quantité totale : {basketCount}</p>
          <p className={styles.prices}>Prix total : {roundedPrices} €</p>
        </div>
      </div>
    </>
  );
}

export default ShopList;
