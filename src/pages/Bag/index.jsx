import { useNavigate } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakPoint";
import MyCart from "../MyCart";
import styles from './style.module.scss'
import CrossSvg from "../../assets/icon/CrossSvg";
import { useContext } from "react";
import { BagContext } from "../../contexts/BagContext";
import { useEffect } from "react";
import CartProduct from "../../components/cartProduct";
import noItem from '../../assets/pics/Layouts/bag.png'

export default function Bag() {
    const { desktop, phone } = useBreakpoint()
    const navigate = useNavigate()

    const { userProducts, taxPrice, subTotal, totalPrice, loading, update } = useContext(BagContext)

    return (
        <>
            {desktop ? (
                <MyCart />
            ) : (
                <>
                    <div className={styles.content}>
                        <div className={styles.topbarContainer}>
                            <div className={styles.topbar}>
                                <CrossSvg stroke={'#13101E'} onClick={() => navigate('/')} />
                                <h1 className="text-primary display-small">My Bag</h1>
                            </div>
                        </div>

                        {userProducts.length > 0 ? (
                            <>
                                <div className={styles.itemsContainer}>
                                    {userProducts?.map((item) => (
                                        <CartProduct price showQnt data={item.data} qnt={item.qnt} key={item.uid} itemId={item.uid} />
                                    ))}

                                    <div className={styles.couponContainer}>
                                        <input type="text" placeholder="Apply Coupon Code" className="text-high-emphasis body-small" />
                                        <span className="text-primary title-regular">CHECK</span>
                                    </div>

                                    <div className={styles.circles}></div>
                                </div>

                                <div className={styles.orderDetails}>
                                    <h1 className="text-high-emphasis title-regular">Order Details</h1>
                                    <div className={styles.orderInfos}>
                                        <div>
                                            <span className="text-low-emphasis title-medium">Sub Total</span>
                                            <span className="text-high-emphasis title-medium">${subTotal.toFixed(2)}</span>
                                        </div>

                                        <div>
                                            <span className="text-low-emphasis title-medium">Discount</span>
                                            <span className="text-high-emphasis title-medium">$0.00</span>
                                        </div>

                                        <div>
                                            <span className="text-low-emphasis title-medium">Delivery Fee</span>
                                            <span className="text-high-emphasis title-medium">${taxPrice.toFixed(2)}</span>
                                        </div>

                                        <div>
                                            <span className="text-high-emphasis title-regular">Grand Total</span>
                                            <span className="text-high-emphasis title-regular">${totalPrice.toFixed(2)}</span>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.downbarContainer}>
                                    <div className={styles.totalAmount}>
                                        <div>
                                            <span className="text-low-emphasis link">Total Bag Amount</span>
                                            <span className="text-high-emphasis body-medium">${totalPrice.toFixed(2)}</span>
                                        </div>
                                        <button className="title-regular">Place Order</button>
                                    </div>
                                </div>

                                <div className={styles.downbarContainer}>
                                    <div className={styles.totalAmount}>
                                        <div>
                                            <span className="text-low-emphasis link">Total Bag Amount</span>
                                            <span className="text-high-emphasis body-medium">${totalPrice.toFixed(2)}</span>
                                        </div>
                                        <button className="title-regular" onClick={() => navigate('/checkout')}>Place Order</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.imgContainer}>
                                    <img src={noItem} alt="No Item on Wishlist" />

                                    <div>
                                        <h1 className="text-high-emphasis">Uh Oh....!</h1>
                                        <span className="text-high-emphasis title-medium">You haven’t added any any items. Start shopping to make your bag bloom</span>
                                    </div>

                                    <div className={styles.continue}>
                                        <button className="title-regular" onClick={() => navigate('/')}>Continue Shopping</button>
                                    </div>
                                </div>
                            </>
                        )}


                    </div>
                </>
            )}
        </>
    )
}
