import React from "react";
import ShopList from "../components/shopList/ShopList";
import { useBasket } from "../context/BasketContext";

function Shop() {
  const { basketCount, prices } = useBasket();
  return (
    <div>
      <ShopList basketCount={basketCount} prices={prices} />
    </div>
  );
}

export default Shop;
