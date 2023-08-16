//COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBarMobile from "../../components/navBarMobile";
import DefaultBtn from "../../components/defaultBtn";
import Breadcrump from "../../components/breadcrumpDesktop";

import { AuthContext } from "../../contexts/AuthContext";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//IMAGES & ICONS
import profile from "../../assets/pics/profile-picture.jpg";
import ChevronRightSvg from "../../assets/icon/ChevronRightSvg";
import LogoutSvg from "../../assets/icon/LogoutSvg";

//STYLES
import styles from "./style.module.scss";
import MyWishlist from "../../components/myWishlist";

export default function Profile() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { phone, desktop } = useBreakpoint();
  const [activeTab, setActiveTab] = useState(location.state?.initialTab ? location.state?.initialTab : 1);
  const [tabTitle, setTabTitle] = useState("");
  const [tabMobileOpen, setTabMobileOpen] = useState(false);

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    if (desktop) handleTab(location.state.initialTab);
  }, [location.state?.initialTab]);

  useEffect(() => {
    switch (activeTab) {
      case 1:
        setTabTitle("Personal Information");
        break;
      case 2:
        setTabTitle("Refer and Eard");
        break;
      case 3:
        setTabTitle("My Orders");
        break;
      case 4:
        setTabTitle("My Wishlist");
        break;
      case 5:
        setTabTitle("My Reviews");
        break;
      case 6:
        setTabTitle("My Address Book");
        break;
      case 7:
        setTabTitle("My Saved Cards");
        break;
    }
  }, [activeTab]);

  function handleTab(tab) {
    setTabMobileOpen(true);
    setActiveTab(tab);
  }

  async function handleLogout() {
    await logout();
  }

  return (
    <>
      {desktop && <Header />}
      {activeTab === 4 && phone && tabMobileOpen && <MyWishlist open={tabMobileOpen} setOpen={setTabMobileOpen} />}
      <div className={styles.content}>
        {desktop && (
          <div className={styles.breadcrump}>
            <Breadcrump page={"home"} category={"User Profile"} />
          </div>
        )}
        <div className={styles.title}>
          <div>
            <h1 className={`text-primary ${desktop ? "display-medium" : "display-small"}`}>{phone ? "Profile" : tabTitle}</h1>
            {desktop && (
              <button onClick={handleLogout}>
                <LogoutSvg />
                <span className="text-primary">Logout</span>
              </button>
            )}
          </div>
        </div>

        <div className={`${desktop && styles.boxContainer}`}>
          {phone && (
            <div className={styles.userDetails}>
              <div style={{ display: "flex", gap: "14px", overflow: "auto" }}>
                <img src={user?.profilePhoto} alt="User Profile" />
                <div className={styles.txtContainer}>
                  <h2 className="text-high-emphasis display-small">{user?.firstName}</h2>
                  <span className="text-faded title-medium">{user?.email}</span>
                  <span className="text-faded title-medium">{user?.phoneNumber}</span>
                </div>
              </div>
              <div style={{ flexShrink: "0" }}>
                <ChevronRightSvg />
              </div>
            </div>
          )}

          <div className={`${styles.menu} body-medium text-dark`}>
            {desktop && <div className={styles.movingBar} style={{ top: `${(activeTab - 1) * 72}px` }} />}
            <div onClick={() => handleTab(1)} className={`${styles.item} ${activeTab === 1 && styles.active}`} id="1">
              <span>Personal Information</span>
              <ChevronRightSvg stroke={activeTab === 1 && desktop ? "#1B4B66" : "#13101E"} />
            </div>
            <div onClick={() => handleTab(2)} className={`${styles.item} ${activeTab === 2 && styles.active}`} id="2">
              <span>Refer and Earn</span>
              <ChevronRightSvg stroke={activeTab === 2 && desktop ? "#1B4B66" : "#13101E"} />
            </div>
            <div onClick={() => handleTab(3)} className={`${styles.item} ${activeTab === 3 && styles.active}`} id="3">
              <span>My Orders</span>
              <ChevronRightSvg stroke={activeTab === 3 && desktop ? "#1B4B66" : "#13101E"} />
            </div>
            <div onClick={() => handleTab(4)} className={`${styles.item} ${activeTab === 4 && styles.active}`} id="4">
              <span>My Wishlist</span>
              <ChevronRightSvg stroke={activeTab === 4 && desktop ? "#1B4B66" : "#13101E"} />
            </div>
            <div onClick={() => handleTab(5)} className={`${styles.item} ${activeTab === 5 && styles.active}`} id="5">
              <span>My Reviews</span>
              <ChevronRightSvg stroke={activeTab === 5 && desktop ? "#1B4B66" : "#13101E"} />
            </div>
            <div onClick={() => handleTab(6)} className={`${styles.item} ${activeTab === 6 && styles.active}`} id="6">
              <span>My Address Book</span>
              <ChevronRightSvg stroke={activeTab === 6 && desktop ? "#1B4B66" : "#13101E"} />
            </div>
            <div onClick={() => handleTab(7)} className={`${styles.item} ${activeTab === 7 && styles.active}`} id="7">
              <span>My Saved Cards</span>
              <ChevronRightSvg stroke={activeTab === 7 && desktop ? "#1B4B66" : "#13101E"} />
            </div>
          </div>

          {desktop && <div className={styles.component}>{activeTab === 4 && <MyWishlist />}</div>}

          {phone && (
            <div className={styles.logoutButton}>
              <DefaultBtn outlined={true} children={"Logout"} icon={<LogoutSvg />} onClick={handleLogout} />
            </div>
          )}
        </div>
      </div>

      {desktop && <Footer />}

      {phone && <NavBarMobile />}
    </>
  );
}
