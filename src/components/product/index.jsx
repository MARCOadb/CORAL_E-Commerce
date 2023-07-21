import { useState } from "react";
import getProductById from "../../services/getProductById";
import styles from "./style.module.scss";
import { useEffect } from "react";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import coach from "../../assets/pics/Home/bolsa-coach.png";
import remus from "../../assets/pics/Home/bolsa-remus.png";

const Product = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const getProduct = async (id) => {
    setLoading(true);
    const product = await getProductById(id);
    return product;
  };

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {!loading && (
        <div className={styles.product}>
          <img src={product?.image} alt="Product Name" />
          <div className={styles.detailContainer}>
            <div className={styles.textContainer}>
              <span className="text-high-emphasis body-medium">{product?.name}</span>
              <span className="text-low-emphasis label-large">{product?.description}</span>
              <span className="text-high-emphasis body-medium ">${product?.price}</span>
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
