import Header from "../../components/header";
import Footer from "../../components/footer";
import CheckoutInfo from "../../components/checkoutInfo";
import CheckoutPayment from "../../components/checkoutPayment";

import { useState, useEffect } from "react";

import "./style.scss";

export default function Checkout() {
  return (
    <>
      <Header path={"home"} />
      <h1 className="page-title display-medium text-primary">Checkout</h1>
      <div className="main-container">
        <div className="form-container">
          <CheckoutInfo />
          <CheckoutPayment />
          <div className="inferior-link-button">
            <a href="#" className="">
              Back to Cart
            </a>
            <button>Next</button>
          </div>
        </div>
        <div className="order-summary-placeholder">
          <p>*Order summary component placeholder*</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
