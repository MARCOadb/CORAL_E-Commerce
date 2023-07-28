import "./style.scss";
import useBreakpoint from "../../hooks/useBreakPoint";
import ProfileSvg from "../../assets/icon/Profilesvg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BagSvg from "../../assets/icon/Bagsvg";
import CategorySvg from "../../assets/icon/Categorysvg";
import HomeSvg from "../../assets/icon/Homesvg";

// componentizar as img

const NavBarMobile = () => {
  const { phone, desktop } = useBreakpoint();
  const navigate = useNavigate();
  const handleClick = (i) => {
    navigate(i);
  };
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <div className="navbar">
      <div className="containerNav">
        <HomeSvg stroke={path === "/home" && "#1B4B66"} onClick={() => handleClick("/home")} />
        {path === "/home" && <span>Home</span>}
      </div>
      <div className="containerNav">
        <CategorySvg stroke={path === "/categories" && "#1B4B66"} onClick={() => handleClick("/categories")} />
        {path === "/categories" && <span>Categories</span>}
      </div>
      <div className="containerNav">
        <ProfileSvg stroke={path === "/profile" && "#1B4B66"} onClick={() => handleClick("/profile")} />
        {path === "/profile" && <span>Profile</span>}
      </div>
      <div className="containerNav">
        <BagSvg stroke={path === "/bag" && "#1B4B66"} onClick={() => handleClick("/bag")} />
        {path === "/bag" && <span>Bag</span>}
      </div>
    </div>
  );
};

export default NavBarMobile;
