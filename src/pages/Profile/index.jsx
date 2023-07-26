//COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer"
import NavBarMobile from "../../components/navBarMobile";
import DefaultBtn from "../../components/defaultBtn";
import Breadcrump from "../../components/breadcrumpDesktop";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";

//IMAGES & ICONS
import profile from '../../assets/pics/profile-picture.jpg'
import ChevronRightSvg from '../../assets/icon/ChevronRightSvg'
import LogoutSvg from "../../assets/icon/LogoutSvg";

//STYLES
import styles from "./style.module.scss";

export default function Profile() {
    const { phone, desktop } = useBreakpoint();
    return (
        <>
            {desktop && (
                <Header />
            )}

            <div className={styles.content}>
                {desktop && (
                    <div className={styles.breadcrump}>
                        <Breadcrump page={"home"} category={"User Profile"} />
                    </div>
                )}
                <div className={styles.title}>
                    <div>
                        <h1 className={`text-primary ${desktop ? 'display-medium' : 'display-small'}`}>{desktop ? 'Personal Information' : 'Profile'}</h1>
                        {desktop && (
                            <button>
                                <LogoutSvg />
                                <span>Logout</span>
                            </button>
                        )}
                    </div>
                </div>

                <div className={`${desktop && styles.boxContainer}`}>
                    {phone && (
                        <div className={styles.userDetails}>
                            <img src={profile} alt="User Profile" />
                            <div>
                                <h2 className="text-high-emphasis display-small">Gorila Harambe</h2>
                                <span className="text-faded title-medium">tinavar@vinho.com</span>
                                <span className="text-faded title-medium">+85-5478564</span>
                            </div>
                            <ChevronRightSvg />
                        </div>
                    )}

                    <div className={`${styles.menu} body-medium text-dark`}>
                        {desktop && (
                            <div className={styles.movingBar}></div>
                        )}
                        <div className={styles.item}>
                            <span>Personal Information</span>
                            <ChevronRightSvg stroke='#13101E' />
                        </div>
                        <div className={styles.item}>
                            <span>Refer and Earn</span>
                            <ChevronRightSvg stroke='#13101E' />
                        </div>
                        <div className={styles.item}>
                            <span>My Orders</span>
                            <ChevronRightSvg stroke='#13101E' />
                        </div>
                        <div className={styles.item}>
                            <span>My Wishlist</span>
                            <ChevronRightSvg stroke='#13101E' />
                        </div>
                        <div className={styles.item}>
                            <span>My Reviews</span>
                            <ChevronRightSvg stroke='#13101E' />
                        </div>
                        <div className={styles.item}>
                            <span>My Adress Book</span>
                            <ChevronRightSvg stroke='#13101E' />
                        </div>
                        <div className={styles.item}>
                            <span>My Saved Cards</span>
                            <ChevronRightSvg stroke='#13101E' />
                        </div>
                    </div>

                    {desktop && (
                        <div className={styles.component}>COMPONENTE A SER RENDERIZADO</div>
                    )}

                    {phone && (
                        <div className={styles.logoutButton}>
                            <DefaultBtn outlined={true} children={'Logout'} icon={<LogoutSvg />} />
                        </div>
                    )}
                </div>
            </div>

            {desktop && (
                <Footer />
            )}

            {phone && (
                <NavBarMobile />
            )}

        </>
    )
}