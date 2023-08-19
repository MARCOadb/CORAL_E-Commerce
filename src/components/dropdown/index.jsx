import React, { useState, useEffect, useRef } from "react";
import ChevronRigthSvg from "../../assets/icon/ChevronRightSvg";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

const Dropdown = ({ content, title }) => {
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState();
  const [firstTimePress, setFirstTimePress] = useState(true);
  const refHeight = useRef();
  const { phone, desktop } = useBreakpoint();

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  const toggleStateMobile = () => {
    setToggle(!toggle);
    firstScrollCheck();
  };

  const firstScrollCheck = () => {
    if (firstTimePress) {
      setTimeout(() => {
        const currentScrollY = window.scrollY;
        const targetScrollY = Math.max(currentScrollY + 590, 0);

        window.scrollTo({
          top: targetScrollY,
          behavior: "smooth",
        });
        setFirstTimePress(false);
      }, 250);
      return;
    }
  };

  return (
    <div>
      {desktop ? (
        <>
          <div>
            <button className="checkout-dropdown-button" onClick={toggleState}>
              <p className="display-small">{title}</p>
              <ChevronRigthSvg stroke={"#13101E"} rotate={toggle ? 270 : 90} />
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
            <button className="checkout-dropdown-button" onClick={toggleStateMobile}>
              <p className="title-medium">{title}</p>
              <ChevronRigthSvg stroke={"#13101E"} rotate={toggle ? 270 : 90} />
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
