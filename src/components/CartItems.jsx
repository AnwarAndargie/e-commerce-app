import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import cart_cross_icon from "../Assets/Frontend_Assets/cart_cross_icon.png";
import "../styles/cart.css";
function CartItems() {
  const { cartItems, removeFromCart, all_product } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="products">
        <div className="head">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((product) => {
          if (cartItems[product.id] !== 0) {
            const quantity = cartItems[product.id];

            return (
              <>
                <div className="chosen-products">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />

                  <p>{product.name}</p>
                  <p>${product.new_price}</p>
                  <p>{quantity}</p>
                  <p>${product.new_price * quantity}</p>
                  <div
                    className="remove"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    <img className="cart-icon" src={cart_cross_icon} alt="" />
                  </div>
                </div>
                <hr />
              </>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
}

export default CartItems;
