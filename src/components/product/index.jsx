import styles from "./style.module.scss";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import StarSvg from "../../assets/icon/StarSvg";
import DefaultBtn from "../defaultBtn";
import { useContext, useState } from "react";
import { checkWishlist } from "../../services/checkWishlist";
import { useEffect } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";
import { wishlistProduct } from "../../services/wishlistProduct";
import BagSvg from "../../assets/icon/Bagsvg";
import { addBagProduct } from "../../services/addBagProduct";
import { BagContext } from "../../contexts/BagContext";

const btnIcon = <BagSvg stroke="#1B4B66" />;

/*PROPS
  {
    largura: number;
    altura: number;
    button?: Boolean;
    label?: Boolean;
    ratings?:Boolean;
    discount?:Boolean;
    oldprice?:Boolean;
    sort?:Boolean;
  }
*/

const Product = ({ data, largura, altura, button, label, ratings, discount, oldprice, sort, productConfig }) => {
  const { update } = useContext(BagContext);
  const { desktop, phone } = useBreakpoint();
  const [isWishlisted, setIsWishlisted] = useState(null);

  useEffect(() => {
    setIsWishlisted(checkWishlist(data.id));
  }, [isWishlisted]);

  const handleSvgOnClick = () => {
    // TODO Sujeito a mudança conforme uso da firebase
    wishlistProduct(data.id);
    setIsWishlisted(true);
  };
  const handleBtnOnClick = () => {
    // TODO Sujeito a mudança conforme uso da firebase
    addBagProduct(data.id);
    update();
  };

  return (
    <div className={sort ? `${styles.product} ${styles.productSort}` : styles.product}>
      <img src={data.image} style={altura && largura ? { width: `${largura}px`, height: `${altura}px` } : { width: "100%", height: "100%" }} alt={data.name} />
      <div className={styles.detailContainer} style={sort ? { flexDirection: "column", justifyContent: "space-between" } : {}}>
        <div className={desktop ? `${styles.textContainer}` : `${styles.textContainer} ${styles.mobileText} ${sort && label && styles.sortText}`}>
          <span className={`text-high-emphasis ${desktop ? "body-medium" : "label-small "}`}>{data.name}</span>
          {!ratings ||
            (label && desktop && (
              <div className={styles.ratingsContainer}>
                <div style={{ display: "flex" }}>
                  <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                  <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                  <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                  <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                  <StarSvg />
                </div>
                <span className="text-primary title-medium ">42 Ratings</span>
              </div>
            ))}
          <span className={`text-low-emphasis ${desktop ? "label-large" : "label-medium"}`}>{data.description}</span>
          <div className={styles.detailsText}>
            <span className={`text-high-emphasis ${desktop ? "body-medium" : "label-small "}`}>${data.price}</span>
            {(oldprice || productConfig?.oldprice) && (
              <span className={`text-low-emphasis strike ${desktop ? "label-large" : "extra-small-label"}`}>${oldprice ? oldprice : productConfig?.oldprice}</span>
            )}
            {(discount || productConfig?.discount) && (
              <span className={`${desktop ? "body-medium" : "extra-small-label"}`} style={{ color: "#E21D1D" }}>
                {discount ? discount : productConfig?.discount}% OFF
              </span>
            )}
          </div>
        </div>
        {button && sort && (
          <DefaultBtn onClick={handleBtnOnClick} outlined={true} id={styles.productBtn}>
            Add to bag
          </DefaultBtn>
        )}
        {(label || productConfig?.label) && !sort && (
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
      {(button || productConfig?.butto) && !sort && (
        <DefaultBtn onClick={handleBtnOnClick} outlined={true} icon={btnIcon} id={styles.productBtn}>
          Add to bag
        </DefaultBtn>
      )}
    </div>
  );
};
export default Product;
