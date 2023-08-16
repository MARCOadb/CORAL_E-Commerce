import { useContext, useEffect } from "react";
import styles from "./style.module.scss";
import { BagContext } from "../../contexts/BagContext";
const MyOrders = () => {
  const { userOrders } = useContext(BagContext);
  useEffect(() => {});
  return (
    <div className={styles.compContainer}>
      {console.log(userOrders)}
      <form className={styles.statusContainer}>
        <div>
          <input type="radio" id="completed" name="status" />
          <label htmlFor="completed">Completed</label>
        </div>
        <div>
          <input type="radio" id="processing" name="status" />
          <label htmlFor="processing">Processing</label>
        </div>
        <div>
          <input type="radio" id="cancelled" name="status" />
          <label htmlFor="cancelled">Cancelled</label>
        </div>
      </form>
      <div className={styles.infoContainer}>
        <span>Order ID</span>
        <span>Date</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      <div className={styles.}>

      </div>
    </div>
  );
};
export default MyOrders;
