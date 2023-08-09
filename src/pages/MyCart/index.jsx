import Breadcrump from "../../components/breadcrumpDesktop";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CartProduct from "../../components/cartProduct";
import "./style.scss";
import { useContext, useEffect, useState } from "react";
import { BagContext } from "../../contexts/BagContext";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import { AuthContext } from "../../contexts/AuthContext";
import flecha from "../../assets/icon/chevron-bottom.svg";
import useBreakpoint from "../../hooks/useBreakPoint";
import DefaultBtn from "../../components/defaultBtn";
import { useNavigate } from "react-router-dom";
const MyCart = () => {
  const { phone, desktop } = useBreakpoint();
  const { userProducts, taxPrice, subTotal, totalPrice, loading, update } = useContext(BagContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
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
  return (
    <>
      <Header />
      <Breadcrump />
      <h1 className="mycart">My Cart</h1>
      <div className="productinfo">
        <div className="table">
          <div className="txtpai">
            <span>Product Name</span>
            <div className="txtfilho">
              <p className="info">Price</p>
              <p className="info">Qty</p>
              <p className="info">Subtotal</p>
            </div>
          </div>
          <div style={{ gap: "30px" }}>
            {userProducts?.map((item, index) => (
              <div style={{ padding: "16px 0px" }}>
                <div style={{ display: "flex", gap: "101px" }}>
                  <CartProduct price showQnt data={item.data} qnt={item.qnt} key={item.uid} itemId={item.uid} />
                  <div className="itemsmap">
                    <span>{item.qnt}</span>
                    <span>${item.data.price}</span>
                  </div>
                </div>
                <div className="txtcontainer">
                  <span className="removetxt" onClick={() => deleteProduct(item.uid)} onTouchStart={() => deleteProduct(item.uid)}>
                    Remove
                  </span>
                  <span className="wishlisttxt" key={index}>
                    Move to Wishlist
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ordersummary">
          <h1>Order Summary</h1>
          <div className="linha"></div>
          <div style={{ padding: "30px 0px" }}>
            <div className="pricecontainer">
              <span style={{ color: "#626262", fontWeight: "500", lineHeight: "20px", fontSize: "16px" }}>Subtotal</span>
              <span style={{ color: "#171520", fontWeight: "500", lineHeight: "18px", fontSize: "16px" }}>${subTotal?.toFixed(2)}</span>
            </div>
            <div className="pricecontainer">
              <span style={{ color: "#626262", fontWeight: "500", lineHeight: "20px", fontSize: "16px" }}>Discount</span>
              <span style={{ color: "#171520", fontWeight: "500", lineHeight: "18px", fontSize: "16px" }}>$0</span>
            </div>
            <div className="pricecontainer">
              <span style={{ color: "#626262", fontWeight: "500", lineHeight: "20px", fontSize: "16px" }}>Delivery Fee</span>
              <span style={{ color: "#171520", fontWeight: "500", lineHeight: "18px", fontSize: "16px" }}>$0</span>
            </div>
            <div className="pricecontainer">
              <span style={{ color: "#171520", fontWeight: "600", lineHeight: "20px", fontSize: "16px" }}>Grand Total</span>
              <span style={{ color: "#171520", fontWeight: "600", lineHeight: "20px", fontSize: "16px" }}>${totalPrice?.toFixed(2)}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <DefaultBtn
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Place Order
            </DefaultBtn>

            <DefaultBtn
              onClick={() => {
                navigate("/");
              }}
              outlined
            >
              Continue Shopping
            </DefaultBtn>
          </div>
        </div>
      </div>
      <button onClick={buttonHandler} className="buttonDrop">
        Apply Coupon Code
        <img className="flecha" src={flecha} style={{ transform: `rotate(${coupon ? "180deg" : "0deg"})` }} />
      </button>
      {desktop && coupon ? (
        <>
          <div style={{ width: "50%", padding: "0px 20px" }}>
            <div className="couponContainer">
              <input className="body-medium" type="text" placeholder="Apply Coupon Code"></input>
              <input className="body-medium text-primary" type="submit" value="CHECK"></input>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};
export default MyCart;
