import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import "../styles/nav.css";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
function NavBar() {
  const [menu, setMenu] = useState("all");
  const { cartItems, all_product } = useContext(ShopContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    all_product.forEach((product) => {
      if (cartItems[product.id] !== 0) {
        newTotal += cartItems[product.id];
      }
    });
    setCount(newTotal);
  }, [cartItems, all_product]);
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img src={logo} alt="e-commerce logo" />
          <p className="shopper">SHOPPER</p>
        </div>
        <div className="nav-bar">
          <ul>
            <li
              onClick={() => {
                setMenu("all");
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
                All{" "}
              </Link>
              {menu === "all" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("mens");
              }}
            >
              <Link
                to="men"
                style={{ textDecoration: "none", color: "#626262" }}
              >
                Men{" "}
              </Link>{" "}
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("women");
              }}
            >
              <Link
                to="women"
                style={{ textDecoration: "none", color: "#626262" }}
              >
                Women
              </Link>{" "}
              {menu === "women" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link
                to="kid"
                style={{ textDecoration: "none", color: "#626262" }}
              >
                Kids
              </Link>{" "}
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
          <Link to="login" style={{ textDecoration: "none", color: "#626262" }}>
            <button>Login</button>
          </Link>
          <Link to="cart">
            <img src={cart_icon} alt="cart icon" />
          </Link>

          <div className="cart-counter">{count}</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
