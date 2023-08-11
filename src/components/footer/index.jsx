import "./style.scss";
import location from "../../assets/icon/location.svg";
import logos from "../../assets/icon/logos.svg";
import useBreakpoint from "../../hooks/useBreakPoint";
import { useState } from "react";
import Dropdown from "../dropdown";

const Footer = () => {
  const { phone, desktop } = useBreakpoint();
  const [footer, setFooter] = useState(false);

  const mobileContent = (
    <>
      <div
        style={{ boxSizing: "border-box", width: "100%", height: "auto", maxWidth: "1280px", padding: "30px 15px", margin: "0 auto", display: "flex", flexDirection: "column", background: "#1B4B66" }}
      >
        <div class="listcontainer">
          <div class="lista">
            <span>Shop by Category</span>
            <a href="#">Skincare</a>
            <a href="#">Personal Care</a>
            <a href="#">Handbags</a>
            <a href="#">Apparels</a>
            <a href="#">Watches</a>
            <a href="#">Eye Wear</a>
            <a href="#">Jewellery</a>
          </div>
          <div class="lista">
            <span>About</span>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div class="lista">
            <span>Policy</span>
            <a href="#">Return Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">EPR Compliance</a>
          </div>
          <div className="linha"></div>
          <div class="box">
            <img className="logos" src={logos} alt="logos" />
            <div class="location">
              <img src={location} alt="location" />
              <p class="us">United States</p>
            </div>
            <span>© 2021 | Cora Leviene All Rights Reserved</span>
          </div>
        </div>
      </div>
      <div className="dropdown-spacer"></div>
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
                    <a href="#">Skincare</a>
                    <a href="#">Personal Care</a>
                    <a href="#">Handbags</a>
                    <a href="#">Apparels</a>
                    <a href="#">Watches</a>
                    <a href="#">Eye Wear</a>
                    <a href="#">Jewellery</a>
                  </div>
                  {desktop ? (
                    <>
                      <div className="lista">
                        <span>About</span>
                        <a href="#">Contact Us</a>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                      </div>
                      <div className="lista">
                        <span>Policy</span>
                        <a href="#">Return Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Sitemap</a>
                        <a href="#">Security</a>
                        <a href="#">Privacy</a>
                        <a href="#">EPR Compliance</a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lista">
                        <span>Policy</span>
                        <span>
                          <a href="#">Return Policy |</a>
                          <a href="#"> Terms of Use |</a>
                          <a href="#"> Sitemap |</a>
                          <a href="#"> Security |</a>
                          <a href="#"> Privacy |</a>
                          <a href="#"> EPR Compliance</a>
                        </span>
                      </div>
                      <div className="lista">
                        <span>About</span>
                        <span>
                          <a href="#">Contact Us |</a>
                          <a href="#"> About Us |</a>
                          <a href="#"> Careers |</a>
                          <a href="#"> Press</a>
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
          <div className="dropdown-spacer"></div>
        </>
      )}
    </div>
  );
};

export default Footer;
