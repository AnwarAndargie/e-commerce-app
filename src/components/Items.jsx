import { Link } from "react-router-dom";

import "../styles/items.css";
function Items({ products }) {
  return (
    <>
      <div className="category">
        <div className="collections">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <p>{product.name}</p>
              <div className="price">
                <p>${product.new_price}</p>
                <p>${product.old_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Items;
