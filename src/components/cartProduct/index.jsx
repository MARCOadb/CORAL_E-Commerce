import styles from "./style.module.scss";
import { useContext, useState, useEffect } from "react";
import { addBagProduct } from "../../services/addBagProduct";
import { BagContext } from "../../contexts/BagContext";
import CrossSvg from "../../assets/icon/CrossSvg";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import { setProductQnt } from "../../services/setProductQnt";
import { setWishlistProduct } from "../../services/setWishlistProduct";
import SmallMinus from "../../assets/icon/SmallMinus";
import SmallPlus from "../../assets/icon/SmallPlus";
import { AuthContext } from "../../contexts/AuthContext";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebaseConnection";
import useBreakpoint from "../../hooks/useBreakPoint";
import ChevronRightSmallsvg from "../../assets/icon/ChevronRightSmallsvg";
import { toast } from "react-toastify";


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

const CartProduct = ({ data, qnt, stepper, price, remove, itemId, showQnt, largura }) => {
  const [productImage, setProductImage] = useState(null);
  const { desktop, phone } = useBreakpoint()

  const { update } = useContext(BagContext);
  const { user } = useContext(AuthContext);

  const deleteProduct = () => {
    deleteBagProduct(user.uid, itemId, true);
    update({ products: false });
  };

  const addProduct = () => {
    addBagProduct(user.uid, itemId);
    update({ products: false });
  };

  const removeProduct = () => {
    deleteBagProduct(user.uid, itemId);
    update({ products: false });
  };

  const wishlistProduct = () => {
    setWishlistProduct(user.uid, itemId);
    update({ products: false });
  };

  const setProduct = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (e.target.value > 0) setProductQnt(user.uid, itemId, parseInt(e.target.value));
      else deleteBagProduct(itemId, true);
      update({ products: false });
    }
  };

  const storageRef = ref(storage, `productsImg/${data.name}`);

  useEffect(() => {
    const getImages = async () => {
      await getDownloadURL(storageRef).then((response) => {
        setProductImage(response);
      });
    };
    getImages();
  }, []);

  return (
    <>
      {desktop ? (
        <div className={styles.cardVertical} style={largura && { width: largura + 'px' }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <img src={productImage} style={{ height: "80px", width: "75px", borderRadius: "8px", objectFit: 'cover' }} />
            <div className={styles.detailsContainer}>
              <span className="body-medium text-high-emphasis">{data.name}</span>
              <span className="body-regular text-low-emphasis">{data.description}</span>
              {showQnt && <span className="body-regular text-low-emphasis">Qty- {qnt}</span>}
              {stepper && (
                <div className={styles.stepperContainer}>
                  <SmallMinus onClick={removeProduct} />
                  <input type="number" onKeyUp={setProduct} placeholder={qnt}></input>
                  <SmallPlus onClick={addProduct} />
                </div>
              )}
            </div>
          </div>
          {price || remove && (
            <div className={styles.priceContainer}>
              {remove && <CrossSvg stroke={"#626262"} onClick={deleteProduct} />}
              {price && <span className="label-large text-high-emphasis">${data?.price % 1 === 0 ? `${data?.price}.00` : data?.price}</span>}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.bagItem}>
          <div className={styles.itemContent}>
            <img src={productImage} />
            <div className={styles.itemDetails}>
              <span className="text-high-emphasis label-small" style={{ marginBottom: '2px' }}>{data.name}</span>
              <span className="text-low-emphasis label-medium" style={{ marginBottom: '7px' }}>{data.description}</span>
              <label className={styles.qty}>
                <span className="text-low-emphasis link">Qty:</span>
                <select value={qnt}>
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
                <span className="text-high-emphasis title-regular">${data?.price % 1 === 0 ? `${data?.price}.00` : data?.price}</span>
                <span className="text-low-emphasis extra-small-label strike">${data?.price * 2 % 1 === 0 ? `${data?.price * 2}.00` : data?.price * 2}</span>
                <span className="text-vibrant extra-small-label">50% OFF</span>
              </div>
            </div>
          </div>
          <div className={styles.itemButtons}>
            <button className='text-primary title-regular' onClick={wishlistProduct}>Move to Wishlist</button>
            <div className={styles.verticalSeparator}> </div>
            <button className='text-primary title-regular' onClick={deleteProduct}>Remove</button>
          </div>
        </div>
      )}
    </>
  );
};
export default CartProduct;
