import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./shopList.module.css";
import { useBasket } from "../../context/BasketContext";
import basketAdd from "../../assets/basketAdd.png";

function ShopList() {
  const {
    basketCount,
    cardItems,
    setBasketCount,
    setPrices,
    setCardItems,
    prices,
  } = useBasket();
  const roundedPrices = Math.round(prices * 100) / 100;

  const updateBasket = (addBasketCount) => {
    setCardItems(addBasketCount);

    const updatedBasket = addBasketCount.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setBasketCount(updatedBasket);

    const updatedPrices = addBasketCount.reduce(
      (total, item) => total + item.quantity * item.priceItem,
      0
    );
    setPrices(updatedPrices);
  };

  const handleChange = (itemId, quantityChange) => {
    const updatedCardItems = cardItems
      .map((item) =>
        item.idItem === itemId
          ? { ...item, quantity: Math.max(0, item.quantity + quantityChange) }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateBasket(updatedCardItems);
  };

  useEffect(() => {
    localStorage.setItem("saveBasket", JSON.stringify(cardItems));

    const updateBasketAdd = cardItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setBasketCount(updateBasketAdd);

    const updatedPricesAdd = cardItems.reduce(
      (total, item) => total + item.quantity * item.priceItem,
      0
    );
    setPrices(updatedPricesAdd);
  }, [cardItems]);

  return (
    <>
      <h2 className={styles.titleShop}>Votre Panier</h2>
      <div className={styles.shopList}>
        {cardItems.length === 0 ? (
          <div className={styles.basketCount}>
            <img src={basketAdd} alt="basketAdd" />
            <p className={styles.basketAdd}>Le panier est vide ...</p>
          </div>
        ) : (
          <>
            {cardItems.map((item) => (
              <div key={item.idItem} className={styles.cartItems}>
                <div className={styles.cartItems_img}>
                  <img
                    src={item.image}
                    alt={item.nameItem}
                    className={styles.basketAdd}
                  />
                  <NavLink to={`/search/${item.idItem}`}>
                    {item.nameItem}
                  </NavLink>
                </div>
                <div className={styles.cartItems_info}>
                  <div className={styles.buttonsItems}>
                    <button
                      type="button"
                      onClick={() => handleChange(item.idItem, 1)}
                      className={styles.buttonBasket}
                    >
                      +
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleChange(item.idItem, -1)}
                      className={styles.buttonBasket}
                    >
                      -
                    </button>
                  </div>
                  <div className={styles.priceItems}>
                    <div className={styles.priceItems}>
                      <span>
                        {Math.round(item.quantity * item.priceItem * 100) / 100}
                        €
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.textBasket}>
              <p className={styles.quantity}>Quantité totale : {basketCount}</p>
              <p className={styles.prices}>Prix total : {roundedPrices} €</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ShopList;
