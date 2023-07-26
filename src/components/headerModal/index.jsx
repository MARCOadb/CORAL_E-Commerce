import { useEffect, useState } from "react";
import ArrowLineSvg from "../../assets/icon/ArrowLineSvg";
import DefaultBtn from "../defaultBtn";
import Modal from "../modal";
import style from "./style.module.scss";
import Product from "../product";
import { getWishlist } from "../../services/getWishlist";
import { getBag } from "../../services/getBag";

const HeaderModal = ({ setOpen, open, wishlist }) => {
  const [cart, setCart] = useState(null);
  const [cartItens, setCartItens] = useState(null);

  const [loading, setLoading] = useState(false);

  const getProductById = async (id) => {
    setLoading(true);
    const produto = await getProductById(id);
    return produto;
  };

  useEffect(() => {
    if (wishlist != null) {
      setCart("wishlist");
      setCartItens(getWishlist());
    } else {
      setCart("bag");
      setCartItens(getBag());
    }
    const itens = cartItens?.map((item) => getProductById(item));
    console.log(itens);
  }, []);
  return (
    <>
      <Modal setOpen={setOpen} open={open}></Modal>

      <div className={open ? `${style.headerModal} ${style.modalOpenContainer}` : `${style.headerModal} ${style.modalClosedContainer} `}>
        <div className={style.topContainer}>
          <ArrowLineSvg stroke={"#1B4B66"} onClick={() => setOpen(false)} rotate={180} viewBox={"0 1 24 24"} />
          <span>Back</span>
        </div>
        <div className={style.itemContainer}>{console.log(cartItens)}</div>
        <div className={style.priceContainer}></div>
        <DefaultBtn>Place Order</DefaultBtn>
        <div className={style.couponContainer}>
          <input className="body-medium" type="text" placeholder="Aplly Coupon Code"></input>
          <input className="body-medium text-primary" type="submit" value="CHECK"></input>
        </div>
        <span onClick={() => setOpen(false)} className="title-regular text-primary" style={{ lineHeight: "24px", textDecoration: "underline" }}>
          Continue Shopping
        </span>
      </div>
    </>
  );
};
export default HeaderModal;
