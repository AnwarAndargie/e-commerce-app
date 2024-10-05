import logo from "../Assets/Frontend_Assets/logo.png";
import whatsapp_icon from "../Assets/Frontend_Assets/whatsapp_icon.png";
import instagram_icon from "../Assets/Frontend_Assets/instagram_icon.png";
import pintester_icon from "../Assets/Frontend_Assets/pintester_icon.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="wrap">
      <div className="footer">
        <div className="shooper">
          <img src={logo} alt="a logo icon" />
          <h1>SHOPPER</h1>
        </div>
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="icons">
          <img src={instagram_icon} alt="intagram icon" />
          <img src={pintester_icon} alt="pinterest icon" />
          <img src={whatsapp_icon} alt="whatsapp icon" />
        </div>
      </div>
      <p id="wrap">
        <hr />
        copyright@2024-All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
