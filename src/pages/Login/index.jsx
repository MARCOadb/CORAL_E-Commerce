import { useState } from "react"
import styles from './style.module.scss'
import profileImg from '../../assets/pics/profile-default.png'
import useBreakpoint from "../../hooks/useBreakPoint";
import { BsEye, BsEyeSlash } from 'react-icons/bs'

export default function Login() {
    const { phone, desktop } = useBreakpoint()
    const [showPassword, setShowPassword] = useState(false)
    const [formType, setFormType] = useState('register') //define se o tipo de formulário é de login ou register

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    return (
        <>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1 className={desktop ? 'display-medium' : 'display-small'}>{formType === 'register' ? 'Welcome' : 'Welcome Back'}</h1>
                        <span className="body-medium">Enter your credentials to {formType === 'register' ? 'create your account.' : 'log in your account'}</span>
                    </div>
                    {formType === 'register' && <img src={profileImg} />}
                    <form className={styles.form}>
                        {formType === 'register' && (
                            <div className={styles.inputContainer}>
                                <div className={styles.inputField}>
                                    {desktop && (
                                        <label>First Name</label>
                                    )}
                                    <input
                                        type="text"
                                        className="body-medium text-primary"
                                        placeholder={`${phone ? 'First Name' : ''}`}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className={styles.inputField}>
                                    {desktop && (
                                        <label>Last Name</label>
                                    )}
                                    <input
                                        type="text"
                                        className="body-medium text-primary"
                                        placeholder={`${phone ? 'Last Name' : ''}`}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                        <div className={styles.inputContainer}>
                            <div className={styles.inputField}>
                                {desktop && (
                                    <label>Email</label>
                                )}
                                <input
                                    type="text"
                                    className="body-medium text-low-emphasis"
                                    placeholder={`${phone ? 'Email' : ''}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {formType === 'register' && (
                                <div className={styles.inputField}>
                                    {desktop && (
                                        <label>Phone Number</label>
                                    )}
                                    <input
                                        type="tel"
                                        className="body-medium text-primary"
                                        pattern="[0-9]*" maxLength="11"
                                        placeholder={`${phone ? 'Phone Number' : ''}`}
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            )}

                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputField}>
                                {desktop && (
                                    <label>Password</label>
                                )}
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="body-medium text-primary"
                                    placeholder={`${phone ? 'Password' : ''}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {!showPassword ? (
                                    <BsEye size={20} onClick={() => setShowPassword(true)} />
                                ) : (
                                    <BsEyeSlash size={20} onClick={() => setShowPassword(false)} />
                                )}
                            </div>

                            {formType === 'register' && (
                                <div className={styles.inputField}>
                                    {desktop && (
                                        <label>Confirm your Password</label>
                                    )}
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="body-medium text-primary"
                                        placeholder={`${phone ? 'Confirm your Password' : ''}`}
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                        <button type="submit" className="display-small">{formType === 'register' ? 'Register' : 'Login'}</button>
                    </form>
                </div>
                <span className={styles.changeType}>{formType === 'register' ? (
                    <p>Already have an account? <span onClick={() => setFormType('login')}>Click Here</span></p>
                ) : (
                    <p>Don't have an account? <span onClick={() => setFormType('register')}>Register Now</span></p>
                )}</span>
            </div>
        </>
    )
}