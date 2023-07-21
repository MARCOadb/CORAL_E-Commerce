import styles from "./style.module.scss";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import StarSvg from "../../assets/icon/StarSvg";
import DefaultBtn from "../defaultBtn";

const Product = ({ id, image, name, desc, price, largura, altura, button, label, ratings, discount, oldprice }) => {
  return (
    <div className={styles.product}>
      <img src={image} width={largura} height={altura} alt={name} />
      <div className={styles.detailContainer}>
        <div className={altura >= 286 ? `${styles.textContainer}` : `${styles.textContainer} ${styles.mobileText} `}>
          <span className={`text-high-emphasis ${altura >= 286 ? "body-medium" : "label-small "}`}>{name}</span>
          {ratings && (
            <div>
              <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
              <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
              <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
              <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
              <StarSvg />
              <span>42 ratings</span>
            </div>
          )}
          <span className={`text-low-emphasis ${altura >= 286 ? "label-large" : "label-medium"}`}>{desc}</span>
          <div className={styles.detailsText}>
            <span className={`text-high-emphasis ${altura >= 286 ? "body-medium" : "label-small "}`}>${price}</span>
            {oldprice && <span className={`text-low-emphasis strike ${altura >= 286 ? "label-large" : "label-medium"}`}>{oldprice}</span>}
            {discount && (
              <span className={`${altura >= 286 ? "body-medium" : "label-small "}`} style={{ color: "#E21D1D" }}>
                {discount}
              </span>
            )}
          </div>
        </div>
        {label && (
          <div className={altura >= 286 ? `${styles.svgContainer}` : `${styles.mobileSvg} `}>
            <WishlistSvg width={largura <= 136 && "20"} height={altura <= 138 && "20"} viewBox={altura <= 138 && "0 0 28 28"} stroke="#13101E" />
          </div>
        )}
      </div>
      {button && <DefaultBtn />}
    </div>
  );
};
export default Product;
