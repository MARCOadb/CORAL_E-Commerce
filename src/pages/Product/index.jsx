import Header from "../../components/header";
import Footer from "../../components/footer";
import useBreakpoint from "../../hooks/useBreakPoint";
import { useContext, useEffect, useRef, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebaseConnection";
import Ratings from "../../components/Ratings";

import productPhoto from "../../assets/pics/Product/product-image.png"; //
import pic2 from "../../assets/pics/Home/bolsa-remus.png"; //
import pic3 from "../../assets/pics/Home/bolsa-boujee.png"; //fotos aleatórias simulando fotos do produto
import pic4 from "../../assets/pics/Home/glasses.png"; //

import SmallMinus from "../../assets/icon/SmallMinus";
import SmallPlus from "../../assets/icon/SmallPlus";
import StarSvg from "../../assets/icon/StarSvg";
import { BagContext } from "../../contexts/BagContext";
import { addBagProduct } from "../../services/addBagProduct";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import { setProductQnt } from "../../services/setProductQnt";
import DefaultBtn from "../../components/defaultBtn";
import BagSvg from "../../assets/icon/Bagsvg";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightSvg from "../../assets/icon/ChevronRightSvg";
import { toast } from "react-toastify";

import styles from "./style.module.scss";
import MobileLayout from "../../layouts/mobileLayout";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import ArrowPointerSvg from "../../assets/icon/ArrowPointerSvg";

import Product from "../../components/product";
import getProductById from "../../services/getProductById";
import { useLocation } from "react-router-dom";
import Breadcrump from "../../components/breadcrumpDesktop";
import { AuthContext } from "../../contexts/AuthContext";
import { setWishlistProduct } from "../../services/setWishlistProduct";

export default function ProductPage({ itemId, data, open, setOpen }) {
  const { allProducts, update, userWishlist } = useContext(BagContext);
  const { user } = useContext(AuthContext);
  const { phone, desktop } = useBreakpoint();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const [activePic, setActivePic] = useState(0);
  const [activeTab, setActiveTab] = useState(1);

  const [productPic, setProductPic] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState();

  const dropdownRefHeight = useRef();

  const [averageRatingsNumber, setAverageRatingsNumber] = useState(0);
  const [reviewsNumber, setReviewsNumber] = useState(0);

  const [categoryProducts, setCategoryProducts] = useState();

  useEffect(() => {
    setDropdownOpen(true);
  }, []);

  useEffect(() => {
    if (phone) {
      setDropdownHeight(`${dropdownRefHeight.current.scrollHeight}px`);
    }
  }, [phone, desktop, dropdownOpen]);

  function handleChangeTabs(index) {
    setActiveTab(index);
  }

  function handleNextImg() {
    if (activePic === productImages.length - 1) {
      setActivePic(0);
    } else {
      setActivePic(activePic + 1);
    }
  }

  function handlePrevImg() {
    if (activePic === 0) {
      setActivePic(productImages.length - 1);
    } else {
      setActivePic(activePic - 1);
    }
  }

  function handleChangeImg(index) {
    setActivePic(index);
  }

  function toggleDropdownState() {
    setDropdownOpen(!dropdownOpen);
  }
  const [isWishlisted, setIsWishlisted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [stepperQnt, setStepperQnt] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    if (desktop) {
      setLoading(true);
      getProductById(location.state.itemId)
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    }
  }, [location.pathname]);

  const setQnt = (e) => {
    e.preventDefault();
    setStepperQnt(parseInt(e.target.value));
  };
  const plusQnt = () => {
    setStepperQnt(stepperQnt + 1);
  };
  const minusQnt = () => {
    setStepperQnt(stepperQnt - 1);
  };
  const addToBag = () => {
    if (!!user) {
      if (desktop) {
        setLoading(true);
        setProductQnt(user.uid, location.state.itemId, stepperQnt, true)
          .then(() => update({ products: false }))
          .finally(() => setLoading(false));
      } else {
        setLoading(true);
        addBagProduct(user.uid, itemId)
          .then(() => update({ products: false }))
          .finally(() => setLoading(false));
      }
      update({ products: false });
      toast.success("Item Added to Bag");
    } else toast.error("You must be authenticated to do this");
  };
  const addToWishlist = () => {
    if (!!user) {
      setWishlistProduct(user.uid, itemId ? itemId : location.state.itemId).finally(() => setLoading(false));
      if (isWishlisted === true) setIsWishlisted(false);
      else setIsWishlisted(true);
      update({ products: false });
    } else toast.error("You must be authenticated to do this");
  };

  const productImages = [productPic];

  useEffect(() => {
    if (!!userWishlist) {
      setIsWishlisted(userWishlist.find((item) => item.uid === location.state?.itemId));
    }
  }, [userWishlist]);

  const storageRef = ref(storage, `productsImg/${desktop ? product?.name : data?.name}`);

  useEffect(() => {
    if (data?.name || product?.name) {
      const getProductImage = async () => {
        await getDownloadURL(storageRef).then((response) => {
          setProductPic(response);
        });
      };
      getProductImage();
    }
  }, [product]);

  const [averageRatingsMobile, setAverageRatingsMobile] = useState();
  const [reviewStars, setReviewStars] = useState([]);

  useEffect(() => {
    function getAverageRating() {
      let reviewStarsList = [];
      data.reviews.forEach((review) => {
        reviewStarsList.push(review.reviewStars);
      });
      setReviewStars(reviewStarsList);
    }
    if (phone) {
      getAverageRating();
    }
  }, [data]);

  useEffect(() => {
    let sum = 0;
    if (reviewStars.length < 1) {
      setAverageRatingsMobile("0.0");
    } else {
      for (let i = 0; i < reviewStars.length; i++) {
        sum += reviewStars[i];
      }
      const media = Math.round((sum / reviewStars.length) * 2) / 2;
      setAverageRatingsMobile(media % 1 === 0 ? `${media}.0` : media);
    }
  }, [reviewStars, data?.review]);

  useEffect(() => {
    if (desktop) {
      const result = allProducts?.filter((prod) => prod?.data?.categoryId === product?.categoryId);
      setCategoryProducts(result);
      setLoading(false);
    } else {
      const result = allProducts?.filter((prod) => prod?.data?.categoryId === data?.categoryId);
      setCategoryProducts(result);
      setLoading(false);
    }
  }, [allProducts, product, data, loading]);

  return (
    <>
      {phone && open ? (
        <MobileLayout
          icon="arrow"
          iconAngle={90}
          iconStroke="#13101E"
          footerPrefix={<div style={{ display: "flex", alignItems: "center" }}>{<WishlistSvg fill={isWishlisted && "red"} stroke={isWishlisted && "red"} onClick={addToWishlist} width={44} />}</div>}
          buttons={[{ text: "Add to Bag", outlined: false, onClick: addToBag, btnIcon: <BagSvg stroke="#fff" /> }]}
          open={open}
          setOpen={setOpen}
        >
          <div className={styles.content}>
            <div className={styles.product}>
              <div className={styles.productImages}>
                <div className={styles.carousel}>
                  {productImages.map((image) => (
                    <div>
                      <img src={image} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.productContent}>
                <h1 className="text-high-emphasis body-medium" style={{ marginBottom: "4px" }}>
                  {data?.name}
                </h1>
                <span className="text-low-emphasis title-medium">{data?.description}</span>

                <div className={styles.productPrice}>
                  <h1 className="text-high-emphasis display-small">${data?.price % 1 === 0 ? `${data?.price}.00` : data?.price}</h1>
                  <h2 className="text-light title-medium strike">${data?.price % 1 === 0 ? `${data?.price * 2}.00` : data?.price}</h2>
                  <h3 className="text-vibrant title-medium">50%OFF</h3>
                </div>

                <div className={styles.ratingsContainer}>
                  <div className={styles.mobRatingsStar}>
                    <span>{averageRatingsMobile}</span>
                    <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={20} height={20} />
                  </div>

                  <div className={styles.mobRatingsAmount}>
                    <span className="text-high-emphasis title-regular">Average Rating</span>
                    <span className="text-low-emphasis title-medium">{data.reviews.length} Reviews</span>
                  </div>
                </div>

                <div className={styles.cupomContainer}>
                  <div className={styles.cupons}>
                    <div className={styles.cupom}>
                      <div className={styles.cupomDescription}>
                        <span className="text-high-emphasis link ">Get upto 30% Off on order value above $100</span>
                        <span className="text-primary extra-small-label">Terms & Conditions</span>
                      </div>
                      <div className={styles.cupomCode}>
                        <span className="text-low-emphasis extra-small-label">Use Code</span>
                        <span className="text-high-emphasis link">ORDER100</span>
                      </div>
                    </div>

                    <div className={styles.cupom}>
                      <div className={styles.cupomDescription}>
                        <span className="text-high-emphasis link ">Get upto 30% Off on order value above $100</span>
                        <span className="text-primary extra-small-label">Terms & Conditions</span>
                      </div>
                      <div className={styles.cupomCode}>
                        <span className="text-low-emphasis extra-small-label">Use Code</span>
                        <span className="text-high-emphasis link">ORDER100</span>
                      </div>
                    </div>

                    <div className={styles.cupom}>
                      <div className={styles.cupomDescription}>
                        <span className="text-high-emphasis link ">Get upto 30% Off on order value above $100</span>
                        <span className="text-primary extra-small-label">Terms & Conditions</span>
                      </div>
                      <div className={styles.cupomCode}>
                        <span className="text-low-emphasis extra-small-label">Use Code</span>
                        <span className="text-high-emphasis link">ORDER100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.delivery}>
                  <div className={styles.deliveryTitle}>
                    <span className="text-high-emphasis title-regular">Delivery Details</span>
                    <span className="text-low-emphasis title-medium">Check estimated delivery date/pickup option.</span>
                  </div>
                  <input className={`${styles.deliveryPincode} title-medium`} type="text" placeholder="Apply Valid Pincode" />
                  <span className={`${styles.checkBtn} text-primary title-regular`}>CHECK</span>
                </div>
              </div>
            </div>
            <div className={styles.seperator}></div>

            <div className={styles.descriptionDropdown}>
              <span>{dropdownOpen}</span>
              <div className={styles.dropdownTitle}>
                <h1 className="type-high-emphasis title-regular">Product Description</h1>
                <ArrowSvg onClick={toggleDropdownState} x={dropdownOpen && 180} />
              </div>
              <div className={`${styles.dropdownContent} ${dropdownOpen && styles.dropdownOpen}`} ref={dropdownRefHeight} style={{ height: dropdownOpen ? `${dropdownHeight}` : "0px" }}>
                <p className="text-low-emphasis title-medium">{data?.description}</p>
              </div>
            </div>

            <div className={styles.seperator} style={dropdownOpen ? { marginTop: "16px", transition: "all 0.3s" } : { marginTop: "0", transition: "all 0.3s 0.3s" }}></div>

            <div className={styles.ratingsTitle}>
              <h1 className="type-high-emphasis title-regular">Ratings and Reviews</h1>
              <ArrowSvg onClick={() => setReviewModalOpen(true)} x={270} />
            </div>

            {reviewModalOpen && <Ratings setRatingsOpen={setReviewModalOpen} itemId={itemId} setReviewsNumber={setReviewsNumber} product={data} setAverageRatingsNumber={setAverageRatingsNumber} />}

            <div className={styles.seperator}></div>

            <div className={styles.inviteAndEarn}>
              <div className={styles.inviteContent}>
                <h1 className="type-high-emphasis title-regular">Invite Friends & Earn</h1>
                <span className="text-low-emphasis title-medium">Get upto 100 reward points for every friend you invite</span>
                <button className="text-primary title-regular">
                  Invite Now <ArrowPointerSvg />{" "}
                </button>
              </div>
              <div className={styles.orangeBox}></div>
            </div>

            <div className={styles.seperator}></div>

            <div className={styles.otherProducts}>
              <h1 className="type-high-emphasis title-regular">You Might Also Like</h1>
              <div className={styles.productsContainer}>
                {!loading && categoryProducts?.map((item) => item.uid != itemId && <Product largura={136} altura={136} data={item.data} label key={item.uid} itemId={item.uid} />)}
              </div>
            </div>
          </div>
        </MobileLayout>
      ) : (
        <>
          <Header />
          <div className={styles.content}>
            <div className={styles.breadCrump}>
              <Breadcrump />
            </div>
            <div className={styles.product}>
              <div className={styles.productImages}>
                <img src={productImages[activePic]} alt="Product Image" className={styles.imageBig} />
                <div className={styles.carouselContainer}>
                  <ChevronRightSvg rotate={180} stroke={"#171520"} onClick={handlePrevImg} />
                  <div className={styles.carousel}>
                    {productImages.map((image, index) => (
                      <img src={image} key={index} className={`${activePic === index && styles.activePicture}`} onClick={() => handleChangeImg(index)} />
                    ))}
                  </div>
                  <ChevronRightSvg stroke={"#171520"} onClick={handleNextImg} />
                </div>
              </div>
              <div className={styles.productContent}>
                <h1 className="text-dark display-medium">{product?.name}</h1>
                <span className="text-low-emphasis display-small">{product?.description}</span>

                <div className={styles.ratingsContainer}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <StarSvg fill={Math.floor(parseFloat(averageRatingsNumber)) >= 1 ? "#FF8C4B" : "#B6B6B6"} stroke={Math.floor(parseFloat(averageRatingsNumber)) >= 1 ? "#FF8C4B" : "#B6B6B6"} />
                    <StarSvg fill={Math.floor(parseFloat(averageRatingsNumber)) >= 2 ? "#FF8C4B" : "#B6B6B6"} stroke={Math.floor(parseFloat(averageRatingsNumber)) >= 2 ? "#FF8C4B" : "#B6B6B6"} />
                    <StarSvg fill={Math.floor(parseFloat(averageRatingsNumber)) >= 3 ? "#FF8C4B" : "#B6B6B6"} stroke={Math.floor(parseFloat(averageRatingsNumber)) >= 3 ? "#FF8C4B" : "#B6B6B6"} />
                    <StarSvg fill={Math.floor(parseFloat(averageRatingsNumber)) >= 4 ? "#FF8C4B" : "#B6B6B6"} stroke={Math.floor(parseFloat(averageRatingsNumber)) >= 4 ? "#FF8C4B" : "#B6B6B6"} />
                    <StarSvg fill={Math.floor(parseFloat(averageRatingsNumber)) === 5 ? "#FF8C4B" : "#B6B6B6"} stroke={Math.floor(parseFloat(averageRatingsNumber)) === 5 ? "#FF8C4B" : "#B6B6B6"} />
                  </div>
                  <span className="text-light title-medium ">({reviewsNumber}) Ratings</span>
                </div>

                <div className={styles.productPrice}>
                  <h1 className="text-high-emphasis display-large">${product?.price % 1 === 0 ? `${product?.price}.00` : product?.price}</h1>
                  <h2 className="text-light display-medium strike">${(product?.price * 2) % 1 === 0 ? `${product?.price * 2}.00` : product?.price * 2}</h2>
                  <h3 className="text-vibrant display-small">50% OFF</h3>
                </div>

                <span className={styles.seperator}></span>

                <div className={styles.delivery}>
                  <div className={styles.deliveryTitle}>
                    <span className="text-high-emphasis display-small">Delivery Details</span>
                    <span className="text-low-emphasis body-medium">Check estimated delivery date/pickup option.</span>
                  </div>
                  <input className={`${styles.deliveryPincode} body-medium`} type="text" placeholder="Apply Valid Pincode" />
                  <span className={`${styles.checkBtn} text-primary title-regular`}>CHECK</span>
                </div>

                <div className={styles.quantityContainer}>
                  <span className="text-dark display-small ">Quantity:</span>
                  <div className={styles.stepperContainer}>
                    <SmallMinus onClick={minusQnt} />
                    <input type="number" onChange={setQnt} value={stepperQnt}></input>
                    <SmallPlus onClick={plusQnt} />
                  </div>
                </div>

                <div className={styles.cupomContainer}>
                  <div className={styles.cupons}>
                    <div className={styles.cupom}>
                      <div className={styles.cupomDescription}>
                        <span className="text-high-emphasis body-medium ">Get upto 30% Off on order value above $100</span>
                        <span className="text-primary body-small">Terms & Conditions</span>
                      </div>
                      <div className={styles.cupomCode}>
                        <span className="text-low-emphasis body-small">Use Code</span>
                        <span className="text-high-emphasis body-medium">ORDER100</span>
                      </div>
                    </div>

                    <div className={styles.cupom}>
                      <div className={styles.cupomDescription}>
                        <span className="text-high-emphasis body-medium ">Get upto 30% Off on order value above $100</span>
                        <span className="text-primary body-small">Terms & Conditions</span>
                      </div>
                      <div className={styles.cupomCode}>
                        <span className="text-low-emphasis body-small">Use Code</span>
                        <span className="text-high-emphasis body-medium">ORDER100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.buttons}>
                  <DefaultBtn onClick={addToBag} icon={<BagSvg stroke={"#fff"} />} width={"328px"} height={"44px"}>
                    Add to bag
                  </DefaultBtn>
                  <DefaultBtn onClick={addToWishlist} icon={<WishlistSvg fill={isWishlisted && "red"} stroke={isWishlisted && "red"} />} outlined width={"240px"} height={"44px"}>
                    Add to wishlist
                  </DefaultBtn>
                </div>
              </div>
            </div>

            <div className={styles.productTabs}>
              <div className={styles.tabsTitle}>
                <div className={styles.tabsBar} style={activeTab === 3 ? { left: `${(activeTab - 1) * 199 + 20}px` } : { left: `${(activeTab - 1) * 199 + 16}px` }}></div>
                <span className={`${styles.tabs} ${activeTab === 1 && styles.tabsActive}`} onClick={() => handleChangeTabs(1)}>
                  Product Description
                </span>
                <span className={`${styles.tabs} ${activeTab === 2 && styles.tabsActive}`} onClick={() => handleChangeTabs(2)}>
                  Related Products
                </span>
                <span className={`${styles.tabs} ${activeTab === 3 && styles.tabsActive}`} onClick={() => handleChangeTabs(3)}>
                  Ratings and Reviews
                </span>
              </div>

              <div className={styles.tabsContainer}>
                <div className={`${styles.tabsContent} ${activeTab === 1 && styles.tabsContentActive}`}>
                  <p className="text-low-emphasis body-medium" style={{ width: "1134px" }}>
                    {product?.description}
                  </p>
                </div>

                <div className={`${styles.tabsContent} ${activeTab === 2 && styles.tabsContentActive}`}>
                  <div className={styles.otherProducts}>
                    <div className={styles.productsContainer}>
                      {!loading &&
                        categoryProducts?.map(
                          (item) => item.uid != location.state?.itemId && <Product largura={286} altura={286} data={item.data} label key={item.uid} itemId={item.uid} ratings={false} />
                        )}
                    </div>
                  </div>
                </div>

                <div className={`${styles.tabsContent} ${activeTab === 3 && styles.tabsContentActive}`}>
                  <Ratings product={product} itemId={location.state.itemId} setReviewsNumber={setReviewsNumber} setAverageRatingsNumber={setAverageRatingsNumber} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
