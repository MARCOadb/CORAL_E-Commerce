//COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBarMobile from "../../components/navBarMobile";
import DefaultBtn from "../../components/defaultBtn";
import Breadcrump from "../../components/breadcrumpDesktop";
import { AuthContext } from "../../contexts/AuthContext";
import { BsEye, BsEyeSlash } from "react-icons/bs";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//IMAGES & ICONS
import profile from "../../assets/pics/profile-picture.jpg";
import ChevronRightSvg from "../../assets/icon/ChevronRightSvg";
import LogoutSvg from "../../assets/icon/LogoutSvg";
import deleteSvg from "../../assets/icon/delete-small.svg"

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
  const { profilePhoto } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [DDD, setDDD] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [currentPass, SetCurrentPass] = useState("");

  const deletePhoto = (user) => {
    deletePhoto(user.profilePhoto, user, true);
  };
  
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const imageFile = e.target.img.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = async () => {
  //     const productInfo = {
  //       name: e.target.name.value,
  //       description: e.target.description.value,
  //       price: e.target.price.value,
  //       categoryId: e.target.categoryId.value,
  //       stock: e.target.stock.value,
  //       image: reader.result,
  //       color: e.target.color.value,
  //       brand: e.target.brand.value,
  //       reviews: [],
  //       oldPrice: e.target.price.value,
  //     };
  //     await createProduct(productInfo, imageFile).then(() => alert("Produto registrado com sucesso"));
  //     };
  //     if (imageFile) {
  //       reader.readAsDataURL(imageFile);
  //     }
  //   };

  const handleFullName = (e) => {
    const capitalizedFullName = e.target.value.replace(/\b\w/g, (c) => c.toUpperCase());
    setFullName(capitalizedFullName);
  };

  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };

  const handleCity = (e) => {
    setCity(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };

  const handleDDD = (e) => {
    setDDD(e.target.value);
  };

  const handleMobNumber = (e) => {
    setMobNumber(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
  };

  const handlePinCode = (e) => {
    setPinCode(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

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
          <>

          {desktop && <div class={styles.profilepage}>{activeTab === 1 &&
          <>
            <h1 style={{ fontsize: "20px", fontweight: "600", lineheight: "26px", color: "#13101E"}}>
            Personal Information
            </h1>
            <form>
              <div class={styles.photosection}>
                <img style={{width:"80px", height:"80px", borderRadius:"80px"}}src={user.profilePhoto}></img>
                <div style={{display:"flex", padding:"36px 16px"}}>
                <div style={{padding:"3px 16px"}}>
                <label for="inputphoto" style={{alignItems:"center" }}>
                  Upload
                <input type="file" class={styles.profileinput} id="photo" name="photo">
                </input>
                </label>
                </div>
                <div>
                      <button className={styles.deletebutton} onClick={() => deletePhoto(user.profilePhoto)} onTouchStart={() => deletePhoto(user.profilePhoto)}><img src={deleteSvg}></img>Delete</button>
                </div>
                </div>
              </div>
              <div style={{display:"flex", width:"46%", justifyContent:"space-between", padding: "10px 0px"}}>
              <label for="firstname" className="body-medium-he">First Name</label>
              <label for="lastname" className="body-medium-he">Last Name</label>
              </div>
              <div style={{flexDirection:"row", width:"75%", justifycontent: "space-around"  }}className="input-holder">
                <input style={{padding:"10px"}} type="text" placeholder={ user.firstName} className="firstname" onChange={setFullName} />
                <input style={{padding:"10px"}} type="text" placeholder={user.lastName} className="lastname" onChange={setFullName} />
                </div>
                <div>
                <p className="body-medium-he" style={{padding:"10px 0px"}}>Email</p>
                <div className="input-holder" style={{width: "75%",}}>
                <input type="email" placeholder={user.email} className="email" onChange={handleEmail} />
                </div>
                </div>
                <div className="phone-input-holder">
                <p className="body-medium-he" style={{padding:"10px 0px"}}>Mobile Number</p>
                <div className="phone-input-fields">
                <input style={{width: "48px"}} type="number" placeholder={user.phoneNumber} className="ddd" value={DDD} maxLength={2} onChange={handleDDD} />
                <input style={{width:"38%"}}type="number" placeholder={user.phoneNumber} className="number" value={mobNumber} onChange={handleMobNumber} />
                </div>
                </div>
                <div>
                <p className="body-medium-he" style={{padding:"10px 0px"}}>Date of Birthday</p>
                <div className="input-holder">
                <input type="date" placeholder="" className="date" onChange={handleDate} />
                </div>
                </div>
                <div class={styles.passwordsection}>
                <h1 style={{color: "#13101E", fontsize: "20px", fontstyle: "normal", fontweight: "600", lineheight: "26px", padding:"53px 0px"}}>Change Password</h1>
                <div className={styles.inputPass}>
                    {desktop && <label>Current Password</label>}
                    <input
                      type={showPassword ? "text" : "password"}
                      className="body-medium text-primary"
                      placeholder={`${phone ? "Current Password" : ""}`}
                      value={currentPass}
                      onChange={(e) => SetCurrentPass(e.target.value)}
                    />
                  </div>
                <div className={styles.inputPass}>
                  {desktop && <label>New Password</label>}
                  <input
                    type={showPassword ? "text" : "password"}
                    className="body-medium text-primary"
                    placeholder={`${phone ? "New Password" : ""}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!showPassword ? <BsEye size={20} onClick={() => setShowPassword(true)} /> : <BsEyeSlash size={20} onClick={() => setShowPassword(false)} />}
                </div>
                <div className={styles.inputPass}>
                    {desktop && <label>Confirm your Password</label>}
                    <input
                      type={showPassword ? "text" : "password"}
                      className="body-medium text-primary"
                      placeholder={`${phone ? "Confirm your Password" : ""}`}
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.target.value)}
                    />
                  </div>
            </div>
            <button className={styles.submitbutton}>Save Changes</button>
            </form>
          </>
          
          }</div>}

</>
          {/* {desktop && <div className={styles.component}>{activeTab === 4 && <MyWishlist />}</div>} */}

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
