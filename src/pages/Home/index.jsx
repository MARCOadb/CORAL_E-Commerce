// COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroBanner from "../../components/heroBanner";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";

//IMAGES & ICONS
import hero3 from '../../assets/pics/hero-3.png'
import hero3Mobile from '../../assets/pics/hero3-mobile.png'
import shortHero from '../../assets/pics/short-hero.png'
import shortHeroMobile from '../../assets/pics/short-hero-mobile.png'
import shortHero2 from '../../assets/pics/short-hero-2.png'
import shortHero2Mobile from '../../assets/pics/short-hero-2-mobile.png'
import chevronRight from '../../assets/icon/chevron-right.svg'
import chevronRightSmall from '../../assets/icon/chevron-right-small.svg'
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
import skincare from '../../assets/icon/skincare.svg'
import jewllery from '../../assets/icon/jewellery.svg'
import handbags from '../../assets/icon/handbags.svg'
import watchIcon from '../../assets/icon/watch.svg'
import shortcuts from '../../assets/pics/shortcut-mobile.png'

//STYLES
import './style.scss'

export default function Home() {
    const { phone, desktop } = useBreakpoint();

    return (
        <>
            <Header />

            <div className="content">
                {desktop && (
                    <div className="warning">
                        <span>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <a href="#">here</a></span>
                    </div>
                )}

                <HeroBanner order={1} />

                {phone && (
                    <div className="categories-container">
                        <h1>Top Categories</h1>
                        <div className="categories">
                            <div className="category">
                                <div>
                                    <img src={skincare} />
                                </div>
                                <span>Skincare</span>
                            </div>

                            <div className="category">
                                <div>
                                    <img src={jewllery} />
                                </div>
                                <span>Jewllery</span>
                            </div>

                            <div className="category">
                                <div>
                                    <img src={handbags} />
                                </div>
                                <span>Handbags</span>
                            </div>

                            <div className="category">
                                <div>
                                    <img src={watchIcon} />
                                </div>
                                <span>Watches</span>
                            </div>

                            <div className="category">
                                <div>
                                    <img src={skincare} />
                                </div>
                                <span>Eyewear</span>
                            </div>

                            <div className="category">
                                <div>
                                    <img src={jewllery} />
                                </div>
                                <span>Jewllery</span>
                            </div>

                        </div>
                    </div>
                )}

                <div className="arrivals">
                    <div className="arrivals-title">
                        <h1>New Arrivals</h1>
                        <button>
                            <span>View All</span>
                            {phone ? (
                                <img src={chevronRightSmall} alt="Chevron" />
                            ) : (
                                <img src={chevronRight} alt="Chevron" />
                            )}
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
                    <div className="collections">

                        <h1>Handpicked Collections</h1>
                        <div className="collection">

                            <div className="collection-item">
                                <img src={perfume} alt="Category Cover" />
                                <div className="shadow"></div>
                                <span>Personal Care</span>
                            </div>

                            <div className="collection-item">
                                <img src={pinkBag} alt="Category Cover" />
                                <div className="shadow"></div>
                                <span>Handbags</span>
                            </div>

                            <div className="collection-item">
                                <img src={watch} alt="Category Cover" />
                                <div className="shadow"></div>
                                <span>Wrist Watches</span>
                            </div>

                            <div className="collection-item">
                                <img src={glasses} alt="Category Cover" />
                                <div className="shadow"></div>
                                <span>Sun Glasses</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="brands-container">
                    <div className="container-title">
                        <h1>Shop by Brands</h1>
                        <button>
                            {phone && (
                                <>
                                    <span>View All</span>
                                    <img src={chevronRightSmall} alt="Chevron" />
                                </>
                            )}

                        </button>
                    </div>

                    <div className="brands">
                        <img src={zara} alt="Zara logo" />
                        <img src={dg} alt="D&G logo" />
                        <img src={hm} alt="H&M logo" />
                        <img src={chanel} alt="Chanel logo" />
                        <img src={prada} alt="Prada logo" />
                        <img src={biba} alt="Biba logo" />
                    </div>
                </div>

                {phone && (
                    <div className="shortcut">
                        <img src={shortcuts} />
                    </div>
                )}

                <div className="banners-container">
                    {phone && (
                        <h1>Makeup & Skincare</h1>
                    )}
                    <div className="banners">
                        <img src={phone ? hero3Mobile : hero3} alt="Banner Image" />
                        <div>
                            <img src={phone ? shortHeroMobile : shortHero} alt="Small Banner Image" />
                            <img src={phone ? shortHero2Mobile : shortHero2} alt="Small Banner Image" />
                        </div>
                    </div>
                </div>

                {phone && (
                    <div className="trendings-container">
                        <h1>Trending Deals</h1>
                        <HeroBanner order={2} />
                    </div>
                )}

            </div>

            <Footer />
        </>
    )
}