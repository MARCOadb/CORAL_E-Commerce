// COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer";

//HOOKS

//IMAGES & ICONS
import hero from '../../assets/pics/hero.png'
import hero2 from '../../assets/pics/hero-2.png'
import shortHero from '../../assets/pics/short-hero.png'
import shortHero2 from '../../assets/pics/short-hero-2.png'
import arrowIcon from '../../assets/icon/arrow.svg'
import chevronRight from '../../assets/icon/chevron-right.svg'
import grande from '../../assets/pics/bolsa-grande.png'
import remus from '../../assets/pics/bolsa-remus.png'
import coach from '../../assets/pics/bolsa-coach.png'
import boujee from '../../assets/pics/bolsa-boujee.png'
import heart from '../../assets/icon/wishlist-black.svg'
import perfume from '../../assets/pics/laura-chouette-Atomp7YdMaE-unsplash 1.png'
import watch from '../../assets/pics/wrist-watch.png'
import pinkBag from '../../assets/pics/pink-bag-2.png'
import glasses from '../../assets/pics/glasses.png'
import zara from '../../assets/pics/zara-logo.png'
import dg from '../../assets/pics/D&G-logo.png'
import hm from '../../assets/pics/H&M-logo.png'
import chanel from '../../assets/pics/chanel-logo.png'
import prada from '../../assets/pics/prada-logo.png'
import biba from '../../assets/pics/biba-logo.png'

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
                    <img src={hero} alt="Banner Image" />
                    <button>
                        <img src={arrowIcon} alt="Arrow" />
                        <span>See more</span>
                    </button>
                </div>

                <div className="arrivals">
                    <div className="arrivals-title">
                        <h1>New Arrivals</h1>
                        <button>
                            <span>View All</span>
                            <img src={chevronRight} alt="Chevron" />
                        </button>
                    </div>

                    <div className="arrivals-carousel">
                        <div className="item">
                            <img src={grande} alt="Item Name" className="item-cover" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Grande</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span className="item-description">Blossom Pouch</span>
                                <span className="item-price">$39.49</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src={coach} alt="Item Name" className="item-cover" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Coach</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span className="item-description">Leather Coach Bag</span>
                                <span className="item-price">$54.69</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src={remus} alt="Item Name" className="item-cover" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Remus</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span className="item-description">Brown Strap Bag</span>
                                <span className="item-price">$57.00</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src={boujee} alt="Item Name" className="item-cover" />
                            <div className="item-details">
                                <div className="name-fav">
                                    <span>Boujee</span>
                                    <img src={heart} alt="Heart" />
                                </div>
                                <span className="item-description">Black Bag</span>
                                <span className="item-price">$56.49</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="collections-container">
                    <h1>Handpicked Collections</h1>
                    <div className="collection">

                        <div className="category">
                            <img src={perfume} alt="Category Cover" />
                            <div className="shadow"></div>
                            <span>Personal Care</span>
                        </div>

                        <div className="category">
                            <img src={pinkBag} alt="Category Cover" />
                            <div className="shadow"></div>
                            <span>Handbags</span>
                        </div>

                        <div className="category">
                            <img src={watch} alt="Category Cover" />
                            <div className="shadow"></div>
                            <span>Wrist Watches</span>
                        </div>

                        <div className="category">
                            <img src={glasses} alt="Category Cover" />
                            <div className="shadow"></div>
                            <span>Sun Glasses</span>
                        </div>

                    </div>
                </div>

                <div className="brands-container">
                    <h1>Shop by Brands</h1>

                    <div className="brands">
                        <img src={zara} alt="Zara logo" />
                        <img src={dg} alt="D&G logo" />
                        <img src={hm} alt="H&M logo" />
                        <img src={chanel} alt="Chanel logo" />
                        <img src={prada} alt="Prada logo" />
                        <img src={biba} alt="Biba logo" />
                    </div>
                </div>

                <div className="banners">
                    <img src={hero2} alt="Banner Image" />
                    <div>
                        <img src={shortHero} alt="Small Banner Image" />
                        <img src={shortHero2} alt="Small Banner Image" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}