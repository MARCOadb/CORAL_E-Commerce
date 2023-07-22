import styles from "./style.module.scss";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import StarSvg from "../../assets/icon/StarSvg";
import DefaultBtn from "../defaultBtn";
import { useState } from "react";
import { checkWishlist } from "../../services/checkWishlist";
import { useEffect } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";
import { wishlistProduct } from "../../services/wishlistProduct";

const Product = ({ id, image, name, desc, price, largura, altura, button, label, ratings, discount, oldprice }) => {
  const { desktop, phone } = useBreakpoint();
  const [isWishlisted, setIsWishlisted] = useState(null);

  useEffect(() => {
    setIsWishlisted(checkWishlist(id));
  }, [isWishlisted]);

  const handleSvgOnClick = () => {
    wishlistProduct(id);
    setIsWishlisted(true);
  };

  return (
    <div className={styles.product}>
      <img src={image} width={largura} height={altura} alt={name} />
      <div className={styles.detailContainer}>
        <div className={desktop ? `${styles.textContainer}` : `${styles.textContainer} ${styles.mobileText} `}>
          <span className={`text-high-emphasis ${desktop ? "body-medium" : "label-small "}`}>{name}</span>
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
          <span className={`text-low-emphasis ${desktop ? "label-large" : "label-medium"}`}>{desc}</span>
          <div className={styles.detailsText}>
            <span className={`text-high-emphasis ${desktop ? "body-medium" : "label-small "}`}>${price}</span>
            {oldprice && <span className={`text-low-emphasis strike ${desktop ? "label-large" : "extra-small-label"}`}>${oldprice}</span>}
            {discount && (
              <span className={`${desktop ? "body-medium" : "extra-small-label"}`} style={{ color: "#E21D1D" }}>
                {discount}% OFF
              </span>
            )}
          </div>
        </div>
        {label && (
          <div className={desktop ? `${styles.svgContainer}` : `${styles.mobileSvg} `}>
            <WishlistSvg
              onClick={handleSvgOnClick}
              width={phone && "20"}
              height={phone && "20"}
              viewBox={phone && "0 0 28 28"}
              fill={isWishlisted && "red"}
              stroke={isWishlisted ? "red" : "#13101E"}
            />
          </div>
        )}
      </div>
      {button && <DefaultBtn />}
    </div>
  );
};
export default Product;
