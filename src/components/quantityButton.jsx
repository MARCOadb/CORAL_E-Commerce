import React from "react";
import utilityClasses from "../assets/utility.scss";
import { Element } from "react-scroll";
import { useRef, useState } from "react";

import style from "../pages/Product/style.scss";

const QuantityInput = () => {
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (event) => {
      const newQuantity = Number(event.target.value);
      setQuantity(newQuantity);
    };
  
    const handleIncrement = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const handleDecrement = () => {
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };
  
    return (
       
            <div className="quantity display-small" style={{ color: "#13101E" }}>
        Quantity:
        <div className="container-quantity">
        <button className="min" onClick={handleDecrement}>-</button>
        <input
          id="quant"
          name="quant"
          className="text label-large"
          size="1"
          type="text"
          value={quantity}
          maxLength="10"
          onChange={handleQuantityChange}
        />
        <button className="max" onClick={handleIncrement}>+</button>  </div>
      </div>
      
      
    );
  }
  export default QuantityInput;