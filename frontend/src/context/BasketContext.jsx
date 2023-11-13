import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const BasketContext = createContext();

export default function BasketContextProvider({ children }) {
  const [basketCount, setBasketCount] = useState(0);
  const [prices, setPrices] = useState(0);
  const [cardItems, setCardItems] = useState([]);
  const [favoriteCard, setFavoriteCard] = useState([]);
  const BasketContextValue = useMemo(
    () => ({
      basketCount,
      setBasketCount,
      setPrices,
      prices,
      cardItems,
      setCardItems,
      favoriteCard,
      setFavoriteCard,
    }),
    [
      basketCount,
      setBasketCount,
      setPrices,
      prices,
      cardItems,
      setCardItems,
      favoriteCard,
      setFavoriteCard,
    ]
  );

  return (
    <BasketContext.Provider value={BasketContextValue}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);

BasketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
