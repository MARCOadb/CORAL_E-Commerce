import styles from "./style.module.scss";
import { useContext, useState } from "react";
import { addBagProduct } from "../../services/addBagProduct";
import { BagContext } from "../../contexts/BagContext";
import CrossSvg from "../../assets/icon/CrossSvg";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import { setProductQnt } from "../../services/setProductQnt";
import MinusSvg from "../../assets/icon/MinusSvg";
import PlusSvg from "../../assets/icon/PlusSvg";
import SmallMinus from "../../assets/icon/SmallMinus";
import SmallPlus from "../../assets/icon/SmallPlus";
import { AuthContext } from "../../contexts/AuthContext";

/*PROPS
  {
    largura: number;
    altura: number;
    button?: Boolean;
    label?: Boolean;
    ratings?:Boolean;
    discount?:Boolean;
    oldprice?:Boolean;
    sort?:Boolean;
  }
*/

const CartProduct = ({ data, qnt, stepper, price, remove }) => {
  const { update } = useContext(BagContext);
  const { user } = useContext(AuthContext);
  const deleteProduct = () => {
    deleteBagProduct(user.uid, data.id, true);
    update();
  };
  const addProduct = () => {
    addBagProduct(user.uid, data.id);
    update();
  };
  const removeProduct = () => {
    deleteBagProduct(user.uid, data.id);
    update();
  };
  const setProduct = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (e.target.value > 0) setProductQnt(data.id, parseInt(e.target.value));
      else deleteBagProduct(data.id, true);
      update();
    }
  };

  return (
    <div className={styles.cardVertical}>
      <img src={data.image} style={{ height: "80px", width: "75px", borderRadius: "8px" }} />
      <div className={styles.detailsContainer}>
        <span>{data.name}</span>
        <span>{data.description}</span>
        {qnt && <span>Qty- {data.qnt}</span>}
        {stepper && (
          <div className={styles.stepperContainer}>
            <SmallMinus onClick={removeProduct} />
            <input type="number" onKeyUp={setProduct} placeholder={data.qnt}></input>
            <SmallPlus onClick={addProduct} />
          </div>
        )}
      </div>
      <div className={styles.priceContainer}>
        {remove && <CrossSvg stroke={"#626262"} onClick={deleteProduct} />}
        {price && <span>${data.price}</span>}
      </div>
    </div>
  );
};
export default CartProduct;
