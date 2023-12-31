import { useContext, useEffect, useState } from "react";
import ArrowLineSvg from "../../assets/icon/ArrowLineSvg";
import DefaultBtn from "../defaultBtn";
import Modal from "../modal";
import style from "./style.module.scss";
import { BagContext } from "../../contexts/BagContext";
import CartProduct from "../cartProduct";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderModal = ({ setOpen, open }) => {
  const { userProducts, subTotal, taxPrice, totalPrice } = useContext(BagContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = () => {
    navigate(`/bag`, {
      state: {
        path: !!location.state?.path ? location.state.path : "home",
        category: "bag",
      },
    });
  };
  return (
    <>
      <Modal setOpen={setOpen} open={open}></Modal>
      <div className={open ? `${style.headerModal} ${style.modalOpenContainer}` : `${style.headerModal} ${style.modalClosedContainer} `}>
        <div className={style.topContainer}>
          <ArrowLineSvg stroke={"#1B4B66"} onClick={() => setOpen(false)} rotate={180} viewBox={"0 1 24 24"} />
          <span className="display-small text-primary">Back</span>
        </div>
        <div className={style.itemContainer}>
          {userProducts?.map((item, index) => (
            <div key={index * 10}>
              <CartProduct price remove data={item.data} qnt={item.qnt} key={item.uid} itemId={item.uid} stepper />
              <div key={index} className={style.separator}></div>
            </div>
          ))}
        </div>
        <div className={style.priceContainer} style={{ flexDirection: "column", gap: "12px", padding: "0px 8.5px" }}>
          <div className={`${style.priceContainer} label-large`}>
            <span>Subtotal:</span>
            <span>${subTotal?.toFixed(2)}</span>
          </div>
          <div className={`${style.priceContainer} label-large`}>
            <span>Tax:</span>
            <span>${taxPrice?.toFixed(2)}</span>
          </div>
          <div className={`${style.priceContainer} body-medium`}>
            <span>Total</span>
            <span>${totalPrice?.toFixed(2)}</span>
          </div>
        </div>
        <div style={{ width: "100%", padding: "0px 9px" }}>
          <div className={style.couponContainer}>
            <input className="body-medium" type="text" placeholder="Aplly Coupon Code"></input>
            <input className="title-regular text-primary" type="submit" value="CHECK" style={{ cursor: "pointer" }}></input>
          </div>
        </div>
        <div style={{ width: "100%", padding: "0px 9px" }}>
          <DefaultBtn onClick={handleNavigate}>Place Order</DefaultBtn>
        </div>
        <span onClick={() => setOpen(false)} className="title-regular text-primary" style={{ lineHeight: "24px", textDecoration: "underline", cursor: "pointer" }}>
          Continue Shopping
        </span>
      </div>
    </>
  );
};
export default HeaderModal;
