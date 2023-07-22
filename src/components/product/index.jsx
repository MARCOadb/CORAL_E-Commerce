import styles from "./style.module.scss";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import StarSvg from "../../assets/icon/StarSvg";
import DefaultBtn from "../defaultBtn";
import { useState } from "react";
import { checkWishlist } from "../../services/checkWishlist";
import { useEffect } from "react";

const Product = ({ id, image, name, desc, price, largura, altura, button, label, ratings, discount, oldprice }) => {
  const [isWishlisted, setIsWishlisted] = useState(null);
  useEffect(() => {
    setIsWishlisted(checkWishlist(id));
  }, []);
  return (
    <div className={styles.product}>
      <img src={image} width={largura} height={altura} alt={name} />
      <div className={styles.detailContainer}>
        <div className={altura >= 286 ? `${styles.textContainer}` : `${styles.textContainer} ${styles.mobileText} `}>
          <span className={`text-high-emphasis ${altura >= 286 ? "body-medium" : "label-small "}`}>{name}</span>
          {ratings && (
            <div className={styles.ratingsContainer}>
              <div>
                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                <StarSvg />
              </div>
              <span className="text-primary title-medium ">42 Ratings</span>
            </div>
          )}
          <span className={`text-low-emphasis ${altura >= 286 ? "label-large" : "label-medium"}`}>{desc}</span>
          <div className={styles.detailsText}>
            <span className={`text-high-emphasis ${altura >= 286 ? "body-medium" : "label-small "}`}>${price}</span>
            {oldprice && <span className={`text-low-emphasis strike ${altura >= 286 ? "label-large" : "extra-small-label"}`}>${oldprice}</span>}
            {discount && (
              <span className={`${altura >= 286 ? "body-medium" : "extra-small-label"}`} style={{ color: "#E21D1D" }}>
                {discount}% OFF
              </span>
            )}
          </div>
        </div>
        {label && (
          <div className={altura >= 286 ? `${styles.svgContainer}` : `${styles.mobileSvg} `}>
            <WishlistSvg width={largura <= 136 && "20"} height={altura <= 138 && "20"} viewBox={altura <= 138 && "0 0 28 28"} fill={isWishlisted && "red"} stroke={isWishlisted ? "red" : "#13101E"} />
          </div>
        )}
      </div>
      {button && <DefaultBtn />}
    </div>
  );
};
export default Product;
