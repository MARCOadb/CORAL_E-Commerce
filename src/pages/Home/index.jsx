// COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer";

//HOOKS

//IMAGES & ICONS
import hero from '../../assets/pics/hero.png'
import arrowIcon from '../../assets/icon/arrow.svg'
import chevronRight from '../../assets/icon/chevron-right.svg'
import pinkBag from '../../assets/pics/pink-bag-small-2.png'
import heart from '../../assets/icon/wishlist-black.svg'
import perfume from '../../assets/pics/laura-chouette-Atomp7YdMaE-unsplash 1.png'

//STYLES
import './style.scss'

export default function Home() {
    return (
        <>
            <Header />

            <div className="content">
                <div className="warning">
                    <span>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <a href="#">here</a></span>
                </div>

                <div className="hero-banner">
                    <img src={hero} alt="Imagem Banner" />
                    <button>
                        <img src={arrowIcon} alt="Arrow" />
                        <span>See more</span>
                    </button>
                </div>

                <div className="arrivals">
                    <div className="arrivals-title">
                        <h1>New Arrivals</h1>
                        <div>
                            <span>View All</span>
                            <img src={chevronRight} alt="Chevron" />
                        </div>
                    </div>

                    <div className="arrivals-carousel">
                        <div className="item">
                            <img src={pinkBag} alt="Item Name" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Grande</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span>Blossom Pouch</span>
                                <span>$39.49</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src={pinkBag} alt="Item Name" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Grande</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span>Blossom Pouch</span>
                                <span>$39.49</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src={pinkBag} alt="Item Name" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Grande</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span>Blossom Pouch</span>
                                <span>$39.49</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src={pinkBag} alt="Item Name" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Grande</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span>Blossom Pouch</span>
                                <span>$39.49</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="collections">
                    <div className="category">
                        <img src={perfume} alt="Category Cover" />
                        <span>Personal Care</span>
                    </div>

                    <div className="category">
                        <img src={perfume} alt="Category Cover" />
                        <span>Personal Care</span>
                    </div>

                    <div className="category">
                        <img src={perfume} alt="Category Cover" />
                        <span>Personal Care</span>
                    </div>

                    <div className="category">
                        <img src={perfume} alt="Category Cover" />
                        <span>Personal Care</span>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}