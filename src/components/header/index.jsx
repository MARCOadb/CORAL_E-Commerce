import "./style.scss";
import coralLogo from "../../assets/icon/coral.svg";
import menuIcon from "../../assets/icon/mobileMenu.svg";
import addIcon from "../../assets/icon/add-to-homescreen.svg";
import searchIcon from "../../assets/icon/search.svg";
import notificationIcon from "../../assets/icon/notification.svg";
import wishlistIcon from "../../assets/icon/wishlist.svg";
import profileIcon from "../../assets/icon/profile.svg";
import bagIcon from "../../assets/icon/bag.svg";
import useBreakpoint from "../../hooks/useBreakPoint";
import SearchBar from "../searchBar";
import { useState } from "react";
import MobileDrawer from "../mobileDrawer";
import Modal from "../modal";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import ProfileSvg from "../../assets/icon/Profilesvg";
import BagSvg from "../../assets/icon/Bagsvg";
import HeaderModal from "../headerModal";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ path }) => {
  const { phone, desktop } = useBreakpoint();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleCategoryClick = (category) => {
    navigate(`/${path ? path : location.state.path}/${category}`, {
      state: {
        path: path ? path : location.state.path,
        category: category,
      },
    });
  };
  return (
    <>
      <HeaderModal setOpen={setOpen} open={open} />

      <div className="headerContainer">
        {desktop ? (
          <>
            <img
              src={coralLogo}
              onClick={() => {
                navigate("/home", { state: { path: "home" } });
              }}
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
              <WishlistSvg />
              <ProfileSvg stroke={"#1B4B66"} />
              <BagSvg onClick={() => setOpen(true)} stroke={"#1B4B66"} />
            </div>
          </>
        ) : (
          <>
            <MobileDrawer setOpen={setOpen} open={open} />
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
