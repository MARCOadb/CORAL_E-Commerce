import "./style.scss";
import location from "../../assets/icon/location.svg";
import logos from "../../assets/icon/logos.svg";
import useBreakpoint from "../../hooks/useBreakPoint";
import { useState, useEffect } from "react";
import Dropdown from "../dropdown";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = ({ spacer }) => {
  const { phone, desktop } = useBreakpoint();
  const [footer, setFooter] = useState(false);
  const [pathCheck, setPathCheck] = useState("home");

  const navigate = useNavigate();
  const locationUse = useLocation();

  const handleCategoryClick = (category) => {
    if (desktop) {
      navigate(`/home/${category}`, {
        state: {
          path: pathCheck,
          category: category,
        },
      });
    } else {
      navigate("/categories", {
        state: {
          categoryOpen: true,
          categoryName: category,
        },
      });
    }
  };

  const mobileContent = (
    <>
      <div
        style={{ boxSizing: "border-box", width: "100%", height: "auto", maxWidth: "1280px", padding: "30px 15px", margin: "0 auto", display: "flex", flexDirection: "column", background: "#1B4B66" }}
      >
        <div className="listcontainer">
          <div className="lista">
            <span>Shop by Category</span>
            <p onClick={() => handleCategoryClick("Skincare")}>Skincare</p>
            <p onClick={() => handleCategoryClick("Fragrances")}>Fragrances</p>
            <p onClick={() => handleCategoryClick("Handbags")}>Handbags</p>
            <p onClick={() => handleCategoryClick("Apparels")}>Fragrances</p>
            <p onClick={() => handleCategoryClick("Watches")}>Watches</p>
            <p onClick={() => handleCategoryClick("Eyewear")}>Eye Wear</p>
            <p onClick={() => handleCategoryClick("Jewellery")}>Jewellery</p>
          </div>
          <div className="lista">
            <span>About</span>
            <p>Contact Us</p>
            <p onClick={() => navigate("/about")}>About Us</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div className="lista">
            <span>Policy</span>
            <p>Return Policy</p>
            <p>Terms of Use</p>
            <p>Sitemap</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>EPR Compliance</p>
          </div>
          <div className="linha"></div>
          <div className="box">
            <img className="logos" src={logos} alt="logos" />
            <div className="location">
              <img src={location} alt="location" />
              <p className="us">United States</p>
            </div>
            <span>© 2021 | Cora Leviene All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {desktop ? (
        <>
          {(desktop || (phone && footer)) && (
            <footer>
              <div style={{ width: "100%", height: "auto", maxWidth: "1280px", margin: "0 auto", display: "flex" }}>
                <div className="listcontainer">
                  <div className="lista">
                    <span>Shop by Category</span>
                    <p onClick={() => handleCategoryClick("Skincare")}>Skincare</p>
                    <p onClick={() => handleCategoryClick("Fragrances")}>Fragrances</p>
                    <p onClick={() => handleCategoryClick("Handbags")}>Handbags</p>
                    <p onClick={() => handleCategoryClick("Apparels")}>Apparels</p>
                    <p onClick={() => handleCategoryClick("Watches")}>Watches</p>
                    <p onClick={() => handleCategoryClick("Eyewear")}>Eye Wear</p>
                    <p onClick={() => handleCategoryClick("Jewellery")}>Jewellery</p>
                  </div>
                  {desktop ? (
                    <>
                      <div className="lista">
                        <span>About</span>
                        <p>Contact Us</p>
                        <p onClick={() => navigate("/about")}>About Us</p>
                        <p>Careers</p>
                        <p>Press</p>
                      </div>
                      <div className="lista">
                        <span>Policy</span>
                        <p>Return Policy</p>
                        <p>Terms of Use</p>
                        <p>Sitemap</p>
                        <p>Security</p>
                        <p>Privacy</p>
                        <p>EPR Compliance</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lista">
                        <span>Policy</span>
                        <span>
                          <p>Return Policy |</p>
                          <p> Terms of Use |</p>
                          <p> Sitemap |</p>
                          <p> Security |</p>
                          <p> Privacy |</p>
                          <p> EPR Compliance</p>
                        </span>
                      </div>
                      <div className="lista">
                        <span>About</span>
                        <span>
                          <p>Contact Us |</p>
                          <p onClick={() => navigate("/about")}> About Us |</p>
                          <p> Careers |</p>
                          <p> Press</p>
                        </span>
                      </div>
                      <div className="linha"></div>
                    </>
                  )}
                </div>
                <div className="box">
                  <img className="logos" src={logos} alt="logos" />
                  <div className="location">
                    <img src={location} alt="location" />
                    <p className="us">United States</p>
                  </div>
                  <span> © 2021 | Cora Leviene All Rights Reserved </span>
                </div>
              </div>
            </footer>
          )}
        </>
      ) : (
        <>
          <Dropdown title="More about CORA'L" content={mobileContent} />
          {spacer && <div className="dropdown-spacer"></div>}
        </>
      )}
    </div>
  );
};

export default Footer;
