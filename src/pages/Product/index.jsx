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

import styles from "./style.module.scss";

export default function ProductPage() {
    const { update } = useContext(BagContext)


    const removeProduct = () => {
        deleteBagProduct('product id')//substituir pelo id do produto real
        update()
    }

    const addProduct = () => {
        addBagProduct('product id')//substituir pelo id do produto real
        update()
    }

    return (
        <>
            <Header />

            <div className={styles.content}>
                <span className={styles.breadcrump}>BreadCrump aqui</span>

                <div className={styles.product}>
                    <img src={productPhoto} alt="Product Image" />
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
                            <span className="display-small text-dark">Quantity:</span>
                            <div className={styles.stepperContainer}>
                                <SmallMinus onClick={removeProduct} />
                                <input type="number" placeholder='1'></input>
                                <SmallPlus onClick={addProduct} />
                            </div>
                        </div>

                        <div className={styles.cupomContainer}>
                            <div className={styles.cupons}>
                                <div className={styles.cupom}>
                                    <span>Get upto 30% Off on order value above $100</span>
                                </div>

                                <div className={styles.cupom}>
                                    <span>Get upto 30% Off on order value above $100</span>
                                </div>

                                <div className={styles.cupom}>
                                    <span>Get upto 30% Off on order value above $100</span>
                                </div>

                                <div className={styles.cupom}>
                                    <span>Get upto 30% Off on order value above $100</span>
                                </div>
                            </div>
                        </div>

                        <span>2 botoes</span>

                    </div>
                </div>
            </div>














            {/* <div className={styles.productImage}>

            </div>
            <ProductPhotos />
            <Tabs />
            <div className={styles.productInfo}>
                <div className={styles.ProductNameAndDescription}>
                    <h1 className="product-name display-medium">Coach</h1>
                    <h2 className="description display-small">Leather Coach Bag with adjustable starps.</h2>
                </div>
                <div className="ratings"></div>
                <div className="product-pricing display-large">$54.69
                    <div className="subscribed-pricing">$78.66</div>
                    <div className="discount display-small">50%OFF</div></div>
                <div className="seperator"></div>
                <div className="pin-code-check">
                    <h1 className="display-small">Delivery Details</h1>
                    <h2 className="body-medium">Check estimated delivery date/pickup option.</h2>
                    <div className="pin-code"><input placeholder="Apply Valid Pincode" className="body-medium" /><button className="title-regular">CHECK</button></div>

                </div>
                <QuantityInput />
                <Element className="offers">
                    <div className="offers-container">
                        <h1 className="body-medium">Get upto 30% Off on order value above $100</h1>
                        <h2 className="body-small">Terms & Conditions</h2>
                        <div className="offers-code">
                            <h1 className="body-small">Use Code</h1>
                            <button className="code body-medium" >ORDER100</button>
                        </div>
                    </div>
                    <div className="offers-container">
                        <h1 className="body-medium">Get upto 30% Off on order value above $100</h1>
                        <h2 className="body-small">Terms & Conditions</h2>
                        <div className="offers-code">
                            <h1 className="body-small">Use Code</h1>
                            <button className="code body-medium" >ORDER100</button>
                        </div>
                    </div>
                </Element> 
        </div >*/}

            <Footer />
        </>
    )
}