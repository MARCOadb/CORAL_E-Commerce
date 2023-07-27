import { useState } from "react"
import styles from './style.module.scss'
import profileImg from '../../assets/pics/blank-profile-picture-ga314f8c96_1280.png'

export default function Login() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1 className="display-small">Welcome</h1>
                        <span className="body-medium">Enter your credentials to create your account.</span>
                    </div>
                    <img src={profileImg} />
                    <div className={styles.form}>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Age" />
                        <input type="text" placeholder="Country" />
                    </div>
                </div>
            </div>
        </>
    )
}