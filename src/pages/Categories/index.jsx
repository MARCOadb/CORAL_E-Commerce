//COMPONENTS
import NavBarMobile from "../../components/navBarMobile";
import Header from "../../components/header";
import Footer from "../../components/footer";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";

//IMAGES & ICONS
import hero from '../../assets/pics/Category/hero.png'

//STYLES
import './style.scss'

export default function Category() {
    const { phone, desktop } = useBreakpoint();
    return (
        <>
            <Header />

            <div className="content">
                <img src={hero} alt="Hero Banner" className="hero-banner-category" />

                <div className="breadcrump">
                    componente breadcrump aqui
                </div>

                <h1 className="text-primary display-medium category-name">Handbags</h1>

                <div className="categories-container">
                    <div className="side-menu">
                        <div className="menu-category">
                            <span>Size</span>
                            <span>+</span>
                        </div>
                        <div className="menu-category">
                            <span>Color</span>
                            <span>+</span>
                        </div>
                        <div className="menu-category">
                            <span>Brand</span>
                            <span>+</span>
                        </div>
                        <div className="menu-category">
                            <span>Price Range</span>
                            <span>+</span>
                        </div>
                        <div className="menu-category">
                            <span>Discount</span>
                            <span>+</span>
                        </div>
                        <div className="menu-category">
                            <span>Avaliability</span>
                            <span>+</span>
                        </div>
                    </div>

                    <div className="items-grid">componente grid de items</div>
                </div>

            </div>

            <Footer />
            {phone && <NavBarMobile />}
        </>
    )
}