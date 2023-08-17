import React, { useContext, useEffect, useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import close from "../../assets/icon/close.svg";
import orderPlaced from "../../assets/pics/Layouts/refer-and-earn-order-placed.png";

import "./style.scss";

const CheckoutModal = () => {
  const { phone, desktop } = useBreakpoint();
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <>
      <div>
        {desktop ? (
          <>
            <div className="main">
              <div className="modal-frame">
                <button className="close-button" onClick={closeModal}>
                  <img src={close} />
                </button>
                <div className="cheerio">
                  <img src={orderPlaced} />
                  <p>Cheerio!!</p>
                  <p className="title-medium-he">The order has been placed. Thanks for shopping with us. You’ll soon recieve the tracking details</p>
                </div>
                <div className="double-button-container">
                  <button className="transparent" href="#">
                    View Order
                  </button>
                  <button className="solid">Continue Shopping</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="main">
              <div className="topbar">
                <button onClick={closeModal}>
                  <img src={close} />
                </button>
                <h1 className="display-small text-primary">Order Placed</h1>
              </div>
              <div className="double-button-container">
                <button className="transparent">View Order</button>
                <button className="solid">Continue Shopping</button>
              </div>
              <div className="cheerio">
                <img src={orderPlaced} />
                <p>Cheerio!!</p>
                <p className="title-medium-he">The order has been placed. Thanks for shopping with us. You’ll soon recieve the tracking details</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CheckoutModal;
