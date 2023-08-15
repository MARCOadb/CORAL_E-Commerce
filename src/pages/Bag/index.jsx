import { useNavigate } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakPoint";
import MyCart from "../MyCart";
import styles from './style.module.scss'
import CrossSvg from "../../assets/icon/CrossSvg";
import image from '../../assets/pics/Home/bolsa-boujee.png'
import ChevronRightSmallsvg from "../../assets/icon/ChevronRightSmallsvg";
import circles from '../../assets/pics/Bag/Frame 6.png'

export default function Bag() {
    const { desktop, phone } = useBreakpoint()
    const navigate = useNavigate()

    return (
        <>
            {desktop ? (
                <MyCart />
            ) : (
                <>
                    <div className={styles.content}>
                        <div className={styles.topbar}>
                            <CrossSvg stroke={'#13101E'} />
                            <h1 className="text-primary display-small">My Bag</h1>
                        </div>

                        <div className={styles.itemsContainer}>
                            <div className={styles.bagItem}>
                                <div className={styles.itemContent}>
                                    <img src={image} />
                                    <div className={styles.itemDetails}>
                                        <span className="text-high-emphasis label-small" style={{ marginBottom: '2px' }}>Boujee</span>
                                        <span className="text-low-emphasis label-medium" style={{ marginBottom: '7px' }}>Leather Coach Bag</span>
                                        <label className={styles.qty}>
                                            <span className="text-low-emphasis link">Qty:</span>
                                            <select>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                            <label>
                                                <ChevronRightSmallsvg stroke={'#13101E'} rotate={90} />
                                            </label>
                                        </label>
                                        <div>
                                            <span className="text-high-emphasis title-regular">$54.69</span>
                                            <span className="text-low-emphasis extra-small-label strike">$69.99</span>
                                            <span className="text-vibrant extra-small-label">20% OFF</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.itemButtons}>
                                    <button className='text-primary title-regular'>Move to Wishlist</button>
                                    <div className={styles.verticalSeparator}> </div>
                                    <button className='text-primary title-regular'>Remove</button>
                                </div>
                            </div>

                            <div className={styles.bagItem}>
                                <div className={styles.itemContent}>
                                    <img src={image} />
                                    <div className={styles.itemDetails}>
                                        <span className="text-high-emphasis label-small" style={{ marginBottom: '2px' }}>Boujee</span>
                                        <span className="text-low-emphasis label-medium" style={{ marginBottom: '7px' }}>Leather Coach Bag</span>
                                        <label className={styles.qty}>
                                            <span className="text-low-emphasis link">Qty:</span>
                                            <select>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                            <label>
                                                <ChevronRightSmallsvg stroke={'#13101E'} rotate={90} />
                                            </label>
                                        </label>
                                        <div>
                                            <span className="text-high-emphasis title-regular">$54.69</span>
                                            <span className="text-low-emphasis extra-small-label strike">$69.99</span>
                                            <span className="text-vibrant extra-small-label">20% OFF</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.itemButtons}>
                                    <button className='text-primary title-regular'>Move to Wishlist</button>
                                    <div className={styles.verticalSeparator}> </div>
                                    <button className='text-primary title-regular'>Remove</button>
                                </div>
                            </div>

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
                                    <span className="text-high-emphasis title-medium">$119.69</span>
                                </div>

                                <div>
                                    <span className="text-low-emphasis title-medium">Discount</span>
                                    <span className="text-high-emphasis title-medium">$00.00</span>
                                </div>

                                <div>
                                    <span className="text-low-emphasis title-medium">Delivery Fee</span>
                                    <span className="text-high-emphasis title-medium">$00.00</span>
                                </div>

                                <div>
                                    <span className="text-high-emphasis title-regular">Grand Total</span>
                                    <span className="text-high-emphasis title-regular">$119.69</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
