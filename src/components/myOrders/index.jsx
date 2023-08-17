import { useContext, useEffect, useMemo, useState } from "react";
import styles from "./style.module.scss";
import { BagContext } from "../../contexts/BagContext";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import CartProduct from "../cartProduct";
import getProductById from "../../services/getProductById";
import DefaultBtn from "../defaultBtn";

const MyOrders = () => {
  const { userOrders } = useContext(BagContext);
  const [orderOpen, setOrderOpen] = useState(null);
  const [orderInfo, setOrderInfo] = useState();
  const [orderProds, setOrderProds] = useState(null);
  const handleOrder = (orderId) => {
    setOrderOpen(orderId);
  };
  useEffect(() => {
    if (orderOpen) {
      setOrderInfo(userOrders.find((item) => item.id === orderOpen));
      const filtredProducts = userOrders.find((item) => item.id === orderOpen).data.products.map((item) => item);
      const complexProducts = filtredProducts.map(async (item) => {
        const data = await getProductById(item.uid);
        return {
          data,
          qnt: item.qnt,
        };
      });
      Promise.all(complexProducts)
        .then((value) => {
          setOrderProds(value);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [userOrders, orderOpen]);

  return (
    <div className={styles.compContainer}>
      <form className={styles.statusContainer}>
        <div>
          <input type="radio" id={!orderOpen ? "completed" : "itemsOrdered"} name="status" />
          <label htmlFor={!orderOpen ? "completed" : "itemsOrdered"}>{!orderOpen ? "Completed" : "Items Ordered"}</label>
        </div>
        <div>
          <input type="radio" id={!orderOpen ? "processing" : "invoices"} name="status" />
          <label htmlFor={!orderOpen ? "processing" : "invoices"}>{!orderOpen ? "Processing" : "Invoices"}</label>
        </div>
        <div>
          <input type="radio" id={!orderOpen ? "completed" : "shipment"} name="status" />
          <label htmlFor={!orderOpen ? "completed" : "shipment"}>{!orderOpen ? "Completed" : "Order Shipment"}</label>
        </div>
      </form>
      <div className={styles.infoContainer}>
        <span style={!orderOpen ? { marginLeft: "28px" } : {}}>{!orderOpen ? "Order ID" : "Product Name"}</span>
        {!orderOpen ? (
          <>
            <span>Date</span>
            <span>Price</span>
            <span style={!orderOpen ? { marginRight: "28px" } : {}}>Status</span>
          </>
        ) : (
          <div className={styles.orderDetails}>
            <span>Price</span>
            <span>Qty</span>
            <span>SubTotal</span>
          </div>
        )}
      </div>
      {!orderOpen ? (
        <div className={styles.orders}>
          {userOrders &&
            userOrders.map((item) => {
              return (
                <div
                  className={styles.orderContainer}
                  onClick={() => {
                    handleOrder(item.id);
                  }}
                >
                  <input type="checkbox" />
                  <div className={`${styles.orderBox} body-medium text-high-emphasis`}>
                    <span style={{ minWidth: "92px" }}>#{item.id.slice(0, 8)}</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>{`${item.data.date.month} ${item.data.date.day}, `}</span>
                      <span>{`${item.data.date.year}`}</span>
                    </div>
                    <span style={{ minWidth: "64px" }}>${item.data.price.toFixed(2)}</span>
                    <span className="text-primary">Paid</span>
                  </div>
                  <ArrowSvg x={-90} />
                </div>
              );
            })}
        </div>
      ) : (
        <div className={styles.orders} style={{ gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {orderProds &&
              orderProds.map((item) => (
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <CartProduct textBold data={item.data} price />
                  <div className={styles.orderDetails} style={{ minWidth: "140px", marginLeft: "40px", paddingRight: "10px" }}>
                    <span>{item.qnt}</span>
                    <span>${(item.data.price * item.qnt).toFixed(2)}</span>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <div className="display-small" style={{ width: "100%", borderBottom: "1px solid #0000001f", paddingBottom: "6px" }}>
              Order Information
            </div>
          </div>
          <div className={`${styles.orderBox} body-medium text-high-emphasis`}>
            <div className={styles.orderInfo} style={{ minWidth: "260px" }}>
              <span className="text-low-emphasis">Order details</span>
              <div className={styles.orderDetails} style={{ minWidth: "0px" }}>
                <span>Sub Total</span>
                <span>${orderInfo && orderInfo.data.price}</span>
              </div>
              <div className={styles.orderDetails} style={{ minWidth: "0px" }}>
                <span>Discount</span>
                <span>-$0.00</span>
              </div>
              <div className={styles.orderDetails} style={{ minWidth: "0px" }}>
                <span>Delivery Fee</span>
                <span>-$0.00</span>
              </div>
              <div className={styles.orderDetails} style={{ minWidth: "0px", fontWeight: "600" }}>
                <span>Grand Total</span>
                <span>${orderInfo && orderInfo.data.price}</span>
              </div>
            </div>
            <div className={styles.orderInfo}>
              <span className="text-low-emphasis">Order details</span>
              <span>{orderInfo && orderInfo.data.selectedOption}</span>
            </div>
            <div className={styles.orderInfo}>
              <span className="text-low-emphasis">Order details</span>
              <span>{orderInfo && orderInfo.data.fullName}</span>
              <span>{orderInfo && orderInfo.data.adress}</span>
              <span>{orderInfo && orderInfo.data.pinCode}</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", gap: "24px", justifyContent: "flex-end", width: "50%" }}>
              <DefaultBtn>Reorder</DefaultBtn>
              <DefaultBtn outlined>Add Rating</DefaultBtn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MyOrders;
