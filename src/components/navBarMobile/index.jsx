import "./style.scss";
import useBreakpoint from "../../hooks/useBreakPoint";
import ProfileSvg from "../../assets/icon/Profilesvg";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import BagSvg from "../../assets/icon/Bagsvg";
import CategorySvg from "../../assets/icon/Categorysvg";
import HomeSvg from "../../assets/icon/Homesvg";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "../modal";

// componentizar as img

const NavBarMobile = () => {
  const { phone, desktop } = useBreakpoint();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const { signed } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  const handleClick = (i) => {
    if (i === "/profile" || i === "/bag") {
      if (signed) {
        navigate(i);
      } else {
        setLoginModalOpen(true);
      }
    } else {
      navigate(i);
    }
  };
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <div className="navbar">
      {loginModalOpen && (
        <>
          <div className="loginModal">
            <span className="text-high-emphasis">You are not authenticated!</span>
            <span className="text-high-emphasis">Please log in to continue</span>
            <a href="/CORAL_E-Commerce/login">Log In</a>
          </div>
        </>
      )}
      <div className="containerNav">
        <HomeSvg stroke={path === "/CORAL_E-Commerce/" && "#1B4B66"} onClick={() => handleClick("/CORAL_E-Commerce/")} />
        {path === "/CORAL_E-Commerce/" && <span>Home</span>}
      </div>
      <div className="containerNav">
        <CategorySvg stroke={path === "/categories" && "#1B4B66"} onClick={() => handleClick("/categories")} />
        {path === "/categories" && <span>Categories</span>}
      </div>
      <div className="containerNav">
        <ProfileSvg stroke={path === "/profile" && "#1B4B66"} onClick={() => handleClick("/profile")} navMovile={true} />
        {path === "/profile" && <span>Profile</span>}
      </div>
      <div className="containerNav">
        <BagSvg stroke={path === "/bag" && "#1B4B66"} onClick={() => handleClick("/bag")} />
        {path === "/bag" && <span>Bag</span>}
      </div>
      <Modal open={loginModalOpen} setOpen={setLoginModalOpen}></Modal>
    </div>
  );
};

export default NavBarMobile;
