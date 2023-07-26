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

const Header = () => {
  const { phone, desktop } = useBreakpoint();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="headerContainer">
        {desktop ? (
          <>
            <HeaderModal setOpen={setOpen} open={open} />
            <img src={coralLogo} />
            <div className="navContainer">
              <button className="redirectBtn">Handbags</button>
              <button className="redirectBtn">Watches</button>
              <button className="redirectBtn">Skincare</button>
              <button className="redirectBtn">Jewellery</button>
              <button className="redirectBtn">Apparels</button>
            </div>
            <SearchBar text={"Search for products or brands....."} icon={true} />
            <div className="navContainer">
              <WishlistSvg onClick={() => setOpen(true)} />
              <ProfileSvg stroke={"#1B4B66"} />
              <BagSvg stroke={"#1B4B66"} />
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
