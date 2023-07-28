import "./style.scss";
import coralLogo from "../../assets/icon/coral.svg";
import menuIcon from "../../assets/icon/mobileMenu.svg";
import addIcon from "../../assets/icon/add-to-homescreen.svg";
import searchIcon from "../../assets/icon/search.svg";
import notificationIcon from "../../assets/icon/notification.svg";
import useBreakpoint from "../../hooks/useBreakPoint";
import SearchBar from "../searchBar";
import { useState, useEffect } from "react";
import MobileDrawer from "../mobileDrawer";
import ProfileSvg from "../../assets/icon/Profilesvg";
import BagSvg from "../../assets/icon/Bagsvg";
import WishlistSvg from "../../assets/icon/WishlistSvg"
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ path }) => {
  const { phone, desktop } = useBreakpoint();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [pathCheck, setPathCheck] = useState('/home')

  useEffect(() => {
    if (path) {
      setPathCheck(path)
    } else if (location.state?.path) {
      setPathCheck(location.state?.path)
    }
  }, [])

  const handleCategoryClick = (category, tabIndex) => {
    navigate(`/${pathCheck}/${category}`, {
      state: {
        path: pathCheck,
        category: category,
        initialTab: tabIndex ? tabIndex : location.state.initialTab
      },
    });
  };
  return (
    <>

      <MobileDrawer setOpen={setOpen} open={open} />
      <div className="headerContainer">
        {desktop ? (
          <>
            <img
              src={coralLogo}
              onClick={() => {
                navigate("/", { state: { path: "home" } });
              }}
              style={{ cursor: 'pointer' }}
            />
            <div className="navContainer">
              <button
                className="redirectBtn"
                onClick={() => {
                  handleCategoryClick("Handbags");
                }}
              >
                Handbags
              </button>
              <button
                className="redirectBtn"
                onClick={() => {
                  handleCategoryClick("Watches");
                }}
              >
                Watches
              </button>
              <button
                className="redirectBtn"
                onClick={() => {
                  handleCategoryClick("Skincare");
                }}
              >
                Skincare
              </button>
              <button
                className="redirectBtn"
                onClick={() => {
                  handleCategoryClick("Jewellery");
                }}
              >
                Jewellery
              </button>
              <button
                className="redirectBtn"
                onClick={() => {
                  handleCategoryClick("Apparels");
                }}
              >
                Apparels
              </button>
            </div>
            <SearchBar text={"Search for products or brands....."} icon={true} />
            <div className="navContainer">
              <WishlistSvg stroke={"#1B4B66"} height={44} onClick={() => { handleCategoryClick("profile", 4) }} />
              <ProfileSvg stroke={"#1B4B66"} height={44} onClick={() => { handleCategoryClick("profile", 1) }} navMovile={false} />
              <BagSvg stroke={"#1B4B66"} height={44} />
            </div>
          </>
        ) : (
          <>
            <div className="navContainer">
              <div onClick={() => setOpen(true)}>
                <img src={menuIcon} alt="menuIcon" />
              </div>
              <span>Home</span>
            </div>
            <div className="navContainer">
              <img src={addIcon} alt="addIcon" />
              <img src={searchIcon} alt="searchIcon" />
              <img src={notificationIcon} alt="notificationIcon" />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Header;
