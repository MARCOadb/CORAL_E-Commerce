import React, { useEffect, useState, useRef } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import Chevron from "../../assets/icon/chevron-bottom.svg";

const CheckoutInfo = () => {
  const { phone, desktop } = useBreakpoint();

  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div>
        {desktop ? (
          <>
            <button className="checkout-dropdown-button" onClick={toggleState}>
              <p className="display-small">Add New Adress</p>
              <img src={Chevron} className={toggle && "chevron-rotate"} />
            </button>
            <div className="button-separator"></div>
            <div className={toggle ? "checkout-dropdown-toggle animation" : "checkout-dropdown-toggle"} style={{ height: toggle ? `${height}` : "0px" }} ref={refHeight}>
              <div className="new-adress-container">
                <div className="input-column">
                  <div className="input-holder">
                    <p className="body-medium-he">Full Name</p>
                    <input type="text" placeholder="Enter Name" />
                  </div>
                  <div className="input-holder">
                    <p className="body-medium-he">Street Adress</p>
                    <input type="text" placeholder="Enter Adress" />
                  </div>
                  <div className="input-holder">
                    <p className="body-medium-he">City</p>
                    <input type="text" placeholder="Enter City" />
                  </div>
                </div>
                <div className="input-column">
                  <div className="phone-input-holder">
                    <p className="body-medium-he">Mobile Number</p>
                    <div className="phone-input-fields">
                      <input type="number" placeholder="DDD" className="ddd" />
                      <input type="number" placeholder="Enter Number" className="number" />
                    </div>
                  </div>
                  <div className="wide-input-holder">
                    <p className="body-medium-he">State</p>
                    <input type="text" placeholder="Enter State" />
                  </div>
                  <div className="wide-input-holder">
                    <p className="body-medium-he">Pin Code</p>
                    <input type="number" placeholder="Enter Pin Code" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>teste 2!</h1>
          </>
        )}
      </div>
    </>
  );
};

export default CheckoutInfo;
