import React, { useEffect, useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import UPI from "../../assets/pics/Payments/upi.png";
import CDcard from "../../assets/pics/Payments/credit-debit-card.png";
import ApplePay from "../../assets/pics/Payments/apple-pay.png";
import AmazonPay from "../../assets/pics/Payments/amazon-pay.png";

const CheckoutPayment = () => {
  const { phone, desktop } = useBreakpoint();

  return (
    <>
      <div>
        {desktop ? (
          <>
            <div className="card-array">
              <label>
                <div className="card">
                  <input type="radio" name="radio" value="option1" />
                  <img src={UPI} alt="UPI" />
                  <p className="body-regular-he">UPI</p>
                  <span></span>
                </div>
              </label>
              <label>
                <div className="card">
                  <input type="radio" name="radio" value="option2" />
                  <img src={CDcard} alt="Credit/Debit Card" />
                  <p className="body-regular-he">Credit/Debit Card</p>
                  <span></span>
                </div>
              </label>
              <label>
                <div className="card">
                  <input type="radio" name="radio" value="option3" />
                  <img src={ApplePay} alt="Apple Pay" />
                  <p className="body-regular-he">Apple Pay</p>
                  <span></span>
                </div>
              </label>
              <label>
                <div className="card">
                  <input type="radio" name="radio" value="option4" />
                  <img src={AmazonPay} alt="Amazon Pay" />
                  <p className="body-regular-he">Amazon Pay</p>
                  <span></span>
                </div>
              </label>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CheckoutPayment;
