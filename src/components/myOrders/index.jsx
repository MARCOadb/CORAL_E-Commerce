import { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { BagContext } from "../../contexts/BagContext";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import CartProduct from "../cartProduct";
import getProductById from "../../services/getProductById";
import DefaultBtn from "../defaultBtn";
import useBreakpoint from "../../hooks/useBreakPoint";

const MyOrders = () => {
  const { phone, desktop } = useBreakpoint();

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
          id: item.uid,
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
    <>
      <div className={styles.compContainer}>
        {(desktop || !orderOpen) && (
          <form className={`${styles.statusContainer} ${phone && "label-medium "}`}>
            <div>
              <input type="radio" id={!orderOpen ? "completed" : "itemsOrdered"} name="status" />
              <label htmlFor={!orderOpen ? "completed" : "itemsOrdered"}>{!orderOpen ? "Completed" : "Items Ordered"}</label>
            </div>
            <div>
              <input type="radio" id={!orderOpen ? "processing" : "invoices"} name="status" />
              <label htmlFor={!orderOpen ? "processing" : "invoices"}>{!orderOpen ? "Processing" : "Invoices"}</label>
            </div>
            <div>
              <input type="radio" id={!orderOpen ? "cancelled" : "shipment"} name="status" />
              <label htmlFor={!orderOpen ? "cancelled" : "shipment"}>{!orderOpen ? "Cancelled" : "Order Shipment"}</label>
            </div>
          </form>
        )}

        {desktop && (
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
        )}
        {!orderOpen ? (
          <div className={styles.orders}>
            {phone && <span className="title-regular text-low-emphasis">{userOrders && userOrders.length} Order(s)</span>}
            {userOrders &&
              userOrders.map((item) => {
                return (
                  <div
                    className={styles.orderContainer}
                    onClick={() => {
                      handleOrder(item.id);
                    }}
                  >
                    {desktop && <input type="checkbox" />}
                    <div className={`${styles.orderBox} body-medium text-high-emphasis`} style={phone ? { gap: "8px" } : {}}>
                      {desktop && <span style={{ minWidth: "92px" }}>#{item.id.slice(0, 8)}</span>}
                      <div className={styles.orders} style={phone ? { gap: "8px" } : { gap: "0px" }}>
                        {desktop ? (
                          <>
                            <span>{`${item.data.date.month} ${item.data.date.day}, `}</span>
                            <span>{`${item.data.date.year}`}</span>
                          </>
                        ) : (
                          <span className="text-faded label-medium">{`${item.data.date.month} ${item.data.date.day} ${item.data.date.year} `}</span>
                        )}
                        {phone && <span style={{ minWidth: "92px" }}>#{item.id.slice(0, 8)}</span>}
                      </div>
                      <span style={{ minWidth: "64px" }}>${item.data.price.toFixed(2)}</span>
                      {desktop && <span className="text-primary">Paid</span>}
                    </div>
                    <ArrowSvg x={-90} />
                  </div>
                );
              })}
          </div>
        ) : (
          <div className={styles.orders} style={desktop ? { gap: "40px" } : {}}>
            {phone && (
              <div className={styles.orderReminder}>
                <span className={"body-medium text-high-emphasis"}>Order #{orderOpen && orderOpen.slice(0, 8)}</span>
                <div className={styles.txtReminder} style={{ justifyContent: "space-between" }}>
                  <div className={styles.txtReminder} style={{ flexDirection: "column" }}>
                    <span className="text-low-emphasis label-medium">Placed On</span>
                    <span className="text-high-emphasis title-medium">{orderInfo && `${orderInfo.data.date.month} ${orderInfo.data.date.day} ${orderInfo.data.date.year} `}</span>
                  </div>
                  <DefaultBtn width={"90px"} height={"32px"}>
                    Completed
                  </DefaultBtn>
                </div>
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {orderProds &&
                orderProds.map((item) => (
                  <div style={desktop ? { display: "flex", paddingLeft: "10px" } : { display: "flex" }}>
                    <CartProduct imgDimetion={"120px"} noTxt={phone} showQnt={phone} bagBtn={phone} qnt={phone && item.qnt} noBtn={phone} textBold itemId={item.id} data={item.data} price />
                    {desktop && (
                      <div className={styles.orderDetails} style={{ minWidth: "140px", marginLeft: "40px", paddingRight: "10px" }}>
                        <span>{item.qnt}</span>
                        <span>${(item.data.price * item.qnt).toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <div>
              {desktop && (
                <div className="display-small" style={{ width: "100%", borderBottom: "1px solid #0000001f", paddingBottom: "6px" }}>
                  Order Information
                </div>
              )}
            </div>
            <div className={`${styles.orderBox} body-medium text-high-emphasis`}>
              {phone && <div className={styles.separetor} />}
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
              {phone && <div className={styles.separetor} />}
              <div className={styles.orderInfo}>
                <span className="text-low-emphasis">Payment Details</span>
                <span>{orderInfo && orderInfo.data.selectedOption}</span>
              </div>
              {phone && <div className={styles.separetor} />}

              <div className={styles.orderInfo}>
                <span className="text-low-emphasis">Address Details</span>
                <span>{orderInfo && orderInfo.data.fullName}</span>
                <span>{orderInfo && orderInfo.data.adress}</span>
                <span>{orderInfo && orderInfo.data.pinCode}</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className={styles.btnContainer} style={phone ? { marginBottom: "11px" } : {}}>
                <DefaultBtn>Reorder</DefaultBtn>
                {desktop && <DefaultBtn outlined>Add Rating</DefaultBtn>}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MyOrders;
