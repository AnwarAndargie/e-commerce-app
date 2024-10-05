import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import "../styles/cartTotal.css";

function CartTotal() {
  const { cartItems, all_product } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    all_product.forEach((product) => {
      if (cartItems[product.id] !== 0) {
        newTotal += product.new_price * cartItems[product.id];
      }
    });
    setTotal(newTotal);
  }, [cartItems, all_product]);

  return (
    <div className="cart-total">
      <h1>Cart Totals</h1>
      <div className="subtotal">
        <p>Subtotal</p>
        <p>{total}</p>
      </div>
      <hr />

      <div className="shipping">
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>
      <hr />
      <div className="total">
        <p>Total</p>
        <p>{total}</p>
      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default CartTotal;
