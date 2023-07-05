import "./style.scss";
import menuImg from "../../assets/icon/mobileMenu.svg";
import addIcon from "../../assets/icon/add-to-homescreen.svg";
import searchIcon from "../../assets/icon/search.svg";
import notificationIcon from "../../assets/icon/notification.svg";
import { useState } from "react";

const getDimensions = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

const Header = () => {
  const [screenSize, SetScreenSize] = useState(getDimensions());

  return (
    <div className="headerContainer">
      {screenSize.width >= 1200 ? (
        <>
          <div className="navContainer"></div>
          <div className="navContainer"></div>
        </>
      ) : (
        <>
          <div className="navContainer">
            <img src={menuImg} alt="menuIcon" />
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
  );
};
export default Header;
