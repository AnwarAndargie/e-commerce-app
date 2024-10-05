import all_product from "../Assets/Frontend_Assets/all_product";
import banner_mens from "../Assets/Frontend_Assets/banner_mens.png";
import banner_women from "../Assets/Frontend_Assets/banner_women.png";
import banner_kids from "../Assets/Frontend_Assets/banner_kids.png";
import Items from "../components/Items";

import "../styles/shopcat.css";

function ShopCategory({ category }) {
  let banners = [
    {
      src: banner_mens,
      type: "men",
    },
    {
      src: banner_women,
      type: "women",
    },
    {
      src: banner_kids,
      type: "kid",
    },
  ];
  return (
    <>
      <div className="discount">
        {banners
          .filter((banner) => banner.type === category)
          .map((item) => (
            <img src={item.src} alt="discount for" />
          ))}
      </div>
      <Items
        products={all_product.filter(
          (product) => product.category === category
        )}
      />

    </>
  );
}

export default ShopCategory;
