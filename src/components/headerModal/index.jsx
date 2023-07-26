import ArrowSvg from "../../assets/icon/ArrowSvg";
import DefaultBtn from "../defaultBtn";
import Modal from "../modal";
import style from "./style.module.scss";

const HeaderModal = ({ setOpen, open }) => {
  return (
    <>
      <Modal setOpen={setOpen} open={open}></Modal>

      <div className={open ? `${style.headerModal} ${style.modalOpenContainer}` : `${style.headerModal} ${style.modalClosedContainer} `}>
        <div className={style.topContainer}>
          <ArrowSvg />
          <span>Back</span>
        </div>
        <div className={style.itemContainer}></div>
        <div className={style.priceContainer}></div>
        <DefaultBtn />
        <div className={style.couponContainer}>
          <input className="body-medium" type="text" placeholder="Aplly Coupon Code"></input>
          <input type="submit" value="CHECK"></input>
        </div>
      </div>
    </>
  );
};
export default HeaderModal;
