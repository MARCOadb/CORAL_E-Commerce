import Breadcrump from "../../components/breadcrumpDesktop";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CartProduct from "../../components/cartProduct";
import styles from "./style.module.scss";
import { useContext, useEffect, useState } from "react";
import { BagContext } from "../../contexts/BagContext";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import { AuthContext } from "../../contexts/AuthContext";
import flecha from "../../assets/icon/chevron-bottom.svg";
import useBreakpoint from "../../hooks/useBreakPoint";
import DefaultBtn from "../../components/defaultBtn";
import { useLocation, useNavigate } from "react-router-dom";
const MyCart = () => {
  const { phone, desktop } = useBreakpoint();
  const { userProducts, taxPrice, subTotal, totalPrice, loading, update } = useContext(BagContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const deleteProduct = (itemId) => {
    deleteBagProduct(user.uid, itemId, true);
    update();
  };
  const [coupon, setCoupon] = useState(false);

  const buttonHandler = (e) => {
    e.preventDefault();
    if (coupon == false) {
      setCoupon(true);
    } else {
      setCoupon(false);
    }
  };

  const handleNavigate = (category) => {
    category
      ? navigate(`/${category}`, {
        state: {
          path: location.state.path,
          category: category,
        },
      })
      : navigate("/");
  };

  return (
    <>
      <Header />
      <Breadcrump />
      <h1 className={styles.mycart}>My Cart</h1>
      <div className={styles.productinfo}>
        <div className={styles.table}>
          <div className={`${styles.txtpai} body-medium text-low-emphasis`}>
            <span>Product Name</span>
            <div className={styles.txtfilho}>
              <p className={styles.info}>Price</p>
              <p className={styles.info}>Qty</p>
              <p className={styles.info}>Subtotal</p>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.productContainer}>
            {userProducts?.map((item, index) => (
              <div className={styles.product}>
                <div className={styles.productData}>
                  <CartProduct price showQnt data={item.data} largura={476} qnt={item.qnt} key={item.uid} itemId={item.uid} />
                  <div className={styles.itemsmap}>
                    <span className="label-large text-high-emphasis">{item.qnt}</span>
                    <span className="label-large text-high-emphasis">${item.data?.price % 1 === 0 ? `${item.data?.price}.00` : item.data?.price}</span>
                  </div>
                </div>
                <div className={styles.txtcontainer}>
                  <button className={styles.removetxt} onClick={() => deleteProduct(item.uid)} onTouchStart={() => deleteProduct(item.uid)}>
                    Remove
                  </button>
                  <button className={styles.wishlisttxt} key={index}>
                    Move to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={buttonHandler} className={styles.buttonDrop}>
            <span className="body-medium text-dark">Apply Coupon Code</span>
            <img className="flecha" src={flecha} style={{ transform: `rotate(${coupon ? "180deg" : "0deg"})` }} />
          </button>
          {desktop && coupon ? (
            <>
              <div style={{ width: "360px" }}>
                <div className={styles.couponContainer}>
                  <input className="body-medium" type="text" placeholder="Apply Coupon Code"></input>
                  <input className="title-regular text-primary" type="submit" value="CHECK"></input>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className={styles.ordersummary}>
          <h1 className="display-small">Order Summary</h1>
          <div className={styles.separator}></div>
          <div className={styles.pricesContainer}>
            <div className={styles.pricecontainer}>
              <span className="body-medium text-low-emphasis">Subtotal</span>
              <span className="body-medium text-high-emphasis">${subTotal?.toFixed(2)}</span>
            </div>
            <div className={styles.pricecontainer}>
              <span className="body-medium text-low-emphasis">Discount</span>
              <span className="body-medium text-high-emphasis">$0</span>
            </div>
            <div className={styles.pricecontainer}>
              <span className="body-medium text-low-emphasis">Delivery Free</span>
              <span className="body-medium text-high-emphasis">$0</span>
            </div>
            <div className={styles.pricecontainer}>
              <span className="body-medium text-high-emphasis" style={{ fontWeight: '600' }}>Grand Total</span>
              <span className="body-medium text-high-emphasis" style={{ fontWeight: '600' }}>${totalPrice?.toFixed(2)}</span>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button className={`${styles.defaultBtn} body-medium`} onClick={() => handleNavigate("checkout")}>Place Order</button>
            <button className={`${styles.defaultBtn} ${styles.outlined} body-medium`} onClick={() => handleNavigate()} >Continue Shopping</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyCart;
