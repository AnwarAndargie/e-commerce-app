import { Link } from "react-router-dom";
import pop_data from "../Assets/Frontend_Assets/data";
import "../styles/pop.css";
function Popular() {
  return (
    <div className="popular">
      <h1>
        POPULAR IN WOMEN <hr />
      </h1>
      <div className="pop-collection">
        {pop_data.map((product) => (
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
  );
}

export default Popular;
