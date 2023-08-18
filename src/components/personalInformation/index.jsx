import { AuthContext } from '../../contexts/AuthContext';
import useBreakpoint from '../../hooks/useBreakPoint';
import styles from './style.module.scss'
import { useEffect, useState, useContext } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ChevronRightSvg from "../../assets/icon/ChevronRightSvg"
import TrashSvg from '../../assets/icon/TrashSvg'
import MobileLayout from '../../layouts/mobileLayout';

export default function PersonalInformation({ open, setOpen }) {
    const { user } = useContext(AuthContext)
    const [fullName, setFullName] = useState("");
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [ddd, setDdd] = useState(user.phone.slice(0, 2));
    const [phoneNumber, setPhoneNumber] = useState(user.phone.slice(0, 2));
    const [formatedPhone, setFormatedPhone] = useState("")
    const [state, setState] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [email, setEmail] = useState(user.email);
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPass, setConfirmPass] = useState("");
    const [currentPass, SetCurrentPass] = useState("");

    const { phone, desktop } = useBreakpoint()

    const deletePhoto = (user) => {
        deletePhoto(user.profilePhoto, user, true);
    };

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

    function handleUpdateUser(e) {
        e.preventDefault()
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(ddd + phoneNumber)
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    };


    useEffect(() => {
        function formatPhone() {
            const phoneFirst = user.phone.slice(2, 6)
            const phoneSecont = user.phone.slice(6, 10)
            const phoneFormated = `${phoneFirst}-${phoneSecont}`
            setFormatedPhone(phoneFormated)
        }
        formatPhone()
    }, [user])

    return (
        <>
            {desktop ? (
                <div className={styles.profilepage}>
                    <div>
                        <h1 className='text-high-emphasis display-small'>
                            Personal Information
                        </h1>
                        <div className={styles.separator}></div>
                    </div>
                    <form onSubmit={handleUpdateUser} className={styles.form}>
                        <div class={styles.photosection}>
                            <img src={user.profilePhoto}></img>
                            <div>
                                <label className='title-medium'>
                                    Upload
                                    <input type="file" class={styles.profileinput}>
                                    </input>
                                </label>
                                <button className={styles.deletebutton} onClick={() => deletePhoto(user.profilePhoto)} onTouchStart={() => deletePhoto(user.profilePhoto)}>
                                    <TrashSvg />
                                    <span className='title-medium'>Delete</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.nameContainer}>
                                <div className={styles.inputContainer}>
                                    <label className="body-medium-he">First Name</label>
                                    <input type="text" placeholder={user.firstName} className="body-medium" onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className={styles.inputContainer}>
                                    <label className="body-medium-he">Last Name</label>
                                    <input type="text" placeholder={user.lastName} className="body-medium" onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>

                            <div className={styles.inputContainer}>
                                <label className="body-medium-he">Email</label>
                                <input type="email" placeholder={user.email} readOnly className="body-medium" onChange={(e) => setEmail(e.target.value)} style={{ cursor: 'not-allowed' }} />
                            </div>

                            <div className={styles.phoneContainer}>
                                <label className="body-medium-he">Mobile Number</label>
                                <div className={styles.inputContainer} style={{ flexDirection: 'row' }}>
                                    <input style={{ width: "80px" }} type="number" placeholder={'+' + user.phone.slice(0, 2)} className="ddd" value={ddd} maxLength={2} />
                                    <input type="number" style={{ width: "304px" }} placeholder={formatedPhone} className="number" />
                                </div>
                            </div>

                            <div className={styles.inputContainer}>
                                <label className="body-medium-he">Date of birth</label>
                                <div className={styles.dateContainer}>
                                    <input type="date" className="body-medium text-low-emphasis" onChange={handleDate} />
                                    <ChevronRightSvg rotate={90} stroke={'#13101E'} />
                                </div>
                            </div>

                            <div class={styles.passwordsection}>
                                <div style={{ marginBottom: '37px' }}>
                                    <h1 className='text-high-emphasis display-small'>
                                        Change Password
                                    </h1>
                                    <div className={styles.separator}></div>
                                </div>
                                <div className={styles.inputContainer} style={{ width: '287px' }}>
                                    {desktop && <label>Current Password</label>}
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="body-medium text-high-emphasis"
                                        placeholder={`${phone ? "Current Password" : ""}`}
                                        value={currentPass}
                                        onChange={(e) => SetCurrentPass(e.target.value)}
                                    />
                                </div>
                                <div className={styles.inputContainer} style={{ width: '287px' }}>
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
                                <div className={styles.inputContainer} style={{ width: '287px' }}>
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
                        </div>
                        <button className={styles.submitbutton} type='submit'>Save Changes</button>
                    </form>
                </div>
            ) : (
                <>
                    <MobileLayout open={open} setOpen={setOpen} icon={"arrow"} iconAngle={90} title={"Personal Information"}>
                        <form onSubmit={handleUpdateUser} className={styles.form}>
                            <div class={styles.photosection}>
                                <img src={user.profilePhoto} />
                                <div>
                                    <label className='title-medium'>
                                        Upload
                                        <input type="file" class={styles.profileinput}>
                                        </input>
                                    </label>
                                    <button className={styles.deletebutton} onClick={() => deletePhoto(user.profilePhoto)} onTouchStart={() => deletePhoto(user.profilePhoto)}>
                                        <TrashSvg />
                                        <span className='title-medium'>Delete</span>
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
                                    <input type="email" placeholder={user.email} readOnly className="body-medium" style={{ cursor: 'not-allowed' }} />
                                </div>

                                <div className={styles.phoneContainer}>
                                    <label className="body-medium-he">Mobile Number</label>
                                    <div className={styles.inputContainer} style={{ flexDirection: 'row' }}>
                                        <input style={{ width: "80px" }} type="text" value={'+' + ddd} className="body-medium" maxLength={2} onChange={(e) => setDdd(e.target.value)} />
                                        <input type="text" style={{ width: "304px" }} value={formatedPhone} className="body-medium" maxLength={8} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                </div>

                                <div className={styles.inputContainer}>
                                    <label className="body-medium-he">Date of birth</label>
                                    <div className={styles.dateContainer}>
                                        <input type="date" className="body-medium text-low-emphasis" onChange={handleDate} />
                                        <ChevronRightSvg rotate={90} stroke={'#13101E'} />
                                    </div>
                                </div>

                                <div class={styles.passwordsection}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <h1 className='text-high-emphasis display-small'>
                                            Change Password
                                        </h1>
                                        <div className={styles.separator}></div>
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <label>Current Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="body-medium text-high-emphasis"
                                            placeholder={'**********'}
                                            value={currentPass}
                                            onChange={(e) => SetCurrentPass(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <label>New Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="body-medium text-high-emphasis"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {!showPassword ? <BsEye size={20} onClick={() => setShowPassword(true)} /> : <BsEyeSlash size={20} onClick={() => setShowPassword(false)} />}
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <label>Confirm your Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="body-medium text-high-emphasis"
                                            value={confirmPass}
                                            onChange={(e) => setConfirmPass(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.submitbutton} type='submit'>Save Changes</button>
                            </div>
                        </form>
                    </MobileLayout>
                </>
            )}
        </>
    )
}