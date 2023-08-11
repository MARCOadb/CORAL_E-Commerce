import React, { useState, useEffect, useRef } from "react";
import Chevron from "../../assets/icon/chevron-bottom.svg";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

const Dropdown = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState();
  const refHeight = useRef();
  const { phone, desktop } = useBreakpoint();

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {desktop ? (
        <>
          <div>
            <button className="checkout-dropdown-button" onClick={toggleState}>
              <p className="display-small">{title}</p>
              <img src={Chevron} className={toggle ? "chevron-rotate" : undefined} />
            </button>
            <div className="button-separator"></div>
            <div className={toggle ? "checkout-dropdown-toggle animation" : "checkout-dropdown-toggle"} style={{ height: toggle ? `${height}` : "0px" }} ref={refHeight}>
              {content}
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <button className="checkout-dropdown-button" onClick={toggleState}>
              <p className="title-medium">{title}</p>
              <img src={Chevron} className={toggle ? "chevron-rotate" : undefined} />
            </button>
            <div className={toggle ? "checkout-dropdown-toggle animation" : "checkout-dropdown-toggle"} style={{ height: toggle ? "906px" : "0px" }} ref={refHeight}>
              {content}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
