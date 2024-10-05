import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "../styles/product.css";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <div className="product-display-left">
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-display-center">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <img src={star_icon} alt="start icon" />
        <img src={star_icon} alt="start icon" />
        <img src={star_icon} alt="start icon" />
        <img src={star_icon} alt="start icon" />
        <img src={star_dull_icon} alt="star dull icon" />
        <div className="price">
          <p>${product.new_price}</p>
          <p>${product.old_price}</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          obcaecati explicabo tenetur perferendis quis,
          <br /> maxime laboriosam quasi voluptatibus.
        </p>

        <div className="size">
          <p>Select Size</p>
          <div className="size-select">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
