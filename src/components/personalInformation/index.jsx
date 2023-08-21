import { AuthContext } from "../../contexts/AuthContext";
import useBreakpoint from "../../hooks/useBreakPoint";
import styles from "./style.module.scss";
import { useEffect, useState, useContext } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ChevronRightSvg from "../../assets/icon/ChevronRightSvg";
import TrashSvg from "../../assets/icon/TrashSvg";
import MobileLayout from "../../layouts/mobileLayout";
import { auth, db } from "../../services/firebaseConnection";
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import defaultPic from "../../assets/pics/Login/profile-default.png";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";

export default function PersonalInformation({ open, setOpen }) {
  const { user, setUser, storageUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [ddd, setDdd] = useState(user?.phoneNumber?.slice(0, 2));
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber?.slice(2));
  const [formatedPhone, setFormatedPhone] = useState("");
  const [photo, setPhoto] = useState(user?.profilePhoto ? user?.profilePhoto : defaultPic);
  const [email, setEmail] = useState(user?.email);
  const [date, setDate] = useState(user?.birthDate);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [loading, setLoading] = useState(false);

  const { phone, desktop } = useBreakpoint();
  const userFirebase = auth.currentUser;
  const docRef = doc(db, "users", user?.uid);

  function handleProfilePhotoChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  async function handleUpdateUser(e) {
    e.preventDefault();
    setLoading(true);

    const credential = EmailAuthProvider.credential(userFirebase.email, currentPass);

    if (newPassword !== "" || confirmPass !== "") {
      if (validPassword(newPassword)) {
        if (newPassword === confirmPass) {
          if (currentPass !== "") {
            await reauthenticateWithCredential(userFirebase, credential)
              .then(async () => {
                await updatePassword(userFirebase, newPassword)
                  .then(async () => {
                    editUserInfo();
                    setConfirmPass("");
                    setCurrentPass("");
                    setNewPassword("");
                    setLoading(false);
                  })
                  .catch((error) => {
                    console.log(error);
                    setLoading(false);
                  });
              })
              .catch((error) => {
                if (error.code == "auth/wrong-password") {
                  toast.error("Incorrect password");
                  setLoading(false);
                }
              });
          } else {
            toast.error("You must provide your current Password");
            setLoading(false);
          }
        } else {
          toast.error("The passwords don't match!");
          setLoading(false);
        }
      } else {
        toast.error("The password must containt 6 characters, a special character, a number and a uppercase");
        setNewPassword("");
        setConfirmPass("");
        setLoading(false);
      }
    } else {
      editUserInfo();
    }
  }

  async function editUserInfo() {
    if (firstName !== "" && lastName !== "" && ddd + phoneNumber !== "" && email !== "") {
      await updateDoc(docRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: ddd + phoneNumber,
        profilePhoto: photo,
        birthDate: date,
      })
        .then(() => {
          let data = {
            uid: user.uid,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: ddd + phoneNumber,
            profilePhoto: photo,
            birthDate: date,
          };

          setUser(data);
          storageUser(data);
          toast.success("User information successfully updated");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast.error("You can't remove your informations");
      setLoading(false);
    }
  }

  function validPassword(senha) {
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(senha);
  }

  useEffect(() => {
    function formatPhone() {
      const phoneFirst = user?.phoneNumber?.slice(2, 7);
      const phoneSecont = user?.phoneNumber?.slice(7, 11);
      const phoneFormated = `${phoneFirst}-${phoneSecont}`;
      setFormatedPhone(phoneFormated);
    }
    formatPhone();
  }, [user]);

  return (
    <>
      {desktop ? (
        <div className={styles.profilepage}>
          <div>
            <h1 className="text-high-emphasis display-small">Personal Information</h1>
            <div className={styles.separator}></div>
          </div>
          <form onSubmit={handleUpdateUser} className={styles.form}>
            <div className={styles.photosection}>
              <img src={photo !== null ? photo : defaultPic}></img>
              <div>
                <label className="title-medium">
                  Upload
                  <input type="file" className={styles.profileinput} onChange={handleProfilePhotoChange} />
                </label>
                <button className={styles.deletebutton} onClick={() => setPhoto(null)} type="button">
                  <TrashSvg />
                  <span className="title-medium">Delete</span>
                </button>
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.nameContainer}>
                <div className={styles.inputContainer}>
                  <label className="body-medium-he">First Name</label>
                  <input type="text" value={firstName} className="body-medium" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className={styles.inputContainer}>
                  <label className="body-medium-he">Last Name</label>
                  <input type="text" value={lastName} className="body-medium" onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>

              <div className={styles.inputContainer} style={{ maxWidth: "605px" }}>
                <label className="body-medium-he">Email</label>
                <input type="email" placeholder={email} readOnly className="body-medium" style={{ cursor: "not-allowed" }} />
              </div>

              <div className={styles.phoneContainer}>
                <label className="body-medium-he">Mobile Number</label>
                <div className={styles.inputContainer} style={{ flexDirection: "row" }}>
                  <input style={{ width: "80px" }} type="text" value={ddd} className="body-medium" onChange={(e) => setDdd(e.target.value)} maxLength={2} />
                  <input type="text" style={{ width: "304px" }} value={phoneNumber} className="body-medium" maxLength={9} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
              </div>

              <div className={styles.inputContainer}>
                <label className="body-medium-he">Date of birth</label>
                <div className={styles.dateContainer}>
                  <input type="date" value={date} className="body-medium text-low-emphasis" onChange={(e) => setDate(e.target.value)} />
                  <ChevronRightSvg rotate={90} stroke={"#13101E"} />
                </div>
              </div>

              <div className={styles.passwordsection}>
                <div style={{ marginBottom: "37px" }}>
                  <h1 className="text-high-emphasis display-small">Change Password</h1>
                  <div className={styles.separator}></div>
                </div>
                <div className={styles.inputContainer} style={{ width: "287px" }}>
                  {desktop && <label>Current Password</label>}
                  <input
                    type={showPassword ? "text" : "password"}
                    className="body-medium text-high-emphasis"
                    placeholder={"********"}
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer} style={{ width: "287px" }}>
                  {desktop && <label>New Password</label>}
                  <input type={showPassword ? "text" : "password"} className="body-medium" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                  {!showPassword ? <BsEye size={20} onClick={() => setShowPassword(true)} /> : <BsEyeSlash size={20} onClick={() => setShowPassword(false)} />}
                </div>
                <div className={styles.inputContainer} style={{ width: "287px" }}>
                  {desktop && <label>Confirm your Password</label>}
                  <input type={showPassword ? "text" : "password"} className="body-medium" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={`${styles.submitbutton} body-medium`} type="submit">
                {loading ? "Loading..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <MobileLayout open={open} setOpen={setOpen} icon={"arrow"} iconAngle={90} title={"Personal Information"}>
            <form onSubmit={handleUpdateUser} className={styles.form}>
              <div className={styles.photosection}>
                <img src={photo !== null ? photo : defaultPic} />
                <div>
                  <label className="title-medium">
                    Upload
                    <input type="file" className={styles.profileinput} onChange={handleProfilePhotoChange} />
                  </label>
                  <button className={styles.deletebutton} onClick={() => setPhoto(null)} type="button">
                    <TrashSvg />
                    <span className="title-medium">Delete</span>
                  </button>
                </div>
              </div>
              <div className={styles.formFields}>
                <div className={styles.nameContainer}>
                  <div className={styles.inputContainer}>
                    <label className="body-medium-he">First Name</label>
                    <input type="text" value={firstName} className="body-medium" onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className={styles.inputContainer}>
                    <label className="body-medium-he">Last Name</label>
                    <input type="text" value={lastName} className="body-medium" onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>

                <div className={styles.inputContainer}>
                  <label className="body-medium-he">Email</label>
                  <input type="email" placeholder={email} readOnly className="body-medium" style={{ cursor: "not-allowed" }} />
                </div>

                <div className={styles.phoneContainer}>
                  <label className="body-medium-he">Mobile Number</label>
                  <div className={styles.inputContainer} style={{ flexDirection: "row" }}>
                    <input style={{ width: "80px" }} type="text" value={ddd} className="body-medium" maxLength={2} onChange={(e) => setDdd(e.target.value)} />
                    <input type="text" style={{ width: "304px" }} value={phoneNumber} className="body-medium" maxLength={9} onChange={(e) => setPhoneNumber(e.target.value)} />
                  </div>
                </div>

                <div className={styles.inputContainer}>
                  <label className="body-medium-he">Date of birth</label>
                  <div className={styles.dateContainer}>
                    <input type="date" value={date} className="body-medium text-low-emphasis" onChange={(e) => setDate(e.target.value)} />
                    <ChevronRightSvg rotate={90} stroke={"#13101E"} />
                  </div>
                </div>

                <div className={styles.passwordsection}>
                  <div style={{ marginBottom: "16px" }}>
                    <h1 className="text-high-emphasis display-small">Change Password</h1>
                    <div className={styles.separator}></div>
                  </div>
                  <div className={styles.inputContainer}>
                    <label>Current Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="body-medium text-high-emphasis"
                      placeholder={"**********"}
                      value={currentPass}
                      onChange={(e) => setCurrentPass(e.target.value)}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <label>New Password</label>
                    <input type={showPassword ? "text" : "password"} className="body-medium text-high-emphasis" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    {!showPassword ? <BsEye size={20} onClick={() => setShowPassword(true)} /> : <BsEyeSlash size={20} onClick={() => setShowPassword(false)} />}
                  </div>
                  <div className={styles.inputContainer}>
                    <label>Confirm your Password</label>
                    <input type={showPassword ? "text" : "password"} className="body-medium text-high-emphasis" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.submitbutton} type="submit">
                  {loading ? "Loading..." : "Save Changes"}
                </button>
              </div>
            </form>
          </MobileLayout>
        </>
      )}
    </>
  );
}
