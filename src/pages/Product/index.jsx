import Header from "../../components/header";
import Footer from "../../components/footer";
import useBreakpoint from "../../hooks/useBreakPoint";
import { useContext, useState } from "react";
import productPhoto from '../../assets/pics/Product/product-image.png'
import SmallMinus from "../../assets/icon/SmallMinus";
import SmallPlus from "../../assets/icon/SmallPlus";
import StarSvg from "../../assets/icon/StarSvg";
import { BagContext } from "../../contexts/BagContext";
import { addBagProduct } from "../../services/addBagProduct";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import { setProductQnt } from "../../services/setProductQnt";
import DefaultBtn from "../../components/defaultBtn";
import BagSvg from "../../assets/icon/Bagsvg";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from "./style.module.scss";

export default function ProductPage() {
    const { update } = useContext(BagContext)

    const [activeTab, setActiveTab] = useState(1)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    const removeProduct = () => {
        deleteBagProduct('product id')//substituir pelo id do produto real
        update()
    }

    const addProduct = () => {
        addBagProduct('product id')//substituir pelo id do produto real
        update()
    }

    function handleChangeTabs(index) {
        setActiveTab(index)
    }

    return (
        <>
            <Header />

            <div className={styles.content}>
                <span className={styles.breadcrump}>BreadCrump aqui</span>

                <div className={styles.product}>
                    <div className={styles.productImages}>
                        <img src={productPhoto} alt="Product Image" className={styles.imageBig} />
                        <div className={styles.carousel}>
                            carousel
                            {/* <Slider {...settings}>
                                <img src={productPhoto} />
                                <img src={productPhoto} />
                                <img src={productPhoto} />
                                <img src={productPhoto} />
                            </Slider> */}
                        </div>
                    </div>
                    <div className={styles.productContent}>

                        <h1 className="text-dark display-medium">Coach</h1>
                        <span className="text-low-emphasis display-small">Leather Coach Bag with adjustable starps.</span>

                        <div className={styles.ratingsContainer}>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                                <StarSvg fill="#FF8C4B" stroke="#FF8C4B" />
                                <StarSvg fill="#B6B6B6" stroke="#B6B6B6" />
                            </div>
                            <span className="text-light title-medium ">(250) Ratings</span>
                        </div>

                        <div className={styles.productPrice}>
                            <h1 className="text-high-emphasis display-large">$54.69</h1>
                            <h2 className="text-light display-medium strike">$78.66</h2>
                            <h3 className="text-vibrant display-small">50%OFF</h3>
                        </div>

                        <span className={styles.seperator}></span>

                        <div className={styles.delivery}>
                            <div className={styles.deliveryTitle}>
                                <span className="text-high-emphasis display-small">Delivery Details</span>
                                <span className="text-low-emphasis body-medium">Check estimated delivery date/pickup option.</span>
                            </div>
                            <input className={`${styles.deliveryPincode} body-medium`} type="text" placeholder="Apply Valid Pincode" />
                            <span className={`${styles.checkBtn} text-primary title-regular`}>CHECK</span>
                        </div>

                        <div className={styles.quantityContainer}>
                            <span className="text-dark display-small ">Quantity:</span>
                            <div className={styles.stepperContainer}>
                                <SmallMinus onClick={removeProduct} />
                                <input type="number" placeholder='1'></input>
                                <SmallPlus onClick={addProduct} />
                            </div>
                        </div>

                        <div className={styles.cupomContainer}>
                            <div className={styles.cupons}>
                                <div className={styles.cupom}>
                                    <div className={styles.cupomDescription}>
                                        <span className="text-high-emphasis body-medium ">Get upto 30% Off on order value above $100</span>
                                        <span className="text-primary body-small">Terms & Conditions</span>
                                    </div>
                                    <div className={styles.cupomCode}>
                                        <span className="text-low-emphasis body-small">Use Code</span>
                                        <span className="text-high-emphasis body-medium">ORDER100</span>
                                    </div>
                                </div>

                                <div className={styles.cupom}>
                                    <div className={styles.cupomDescription}>
                                        <span className="text-high-emphasis body-medium ">Get upto 30% Off on order value above $100</span>
                                        <span className="text-primary body-small">Terms & Conditions</span>
                                    </div>
                                    <div className={styles.cupomCode}>
                                        <span className="text-low-emphasis body-small">Use Code</span>
                                        <span className="text-high-emphasis body-medium">ORDER100</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <DefaultBtn icon={<BagSvg stroke={'#fff'} />} width={'328px'} height={'44px'}>Add to bag</DefaultBtn>
                            <DefaultBtn icon={<WishlistSvg />} outlined width={'240px'} height={'44px'}>Add to wishlist</DefaultBtn>
                        </div>
                    </div>
                </div>

                <div className={styles.productTabs}>
                    <div className={styles.tabsTitle}>
                        <div className={styles.tabsBar} style={activeTab === 3 ? { left: `${(activeTab - 1) * 199 + 20}px` } : { left: `${(activeTab - 1) * 199 + 16}px` }}></div>
                        <span className={`${styles.tabs} ${activeTab === 1 && styles.tabsActive}`} onClick={() => handleChangeTabs(1)}>Product Description</span>
                        <span className={`${styles.tabs} ${activeTab === 2 && styles.tabsActive}`} onClick={() => handleChangeTabs(2)}>Related Products</span>
                        <span className={`${styles.tabs} ${activeTab === 3 && styles.tabsActive}`} onClick={() => handleChangeTabs(3)}>Ratings and Reviews</span>
                    </div>

                    <div className={styles.tabsContainer}>
                        <div className={`${styles.tabsContent} ${activeTab === 1 && styles.tabsContentActive}`}>
                            <p className="text-low-emphasis body-medium">
                                Descrição do produto
                            </p>
                        </div>

                        <div className={`${styles.tabsContent} ${activeTab === 2 && styles.tabsContentActive}`}>
                            <p className="text-low-emphasis body-medium">
                                Produtos semelhantes
                            </p>
                        </div>

                        <div className={`${styles.tabsContent} ${activeTab === 3 && styles.tabsContentActive}`}>
                            <p className="text-low-emphasis body-medium">
                                Reviews
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}