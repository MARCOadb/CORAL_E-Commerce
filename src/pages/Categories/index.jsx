//COMPONENTS
import NavBarMobile from "../../components/navBarMobile";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductGrid from "../../components/productGrid";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";
import { useState, useEffect, useRef, useContext } from "react";

//IMAGES & ICONS
import hero from "../../assets/pics/Category/hero.png";
import PlusSvg from "../../assets/icon/PlusSvg";
import skincare from "../../assets/pics/Category/michela-ampolo-7tDGb3HrITg-unsplash 1.png";
import fragrance from "../../assets/pics/Category/laura-chouette-jmACQEf7T2A-unsplash 1 (1).png";
import handbags from "../../assets/pics/Category/trinh-minh-th-e76DU9wQaCI-unsplash 1.png";
import eyewear from "../../assets/pics/Category/lensabl-0GfPlommtxM-unsplash 1.png";
import apparels from "../../assets/pics/Category/heather-ford-5gkYsrH_ebY-unsplash 1.png";
//STYLES
import styles from "./style.module.scss";
import Breadcrump from "../../components/breadcrumpDesktop";
import { useLocation, useNavigate } from "react-router-dom";
import getCategoryByName from "../../services/getCategoryByName";
import MobileLayout from "../../layouts/mobileLayout";
import { BagContext } from "../../contexts/BagContext";
const config = {
  label: true,
  button: true,
  discount: 30,
  oldprice: 30,
};
export default function Category() {
  const { phone, desktop } = useBreakpoint();

  //STATES
  const [openSize, setOpenSize] = useState(false);
  const [heightSize, setHeightSize] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const [openColor, setOpenColor] = useState(false);
  const [heightColor, setHeightColor] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [openBrand, setOpenBrand] = useState(false);
  const [heightBrand, setHeightBrand] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const [openPrice, setOpenPrice] = useState(false);
  const [heightPrice, setHeightPrice] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const [openDiscount, setOpenDiscount] = useState(false);
  const [heightDiscount, setHeightDiscount] = useState(null);
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  const [openAvailability, setOpenAvailability] = useState(false);
  const [heightAvailability, setHeightAvailability] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);

  //REFS
  const sizeRefHeight = useRef();
  const colorRefHeight = useRef();
  const brandRefHeight = useRef();
  const priceRefHeight = useRef();
  const discountRefHeight = useRef();
  const AvailabilityRefHeight = useRef();

  //EFFECT
  useEffect(() => {
    setHeightSize(`${sizeRefHeight.current?.scrollHeight}px`);
    setHeightColor(`${colorRefHeight.current?.scrollHeight}px`);
    setHeightBrand(`${brandRefHeight.current?.scrollHeight}px`);
    setHeightPrice(`${priceRefHeight.current?.scrollHeight}px`);
    setHeightDiscount(`${discountRefHeight.current?.scrollHeight}px`);
    setHeightAvailability(`${AvailabilityRefHeight.current?.scrollHeight}px`);
  }, []);

  //HANDLES
  function handleOpenSize() {
    setOpenSize(!openSize);
  }
  function handleCheckboxSize(option) {
    setSelectedSize(option);
  }

  function handleOpenColor() {
    setOpenColor(!openColor);
  }
  function handleCheckboxColor(option) {
    setSelectedColor(option);
  }

  function handleOpenBrand() {
    setOpenBrand(!openBrand);
  }
  function handleCheckboxBrand(option) {
    setSelectedBrand(option);
  }

  function handleOpenPrice() {
    setOpenPrice(!openPrice);
  }
  function handleCheckboxPrice(option) {
    setSelectedPrice(option);
  }

  function handleOpenDiscount() {
    setOpenDiscount(!openDiscount);
  }
  function handleCheckboxDiscount(option) {
    setSelectedDiscount(option);
  }

  function handleOpenAvailability() {
    setOpenAvailability(!openAvailability);
  }
  function handleCheckboxAvailability(option) {
    setSelectedAvailability(option);
  }

  //NAVEGAÇÃO E GET NO ID DA CATEGORIA
  const location = useLocation();
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCategoryId = async () => {
    setLoading(true);
    if (location.state?.category) {
      const categoryId = await getCategoryByName(location.state?.category);
      return categoryId;
    } else if (categoryName) {
      const categoryId = await getCategoryByName(categoryName);
      return categoryId;
    }
    return "Não há categoria";
  };
  useEffect(() => {
    getCategoryId()
      .then((data) => setCategoryId(data))
      .finally(() => setLoading(false));
  }, [location.state?.category, categoryName]);

  const handleCategoryClick = (category) => {
    setCategoryName(category);
    setModalOpen(true);
  };

  return (
    <>
      {phone && !loading && (
        <MobileLayout icon={"arrow"} iconStroke={"#1B4B66"} iconAngle={90} title={categoryName} open={modalOpen} setOpen={setModalOpen}>
          <ProductGrid productConfig={config} categoryId={categoryId}></ProductGrid>
        </MobileLayout>
      )}
      {desktop && <Header path={location.state?.path} />}
      {!phone && !loading ? (
        <div className={styles.content}>
          <img src={hero} alt="Hero Banner" className={styles.heroBanner} />

          <Breadcrump category={"placeholder"} page={"home"} />

          <h1 className={`text-primary display-medium ${styles.categoryName}`}>{location.state?.category}</h1>

          <div className={styles.categoriesContainer}>
            <div className={`text-dark ${styles.sideMenu}`}>
              <div className={styles.menuCategory}>
                <div className={styles.filterTitle}>
                  <span>Size</span>
                  <button onClick={handleOpenSize}>{openSize ? <PlusSvg plus={false} /> : <PlusSvg plus={true} />}</button>
                </div>
                <div className={`${styles.filterContent} ${openSize && styles.show}`} ref={sizeRefHeight} style={{ height: openSize ? heightSize : "0px" }}>
                  <div className={styles.options}>
                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedSize === "Extra Small"} onChange={() => handleCheckboxSize("Extra Small")} />
                      Extra Small
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedSize === "Small"} onChange={() => handleCheckboxSize("Small")} />
                      Small
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedSize === "Medium"} onChange={() => handleCheckboxSize("Medium")} />
                      Medium
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedSize === "Large"} onChange={() => handleCheckboxSize("Large")} />
                      Large
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedSize === "Extra Large"} onChange={() => handleCheckboxSize("Extra Large")} />
                      Extra Large
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.menuCategory}>
                <div className={styles.filterTitle}>
                  <span>Color</span>
                  <button onClick={handleOpenColor}>{openColor ? <PlusSvg plus={false} /> : <PlusSvg plus={true} />}</button>
                </div>
                <div className={`${styles.filterContent} ${openColor && styles.show}`} ref={colorRefHeight} style={{ height: openColor ? heightColor : "0px" }}>
                  <div className={styles.options}>
                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Blue"} onChange={() => handleCheckboxColor("Blue")} />
                      Blue
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Maroon Red"} onChange={() => handleCheckboxColor("Maroon Red")} />
                      Maroon Red
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Crimson Red"} onChange={() => handleCheckboxColor("Crimson Red")} />
                      Crimson Red
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Seinna Pink"} onChange={() => handleCheckboxColor("Seinna Pink")} />
                      Seinna Pink
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Teal"} onChange={() => handleCheckboxColor("Teal")} />
                      Teal
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Aquamarine"} onChange={() => handleCheckboxColor("Aquamarine")} />
                      Aquamarine
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Off-White"} onChange={() => handleCheckboxColor("Off-White")} />
                      Off-White
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Muave Orange"} onChange={() => handleCheckboxColor("Muave Orange")} />
                      Muave Orange
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.menuCategory}>
                <div className={styles.filterTitle}>
                  <span>Brand</span>
                  <button onClick={handleOpenBrand}>{openBrand ? <PlusSvg plus={false} /> : <PlusSvg plus={true} />}</button>
                </div>
                <div className={`${styles.filterContent} ${openBrand && styles.show}`} ref={brandRefHeight} style={{ height: openBrand ? heightBrand : "0px" }}>
                  <div className={styles.options}>
                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedBrand === "Zara"} onChange={() => handleCheckboxBrand("Zara")} />
                      Zara
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedBrand === "D&G"} onChange={() => handleCheckboxBrand("D&G")} />
                      D&G
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedBrand === "H&M"} onChange={() => handleCheckboxBrand("H&M")} />
                      H&M
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedBrand === "Chanel"} onChange={() => handleCheckboxBrand("Chanel")} />
                      Chanel
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedBrand === "Prada"} onChange={() => handleCheckboxBrand("Prada")} />
                      Prada
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedBrand === "Biba"} onChange={() => handleCheckboxBrand("Biba")} />
                      Biba
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.menuCategory}>
                <div className={styles.filterTitle}>
                  <span>Price</span>
                  <button onClick={handleOpenPrice}>{openPrice ? <PlusSvg plus={false} /> : <PlusSvg plus={true} />}</button>
                </div>
                <div className={`${styles.filterContent} ${openPrice && styles.show}`} ref={priceRefHeight} style={{ height: openPrice ? heightPrice : "0px" }}>
                  <div className={styles.options}>
                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedPrice === "20"} onChange={() => handleCheckboxPrice("20")} />
                      $0 - 20
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedPrice === "40"} onChange={() => handleCheckboxPrice("40")} />
                      $40
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedPrice === "60"} onChange={() => handleCheckboxPrice("60")} />
                      $60
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedPrice === "OverPrice"} onChange={() => handleCheckboxPrice("OverPrice")} />
                      $60 +
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.menuCategory}>
                <div className={styles.filterTitle}>
                  <span>Discount</span>
                  <button onClick={handleOpenDiscount}>{openDiscount ? <PlusSvg plus={false} /> : <PlusSvg plus={true} />}</button>
                </div>
                <div className={`${styles.filterContent} ${openDiscount && styles.show}`} ref={discountRefHeight} style={{ height: openDiscount ? heightDiscount : "0px" }}>
                  <div className={styles.options}>
                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedDiscount === "10%"} onChange={() => handleCheckboxDiscount("10%")} />
                      10%
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedDiscount === "20%"} onChange={() => handleCheckboxDiscount("20%")} />
                      20%
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedDiscount === "50%"} onChange={() => handleCheckboxDiscount("50%")} />
                      50%
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.menuCategory}>
                <div className={styles.filterTitle}>
                  <span>Availability</span>
                  <button onClick={handleOpenAvailability}>{openAvailability ? <PlusSvg plus={false} /> : <PlusSvg plus={true} />}</button>
                </div>
                <div className={`${styles.filterContent} ${openAvailability && styles.show}`} ref={AvailabilityRefHeight} style={{ height: openAvailability ? heightAvailability : "0px" }}>
                  <div className={styles.options}>
                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedAvailability === "Available"} onChange={() => handleCheckboxAvailability("Available")} />
                      Available
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedAvailability === "Unavailable"} onChange={() => handleCheckboxAvailability("Unavailable")} />
                      Unavailable
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <ProductGrid filterConfig={{ selectedAvailability, selectedBrand, selectedColor, selectedDiscount, selectedPrice, selectedSize }} categoryId={categoryId} />
          </div>
        </div>
      ) : (
        <>
          {!loading && (
            <div className={styles.mobileContainer}>
              <div className={`${styles.txtContainer} display-small text-primary`}>
                <span>Categories</span>
              </div>

              <div className={styles.imgContainer}>
                <div className={`${styles.pickGradient} ${styles.bageGrad}`} onClick={() => handleCategoryClick("Skincare")}>
                  {!modalOpen && <span className={`display-small text-bright`}>Skincare</span>}

                  <img src={skincare}></img>
                </div>
                <div className={`${styles.pickGradient} ${styles.lightPinkGrad}`} onClick={() => handleCategoryClick("Fragrances")}>
                  <span className={`display-small text-bright`} style={{ color: "#CF118A" }}>
                    Fragrance
                  </span>
                  <img src={fragrance}></img>
                </div>
                <div className={`${styles.pickGradient} ${styles.blueGrad}`} onClick={() => handleCategoryClick("Handbags")}>
                  <span className={`display-small text-bright`}>Handbags</span>
                  <img src={handbags}></img>
                </div>
                <div className={`${styles.pickGradient} ${styles.pinkGrad}`} onClick={() => handleCategoryClick("Eyewear")}>
                  <span className={`display-small text-bright`}>Eyewear</span>
                  <img src={eyewear}></img>
                </div>
                <div className={`${styles.pickGradient} ${styles.lightBageGrad}`} onClick={() => handleCategoryClick("Apparels")}>
                  <span className={`display-small text-bright`}>Apparels</span>
                  <img src={apparels}></img>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {desktop && <Footer />}
      {phone && <NavBarMobile />}
    </>
  );
}
