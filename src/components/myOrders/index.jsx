import styles from "./style.module.scss";
const MyOrders = () => {
  return (
    <div className={styles.compContainer}>
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
    </div>
  );
};
export default MyOrders;
