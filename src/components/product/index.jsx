import styles from "./style.module.scss";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import StarSvg from "../../assets/icon/StarSvg";
import DefaultBtn from "../defaultBtn";
import { useContext, useState } from "react";
import { useEffect } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";
import { setWishlistProduct } from "../../services/setWishlistProduct";
import BagSvg from "../../assets/icon/Bagsvg";
import { addBagProduct } from "../../services/addBagProduct";
import { BagContext } from "../../contexts/BagContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import getCategoryByName from "../../services/getCategoryByName";
import getCategoryById from "../../services/getCategoryById";
import ProductPage from "../../pages/Product";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebaseConnection";

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

const Product = ({ data, itemId, largura, altura, button, label, ratings, discount, oldprice, sort, productConfig, rmvWishlist }) => {
  const { update, userWishlist } = useContext(BagContext);
  const { user } = useContext(AuthContext);
  const { desktop, phone } = useBreakpoint();

  const navigate = useNavigate();
  const location = useLocation();
  const [pathCheck, setPathCheck] = useState("/home");
  const [productOpen, setProductOpen] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(null);

  useEffect(() => {
    if (location.state?.path) setPathCheck(location.state?.path);
  }, []);

  const handleSvgOnClick = () => {
    if (!!user) {
      setWishlistProduct(user?.uid, itemId).then((data) => setIsWishlisted(data));
      update({ products: false });
    }
  };
  const handleBtnOnClick = () => {
    if (!!user) {
      addBagProduct(user?.uid, itemId);
      update({ products: false });
    }
  };

  const handleProductClick = () => {
    if (desktop) {
      getCategoryById(data.categoryId).then((category) =>
        navigate(`${category}/${itemId}`, {
          state: {
            path: pathCheck,
            category,
            itemId,
            productImage,
          },
        })
      );
    } else {
      update({ products: false });
      setProductOpen(true);
    }
  };

  const storageRef = ref(storage, `productsImg/${data.name}`);

  useEffect(() => {
    const getImages = async () => {
      await getDownloadURL(storageRef).then((response) => {
        setProductImage(response);
      });
    };
    getImages();
  }, []);
  return (
    <>
      {phone && productOpen && <ProductPage itemId={itemId} data={data} open={productOpen} setOpen={setProductOpen} />}
      <div className={sort ? `${styles.product} ${styles.productSort}` : styles.product}>
        <img onClick={handleProductClick} src={productImage} style={altura && largura ? { width: `${largura}px`, height: `${altura}px` } : { width: "100%", height: "100%" }} alt="" />
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
            <div style={{ display: "flex", gap: "5px", flexDirection: "column", width: "205px" }}>
              <DefaultBtn onClick={handleBtnOnClick} outlined={true} id={styles.productBtn}>
                Add to bag
              </DefaultBtn>
              {rmvWishlist && (
                <DefaultBtn onClick={handleSvgOnClick} outlined={true} id={styles.productBtn}>
                  Remove
                </DefaultBtn>
              )}
            </div>
          )}
          {(label || productConfig?.label) && !sort && (
            <div className={desktop ? `${styles.svgContainer}` : `${styles.mobileSvg} `}>
              {userWishlist && userWishlist.find((item) => item.uid === itemId) ? (
                <WishlistSvg onClick={handleSvgOnClick} width={phone && "20"} height={phone && "20"} viewBox={phone && "0 0 28 28"} stroke="red" fill="red" />
              ) : (
                <WishlistSvg onClick={handleSvgOnClick} width={phone && "20"} height={phone && "20"} viewBox={phone && "0 0 28 28"} stroke={"#13101E"} />
              )}
            </div>
          )}
        </div>
        {button && !sort && (
          <div className={styles.btnContainer}>
            <DefaultBtn onClick={handleBtnOnClick} outlined={true} id={styles.productBtn}>
              Add to bag
            </DefaultBtn>
            {rmvWishlist && (
              <DefaultBtn onClick={handleSvgOnClick} outlined={true} id={styles.productBtn}>
                Remove
              </DefaultBtn>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Product;
