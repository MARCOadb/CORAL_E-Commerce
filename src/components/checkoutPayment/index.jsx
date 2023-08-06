import React, { useState } from "react";

import "./style.scss";

import Dropdown from "../dropdown";

import UPI from "../../assets/pics/Payments/upi.png";
import CDcard from "../../assets/pics/Payments/credit-debit-card.png";
import ApplePay from "../../assets/pics/Payments/apple-pay.png";
import AmazonPay from "../../assets/pics/Payments/amazon-pay.png";

const CheckoutPayment = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const cardArray = (
    <div className="card-array ">
      <label>
        <div className={`card ${selectedOption === "option1" ? "checked" : ""}`}>
          <input type="radio" name="radio" value="option1" onChange={handleOptionChange} />
          <img src={UPI} alt="UPI" />
          <p className="body-regular-he">UPI</p>
          <span></span>
        </div>
      </label>
      <label>
        <div className={`card ${selectedOption === "option2" ? "checked" : ""}`}>
          <input type="radio" name="radio" value="option2" onChange={handleOptionChange} />
          <img src={CDcard} alt="Credit/Debit Card" />
          <p className="body-regular-he">Credit/Debit Card</p>
          <span></span>
        </div>
      </label>
      <label>
        <div className={`card ${selectedOption === "option3" ? "checked" : ""}`}>
          <input type="radio" name="radio" value="option3" onChange={handleOptionChange} />
          <img src={ApplePay} alt="Apple Pay" />
          <p className="body-regular-he">Apple Pay</p>
          <span></span>
        </div>
      </label>
      <label>
        <div className={`card ${selectedOption === "option4" ? "checked" : ""}`}>
          <input type="radio" name="radio" value="option4" onChange={handleOptionChange} />
          <img src={AmazonPay} alt="Amazon Pay" />
          <p className="body-regular-he">Amazon Pay</p>
          <span></span>
        </div>
      </label>
    </div>
  );

  return (
    <>
      <Dropdown title="Select Payment Method" content={cardArray} />
    </>
  );
};

export default CheckoutPayment;
