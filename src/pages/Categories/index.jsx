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
import DefaultBtn from "../../components/defaultBtn";
import BottomModal from "../../components/bottomModal";
import SortSvg from "../../assets/icon/SortSvg";
import FilterSvg from "../../assets/icon/FilterSvg";
const config = {
  label: true,
  button: true,
  discount: 30,
  oldprice: 30,
};

export default function Category() {
  const { phone, desktop } = useBreakpoint();
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const sortFilter = (
    <div className={styles.footerContainer}>
      <div className={styles.btnContainer} onClick={() => setSortOpen(true)}>
        <SortSvg />
        <span className="title-regular">Sort</span>
      </div>
      <div className={styles.btnContainer} onClick={() => setFilterOpen(true)}>
        <FilterSvg />
        <span className="title-regular">Filter</span>
      </div>
    </div>
  );
  //STATES

  const [sort, setSort] = useState(null);

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
  const colorRefHeight = useRef();
  const brandRefHeight = useRef();
  const priceRefHeight = useRef();
  const discountRefHeight = useRef();
  const AvailabilityRefHeight = useRef();

  //EFFECT
  useEffect(() => {
    setHeightColor(`${colorRefHeight.current?.scrollHeight}px`);
    setHeightBrand(`${brandRefHeight.current?.scrollHeight}px`);
    setHeightPrice(`${priceRefHeight.current?.scrollHeight}px`);
    setHeightDiscount(`${discountRefHeight.current?.scrollHeight}px`);
    setHeightAvailability(`${AvailabilityRefHeight.current?.scrollHeight}px`);
  }, []);

  const closeRadio = (name) => {
    switch (name) {
      case "Color":
        setOpenBrand(null);
        setOpenPrice(null);
        setOpenDiscount(null);
        setOpenAvailability(null);
        break;
      case "Brand":
        setOpenColor(null);
        setOpenPrice(null);
        setOpenDiscount(null);
        setOpenAvailability(null);
        break;
      case "Price":
        setOpenBrand(null);
        setOpenColor(null);
        setOpenDiscount(null);
        setOpenAvailability(null);
        break;
      case "Discount":
        setOpenBrand(null);
        setOpenPrice(null);
        setOpenColor(null);
        setOpenAvailability(null);
        break;
      case "Availability":
        setOpenColor(null);
        setOpenPrice(null);
        setOpenDiscount(null);
        setOpenBrand(null);
        break;
      default:
        setSelectedColor(null);
        setSelectedPrice(null);
        setSelectedDiscount(null);
        setSelectedBrand(null);
        setSelectedAvailability(null);
        break;
    }
  };

  //HANDLES
  function handleOpenColor() {
    setOpenColor(!openColor);
    if (phone) {
      closeRadio("Color");
    }
  }
  function handleCheckboxColor(option) {
    if (selectedColor != option) setSelectedColor(option);
    else setSelectedColor(null);
  }

  function handleOpenBrand() {
    setOpenBrand(!openBrand);
    if (phone) {
      closeRadio("Brand");
    }
  }
  function handleCheckboxBrand(option) {
    if (selectedBrand != option) setSelectedBrand(option);
    else setSelectedBrand(null);
  }

  function handleOpenPrice() {
    setOpenPrice(!openPrice);
    if (phone) {
      closeRadio("Price");
    }
  }
  function handleCheckboxPrice(option) {
    if (selectedPrice != option) setSelectedPrice(option);
    else setSelectedPrice(null);
  }

  function handleOpenDiscount() {
    setOpenDiscount(!openDiscount);
    if (phone) {
      closeRadio("Discount");
    }
  }
  function handleCheckboxDiscount(option) {
    if (selectedDiscount != option) setSelectedDiscount(option);
    else setSelectedDiscount(null);
  }

  function handleOpenAvailability() {
    setOpenAvailability(!openAvailability);
    if (phone) {
      closeRadio("Availability");
    }
  }
  function handleCheckboxAvailability(option) {
    if (selectedAvailability != option) setSelectedAvailability(option);
    else setSelectedAvailability(null);
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

  const preventDefault = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      {phone && !loading && (
        <MobileLayout footerPrefix={sortFilter} icon={"arrow"} iconStroke={"#1B4B66"} iconAngle={90} title={categoryName} open={modalOpen} setOpen={setModalOpen}>
          <ProductGrid filterConfig={{ selectedAvailability, selectedBrand, selectedColor, selectedDiscount, selectedPrice, sort }} productConfig={config} categoryId={categoryId}></ProductGrid>
          <BottomModal open={sortOpen} setOpen={() => setSortOpen(false)} title={"Sort by"}>
            <form className={styles.radioContainer} onChange={preventDefault}>
              <div>
                <input type="radio" id="popular" name="sort" value="popular" />
                <label htmlFor="popular">Popular Products</label>
              </div>
              <div>
                <input type="radio" id="Lowest price" name="sort" value="Lowest price" />
                <label htmlFor="Lowest price">Price- Low to High</label>
              </div>
              <div>
                <input type="radio" id="Highest price" name="sort" value="Highest price" />
                <label htmlFor="Highest price">Price- High to Low</label>
              </div>
              <div>
                <input type="radio" id="onSale" name="sort" value="onSale" />
                <label htmlFor="onSale">On Sale</label>
              </div>
            </form>
          </BottomModal>
          <MobileLayout
            buttons={[
              { text: "Clear All", outlined: true, onClick: closeRadio },
              { text: "Apply", onClick: () => setFilterOpen(false) },
            ]}
            icon={"cross"}
            title={"Filters"}
            open={filterOpen}
            setOpen={() => setFilterOpen(false)}
          >
            <div className={styles.filterContainer}>
              <div style={{ height: "86vh", backgroundColor: "#F1F1F1" }}>
                <div className={styles.filterTitle}>
                  <button className="body-medium" style={{ backgroundColor: openColor ? "#FFFFFF" : "#F1F1F1", color: openColor ? "#171520" : "#626262" }} onClick={handleOpenColor}>
                    Color
                  </button>
                </div>
                <div className={styles.filterTitle}>
                  <button className="body-medium" style={{ backgroundColor: openBrand ? "#FFFFFF" : "#F1F1F1", color: openBrand ? "#171520" : "#626262" }} onClick={handleOpenBrand}>
                    Brand
                  </button>
                </div>
                <div className={styles.filterTitle}>
                  <button className="body-medium" style={{ backgroundColor: openPrice ? "#FFFFFF" : "#F1F1F1", color: openPrice ? "#171520" : "#626262" }} onClick={handleOpenPrice}>
                    Price
                  </button>
                </div>
                <div className={styles.filterTitle}>
                  <button className="body-medium" style={{ backgroundColor: openDiscount ? "#FFFFFF" : "#F1F1F1", color: openDiscount ? "#171520" : "#626262" }} onClick={handleOpenDiscount}>
                    Discount
                  </button>
                </div>
                <div className={styles.filterTitle}>
                  <button
                    className="body-medium"
                    style={{ backgroundColor: openAvailability ? "#FFFFFF" : "#F1F1F1", color: openAvailability ? "#171520" : "#626262" }}
                    onClick={handleOpenAvailability}
                  >
                    Availability
                  </button>
                </div>
              </div>
              <div>
                {openColor && (
                  <div className={`${styles.filterContent} ${openColor && styles.show}`} ref={colorRefHeight} style={{ height: openColor ? heightColor : "0px" }}>
                    <div className={styles.options}>
                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Blue"} onChange={() => handleCheckboxColor("Blue")} />
                        Blue
                      </label>

                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Black"} onChange={() => handleCheckboxColor("Black")} />
                        Black
                      </label>

                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Red"} onChange={() => handleCheckboxColor("Red")} />
                        Red
                      </label>

                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Pink"} onChange={() => handleCheckboxColor("Pink")} />
                        Pink
                      </label>

                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Green"} onChange={() => handleCheckboxColor("Green")} />
                        Green
                      </label>

                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Brown"} onChange={() => handleCheckboxColor("Brown")} />
                        Brown
                      </label>

                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Golden"} onChange={() => handleCheckboxColor("Golden")} />
                        Golden
                      </label>

                      <label className="body-medium text-low-emphasis">
                        <input type="checkbox" checked={selectedColor === "Silver"} onChange={() => handleCheckboxColor("Silver")} />
                        Silver
                      </label>
                    </div>
                  </div>
                )}
                {openBrand && (
                  <div className={styles.menuCategory}>
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
                )}
                {openPrice && (
                  <div className={styles.menuCategory}>
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
                )}
                {openDiscount && (
                  <div className={styles.menuCategory}>
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
                )}
                {openAvailability && (
                  <div className={styles.menuCategory}>
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
                )}
              </div>
            </div>
          </MobileLayout>
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
                      <input type="checkbox" checked={selectedColor === "Black"} onChange={() => handleCheckboxColor("Black")} />
                      Black
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Red"} onChange={() => handleCheckboxColor("Red")} />
                      Red
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Pink"} onChange={() => handleCheckboxColor("Pink")} />
                      Pink
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Green"} onChange={() => handleCheckboxColor("Green")} />
                      Green
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Brown"} onChange={() => handleCheckboxColor("Brown")} />
                      Brown
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Golden"} onChange={() => handleCheckboxColor("Golden")} />
                      Golden
                    </label>

                    <label className="body-medium text-low-emphasis">
                      <input type="checkbox" checked={selectedColor === "Silver"} onChange={() => handleCheckboxColor("Silver")} />
                      Silver
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
            <ProductGrid filterConfig={{ selectedAvailability, selectedBrand, selectedColor, selectedDiscount, selectedPrice }} categoryId={categoryId} />
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
