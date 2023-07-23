//COMPONENTS
import NavBarMobile from "../../components/navBarMobile";
import Header from "../../components/header";
import Footer from "../../components/footer";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";
import { useState, useEffect, useRef } from "react";

//IMAGES & ICONS
import hero from "../../assets/pics/Category/hero.png";
import PlusSvg from "../../assets/icon/PlusSvg";

//STYLES
import styles from "./style.module.scss";
import Breadcrump from "../../components/breadcrumpDesktop";

export default function Category() {
  const { phone, desktop } = useBreakpoint();

  //STATES
  const [openSize, setOpenSize] = useState(false);
  const [heightSize, setHeightSize] = useState(null);
  const [selectedSize, setSelectedSize] = useState("Extra Small");

  const [openColor, setOpenColor] = useState(false);
  const [heightColor, setHeightColor] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Blue");

  const [openBrand, setOpenBrand] = useState(false);
  const [heightBrand, setHeightBrand] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("Zara");

  const [openPrice, setOpenPrice] = useState(false);
  const [heightPrice, setHeightPrice] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("20");

  const [openDiscount, setOpenDiscount] = useState(false);
  const [heightDiscount, setHeightDiscount] = useState(null);
  const [selectedDiscount, setSelectedDiscount] = useState("10%");

  const [openAvailability, setOpenAvailability] = useState(false);
  const [heightAvailability, setHeightAvailability] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState("Available");

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

  return (
    <>
      <Header />
      {!phone && (
        <div className={styles.content}>
          <img src={hero} alt="Hero Banner" className={styles.heroBanner} />

          <Breadcrump category={"placeholder"} page={"home"}/>

          <h1 className={`text-primary display-medium ${styles.categoryName}`}>Handbags</h1>

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

            <div className={styles.itemsGrid}>componente grid de items</div>
          </div>
        </div>
      )}

      <Footer />
      {phone && <NavBarMobile />}
    </>
  );
}
