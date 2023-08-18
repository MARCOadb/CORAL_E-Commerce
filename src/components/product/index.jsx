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
  const [pathCheck, setPathCheck] = useState("home");
  const [productOpen, setProductOpen] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(null);

  const [averageRating, setAverageRating] = useState();
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
      getCategoryById(data.categoryId).then((category) => {
        navigate(`/${category}/${itemId}`, {
          state: {
            path: pathCheck,
            category,
            itemId,
            productImage,
          },
        });
      });
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
  }, [location.pathname]);

  const [reviewStars, setReviewStars] = useState([]);

  useEffect(() => {
    function getAverageRating() {
      let reviewStarsList = [];
      data.reviews.forEach((review) => {
        reviewStarsList.push(review.reviewStars);
      });
      setReviewStars(reviewStarsList);
    }
    getAverageRating();
  }, [data]);

  useEffect(() => {
    let sum = 0;
    if (reviewStars.length < 1) {
      setAverageRating("0.0");
    } else {
      for (let i = 0; i < reviewStars.length; i++) {
        sum += reviewStars[i];
      }
      const media = Math.round((sum / reviewStars.length) * 2) / 2;
      setAverageRating(media % 1 === 0 ? `${media}.0` : media);
    }
  }, [reviewStars, data.review]);

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
                    <StarSvg fill={`${averageRating >= 1 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${averageRating >= 1 ? "#FF8C4B" : "#f1f1f1"}`} />
                    <StarSvg fill={`${averageRating >= 2 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${averageRating >= 2 ? "#FF8C4B" : "#f1f1f1"}`} />
                    <StarSvg fill={`${averageRating >= 3 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${averageRating >= 3 ? "#FF8C4B" : "#f1f1f1"}`} />
                    <StarSvg fill={`${averageRating >= 4 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${averageRating >= 4 ? "#FF8C4B" : "#f1f1f1"}`} />
                    <StarSvg fill={`${averageRating >= 5 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${averageRating >= 5 ? "#FF8C4B" : "#f1f1f1"}`} />
                  </div>
                  <span className="text-primary title-medium ">{data.reviews.length} Ratings</span>
                </div>
              ))}
            <span className={`text-low-emphasis ${desktop ? "label-large" : "label-medium"}`}>{data.description}</span>
            <div className={styles.detailsText}>
              <span className={`text-high-emphasis ${desktop ? "body-medium" : "label-small "}`}>${parseInt(data.price).toFixed(2)}</span>
              {(oldprice || productConfig?.oldprice) && (
                <span className={`text-low-emphasis strike ${desktop ? "label-large" : "extra-small-label"}`}>${oldprice ? oldprice.toFixed(2) : productConfig?.oldprice.toFixed(2)}</span>
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
