import "./style.scss";
import menuImg from "../../assets/icon/mobileMenu.svg";
import addIcon from "../../assets/icon/add-to-homescreen.svg";
import searchIcon from "../../assets/icon/search.svg";
import notificationIcon from "../../assets/icon/notification.svg";
import useBreakPoint from "../../hooks/useBreakPoint";

const Header = () => {
  const { phone, desktop } = useBreakPoint();

  return (
    <div className="headerContainer">
      {desktop ? (
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
