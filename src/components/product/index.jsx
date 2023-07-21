import { useState } from "react";
import getProductById from "../../services/getProductById";
import styles from "./style.module.scss";
import { useEffect } from "react";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import grande from "../../assets/pics/Home/bolsa-grande.png";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const getProduct = async (id) => {
    setLoading(true);
    const product = await getProductById(id);
    return product;
  };

  useEffect(() => {
    getProduct(1)
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {!loading && (
        <div className={styles.product}>
          <img src={grande} alt="Product Name" />
          <div className={styles.detailContainer}>
            <div className={styles.textContainer}>
              <span className="text-high-emphasis">{product?.name}</span>
              <span className="text-low-emphasis">{product?.description}</span>
              <span className="text-high-emphasis">${product?.price}</span>
            </div>
            <div className={styles.svgContainer}>
              <WishlistSvg stroke="#13101E" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;
