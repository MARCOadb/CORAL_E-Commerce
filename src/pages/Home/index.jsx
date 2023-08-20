// COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroBanner from "../../components/heroBanner";
import NavBarMobile from "../../components/navBarMobile";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";
import { useState, useEffect, useContext } from "react";

//IMAGES & ICONS
import hero3 from "../../assets/pics/Home/hero-3.png";
import hero3Mobile from "../../assets/pics/Home/mob-only/hero3-mobile.png";
import shortHero from "../../assets/pics/Home/short-hero.png";
import shortHeroMobile from "../../assets/pics/Home/mob-only/short-hero-mobile.png";
import shortHero2 from "../../assets/pics/Home/short-hero-2.png";
import shortHero2Mobile from "../../assets/pics/Home/mob-only/short-hero-2-mobile.png";
import chevronRight from "../../assets/icon/chevron-right.svg";
import chevronRightSmall from "../../assets/icon/chevron-right-small.svg";
import perfume from "../../assets/pics/Home/laura-chouette-Atomp7YdMaE-unsplash 1.png";
import watch from "../../assets/pics/Home/wrist-watch.png";
import pinkBag from "../../assets/pics/Home/pink-bag-2.png";
import glasses from "../../assets/pics/Home/glasses.png";
import zara from "../../assets/pics/Home/zara-logo.png";
import dg from "../../assets/pics/Home/D&G-logo.png";
import hm from "../../assets/pics/Home/H&M-logo.png";
import chanel from "../../assets/pics/Home/chanel-logo.png";
import prada from "../../assets/pics/Home/prada-logo.png";
import biba from "../../assets/pics/Home/biba-logo.png";
import skincare from "../../assets/icon/skincare.svg";
import jewllery from "../../assets/icon/jewellery.svg";
import handbags from "../../assets/icon/handbags.svg";
import watchIcon from "../../assets/icon/watch.svg";
import shortcuts from "../../assets/pics/Home/mob-only/shortcut-mobile.png";
import boujee from "../../assets/pics/Home/bolsa-boujee.png";
import coach from "../../assets/pics/Home/bolsa-coach.png";
import grande from "../../assets/pics/Home/bolsa-grande.png";
import remus from "../../assets/pics/Home/bolsa-remus.png";
import ProductPage from "../Product";
//STYLES
import "./style.scss";
import Product from "../../components/product";
import getAllProducts from "../../services/getAllProducts";
import { BagContext } from "../../contexts/BagContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const { phone, desktop } = useBreakpoint();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { allProducts } = useContext(BagContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategory = (category) => {
    if (desktop) {
      navigate(`/${location.state?.path ? location.state?.path : "home"}/${category}`, {
        state: {
          path: location.state?.path ? location.state?.path : "home",
          category,
        },
      });
    } else {
      navigate(`/categories`, {
        state: {
          category,
        },
      });
    }
  };
  const handleBrands = (brand) => {
    if (desktop) {
      navigate(`/${location.state?.path ? location.state?.path : "home"}/${brand}`, {
        state: {
          path: location.state?.path ? location.state?.path : "home",
          brand,
        },
      });
    } else {
      navigate(`/categories`, {
        state: {
          brand,
        },
      });
    }
  };
  return (
    <>
      <Header path={"home"} />

      <div className="content">
        {desktop && (
          <div className="warning">
            <span>
              We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <a href="#">here</a>
            </span>
          </div>
        )}

        <HeroBanner />

        {phone && (
          <div className="categories-container">
            <h1>Top Categories</h1>
            <div className="categories">
              <div className="category" onClick={() => handleCategory("Skincare")}>
                <div>
                  <img src={skincare} />
                </div>
                <span>Skincare</span>
              </div>

              <div className="category" onClick={() => handleCategory("Jewllery")}>
                <div>
                  <img src={jewllery} />
                </div>
                <span>Jewllery</span>
              </div>

              <div className="category" onClick={() => handleCategory("Handbags")}>
                <div>
                  <img src={handbags} />
                </div>
                <span>Handbags</span>
              </div>

              <div className="category" onClick={() => handleCategory("Watches")}>
                <div>
                  <img src={watchIcon} />
                </div>
                <span>Watches</span>
              </div>

              <div className="category" onClick={() => handleCategory("Eyewear")}>
                <div>
                  <img src={skincare} />
                </div>
                <span>Eyewear</span>
              </div>

              <div className="category" onClick={() => handleCategory("Jewellery")}>
                <div>
                  <img src={jewllery} />
                </div>
                <span>Jewellery</span>
              </div>
            </div>
          </div>
        )}

        <div className="arrivals">
          <div className="arrivals-title">
            <h1>New Arrivals</h1>
            <button>
              <span>View All</span>
              {phone ? <img src={chevronRightSmall} alt="Chevron" /> : <img src={chevronRight} alt="Chevron" />}
            </button>
          </div>

          <div className="arrivals-carousel">
            {allProducts?.map((item) => (
              <Product largura={desktop ? 286 : 136} altura={desktop ? 286 : 136} data={item.data} label key={item.uid} itemId={item.uid} />
            ))}
          </div>
        </div>

        <div className="collections-container">
          {desktop ? (
            <div className="collections">
              <h1>Handpicked Collections</h1>
              <div className="collection">
                <div className="collection-item" onClick={() => handleCategory("Skincare")}>
                  <img src={perfume} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Personal Care</span>
                </div>

                <div className="collection-item" onClick={() => handleCategory("Handbags")}>
                  <img src={pinkBag} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Handbags</span>
                </div>

                <div className="collection-item" onClick={() => handleCategory("Watches")}>
                  <img src={watch} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Watches</span>
                </div>

                <div className="collection-item" onClick={() => handleCategory("Eyewear")}>
                  <img src={glasses} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Eyewear</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="collections">
              <h1>Handpicked Collections</h1>
              <div className="collection">
                <div className="collection-item" onClick={() => handleCategory("Skincare")}>
                  <img src={perfume} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Personal Care</span>
                </div>
                <div className="collection-item" onClick={() => handleCategory("Handbags")}>
                  <img src={pinkBag} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Handbags</span>
                </div>
                <div className="collection-item" onClick={() => handleCategory("Watches")}>
                  <img src={watch} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Wrist Watches</span>
                </div>
                <div className="collection-item" onClick={() => handleCategory("Eyewear")}>
                  <img src={glasses} alt="Category Cover" />
                  <div className="shadow"></div>
                  <span>Sun Glasses</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="brands-container">
          <div className="container-title">
            <h1>Shop by Brands</h1>
            <button>
              {phone && (
                <>
                  <span>View All</span>
                  <img src={chevronRightSmall} alt="Chevron" />
                </>
              )}
            </button>
          </div>

          <div className="brands">
            <img onClick={() => handleBrands("Zara")} src={zara} alt="Zara logo" />
            <img onClick={() => handleBrands("D&G")} src={dg} alt="D&G logo" />
            <img onClick={() => handleBrands("H&M")} src={hm} alt="H&M logo" />
            <img onClick={() => handleBrands("Chanel")} src={chanel} alt="Chanel logo" />
            <img onClick={() => handleBrands("Prada")} src={prada} alt="Prada logo" />
            <img onClick={() => handleBrands("Biba")} src={biba} alt="Biba logo" />
          </div>
        </div>

        {windowSize <= 600 && (
          <div className="shortcut">
            <img src={shortcuts} />
          </div>
        )}

        <div className="banners-container">
          {phone && <h1>Makeup & Skincare</h1>}
          <div className="banners">
            <img src={phone ? hero3Mobile : hero3} alt="Banner Image" className="banner-big" />
            <div>
              <img src={phone ? shortHeroMobile : shortHero} alt="Small Banner Image" />
              <img src={phone ? shortHero2Mobile : shortHero2} alt="Small Banner Image" />
            </div>
          </div>
        </div>

        {phone && (
          <div className="trendings-container">
            <h1>Trending Deals</h1>
            <HeroBanner />
          </div>
        )}
      </div>
      <Footer spacer={true} />
      {phone && <NavBarMobile />}
    </>
  );
}
