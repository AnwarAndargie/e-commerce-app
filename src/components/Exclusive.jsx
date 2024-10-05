import exclusive_img from "../Assets/Frontend_Assets/exclusive_image.png";
import "../styles/exclusive.css";
function Exclusive() {
  return (
    <div className="exclusive">
      <div className="box">
        <div className="description">
          <h1>
            Exclusive <br />
            Offers For You
          </h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check now</button>
        </div>

        <img src={exclusive_img} alt=" a standing girl" />
      </div>
    </div>
  );
}

export default Exclusive;
