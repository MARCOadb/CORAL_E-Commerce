import Header from "../../components/header";
import Footer from "../../components/footer";
import useBreakpoint from "../../hooks/useBreakPoint";
import { useContext, useState } from "react";

import productPhoto from '../../assets/pics/Product/product-image.png'       //
import pic2 from '../../assets/pics/Home/bolsa-remus.png'                      //
import pic3 from '../../assets/pics/Home/bolsa-boujee.png'                   //fotos aleatórias simulando fotos do produto
import pic4 from '../../assets/pics/Home/glasses.png'                        //

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
import ChevronRightSvg from '../../assets/icon/ChevronRightSvg'

import styles from "./style.module.scss";
import MobileLayout from "../../layouts/mobileLayout";

export default function ProductPage() {
    const { update } = useContext(BagContext)
    const { phone, desktop } = useBreakpoint()

    const productImages = [
        productPhoto,               //
        pic2,                       //
        pic3,                       //fotos aleatórias simulando fotos do produto
        pic4,                       //
    ]

    const [activePic, setActivePic] = useState(0)
    const [activeTab, setActiveTab] = useState(1)

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

    function handleNextImg() {
        if (activePic === (productImages.length - 1)) {
            setActivePic(0)
        } else {
            setActivePic(activePic + 1)
        }
    }

    function handlePrevImg() {
        if (activePic === 0) {
            setActivePic(productImages.length - 1)
        } else {
            setActivePic(activePic - 1)
        }
    }

    function handleChangeImg(index) {
        setActivePic(index)
    }

    return (
        <>
            {phone ? (
                <MobileLayout
                    icon='arrow' iconAngle={90}
                    iconStroke='#13101E'
                    footerPrefix={<div style={{ display: 'flex', alignItems: 'center' }}><WishlistSvg onClick={() => alert('adicionar a wishlist')} width={44} /></div>}
                    buttons={[{ text: 'Add to Bag', outlined: false, onClick: () => alert('adicionar a bag'), btnIcon: <BagSvg stroke='#fff' /> }]}
                    open
                >
                    <div className={styles.content}>
                        <div className={styles.product}>
                            <div className={styles.productImages}>
                                <div className={styles.carousel}>
                                    {productImages.map((image) => (
                                        <div>
                                            <img src={image} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.productContent}>

                                <h1 className="text-high-emphasis body-medium" style={{ marginBottom: '4px' }}>Coach</h1>
                                <span className="text-low-emphasis title-medium">Leather Coach Bag with adjustable starps.</span>

                                <div className={styles.productPrice}>
                                    <h1 className="text-high-emphasis display-small">$54.69</h1>
                                    <h2 className="text-light title-medium strike">$78.66</h2>
                                    <h3 className="text-vibrant title-medium">50%OFF</h3>
                                </div>

                                <div className={styles.ratingsContainer}>
                                    <div className={styles.mobRatingsStar}>
                                        <span>4.5</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={20} height={20} />
                                    </div>

                                    <div className={styles.mobRatingsAmount}>
                                        <span className="text-high-emphasis title-regular">Average Rating</span>
                                        <span className="text-low-emphasis title-medium">43 Ratings & 23 Reviews</span>
                                    </div>
                                </div>

                                <div className={styles.cupomContainer}>
                                    <div className={styles.cupons}>
                                        <div className={styles.cupom}>
                                            <div className={styles.cupomDescription}>
                                                <span className="text-high-emphasis link ">Get upto 30% Off on order value above $100</span>
                                                <span className="text-primary extra-small-label">Terms & Conditions</span>
                                            </div>
                                            <div className={styles.cupomCode}>
                                                <span className="text-low-emphasis extra-small-label">Use Code</span>
                                                <span className="text-high-emphasis link">ORDER100</span>
                                            </div>
                                        </div>

                                        <div className={styles.cupom}>
                                            <div className={styles.cupomDescription}>
                                                <span className="text-high-emphasis link ">Get upto 30% Off on order value above $100</span>
                                                <span className="text-primary extra-small-label">Terms & Conditions</span>
                                            </div>
                                            <div className={styles.cupomCode}>
                                                <span className="text-low-emphasis extra-small-label">Use Code</span>
                                                <span className="text-high-emphasis link">ORDER100</span>
                                            </div>
                                        </div>

                                        <div className={styles.cupom}>
                                            <div className={styles.cupomDescription}>
                                                <span className="text-high-emphasis link ">Get upto 30% Off on order value above $100</span>
                                                <span className="text-primary extra-small-label">Terms & Conditions</span>
                                            </div>
                                            <div className={styles.cupomCode}>
                                                <span className="text-low-emphasis extra-small-label">Use Code</span>
                                                <span className="text-high-emphasis link">ORDER100</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.delivery}>
                                    <div className={styles.deliveryTitle}>
                                        <span className="text-high-emphasis title-regular">Delivery Details</span>
                                        <span className="text-low-emphasis title-medium">Check estimated delivery date/pickup option.</span>
                                    </div>
                                    <input className={`${styles.deliveryPincode} title-medium`} type="text" placeholder="Apply Valid Pincode" />
                                    <span className={`${styles.checkBtn} text-primary title-regular`}>CHECK</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </MobileLayout>
            ) : (
                <>
                    <Header />
                    <div className={styles.content}>
                        <span className={styles.breadcrump}>BreadCrump aqui</span>

                        <div className={styles.product}>
                            <div className={styles.productImages}>
                                <img src={productImages[activePic]} alt="Product Image" className={styles.imageBig} />
                                <div className={styles.carouselContainer}>
                                    <ChevronRightSvg rotate={180} stroke={'#171520'} onClick={handlePrevImg} />
                                    <div className={styles.carousel}>
                                        {productImages.map((image, index) => (
                                            <img src={image} key={index} className={`${activePic === index && styles.activePicture}`} onClick={() => handleChangeImg(index)} />
                                        ))}
                                    </div>
                                    <ChevronRightSvg stroke={'#171520'} onClick={handleNextImg} />
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
                                    <DefaultBtn onClick={() => alert('adicionar a bag')} icon={<BagSvg stroke={'#fff'} />} width={'328px'} height={'44px'} >Add to bag</DefaultBtn>
                                    <DefaultBtn onClick={() => alert('adicionar a wishlist')} icon={<WishlistSvg />} outlined width={'240px'} height={'44px'}>Add to wishlist</DefaultBtn>
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
            )}
        </>
    )
}