import "../styles/news.css";
function NewsLetter() {
  return (
    <div className="news">
      <div className="letter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div className="address">
          <input type="email" placeholder="Your email id" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
