import { createContext, useState } from "react";
import all_product from "../Assets/Frontend_Assets/all_product";
export const ShopContext = createContext(null);
const cart = {};
function setDefaultCart() {
  for (let i = 0; i <= all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
}
function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(setDefaultCart());

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }
  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }
  const contextValue = { all_product, cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
