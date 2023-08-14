import React, { useState, useEffect, useRef } from "react";
import ChevronRigthSvg from "../../assets/icon/ChevronRightSvg";

import "./style.scss";

const Dropdown = ({ title, content }) => {
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
    <div>
      <button className="checkout-dropdown-button" onClick={toggleState}>
        <p className="display-small">{title}</p>
        <ChevronRigthSvg stroke={'#13101E'} rotate={toggle ? 270 : 90} />
      </button>
      <div className="button-separator"></div>
      <div className={toggle ? "checkout-dropdown-toggle animation" : "checkout-dropdown-toggle"} style={{ height: toggle ? `${height}` : "0px" }} ref={refHeight}>
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
