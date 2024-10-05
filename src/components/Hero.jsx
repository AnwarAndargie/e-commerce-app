import hand_icon from "../Assets/Frontend_Assets/hand_icon.png";
import hero_image from "../Assets/Frontend_Assets/hero_image.png";
import arrow from "../Assets/Frontend_Assets/arrow.png";
import "../styles/hero.css";
function Hero() {
  return (
    <div className="shop">
      <div className="addvert">
        <p>NEW ARRIVALS ONLY </p>
        <h1>
          new
          <img src={hand_icon} alt="a raised hand" />
          <br />
          collections for everyone
        </h1>
        <button>
          Latest Collection <img src={arrow} alt=" a right arrow" />
        </button>
      </div>
      <div className="sample">
        <img src={hero_image} alt="a decorated sitting girl" />
      </div>
    </div>
  );
}

export default Hero;
