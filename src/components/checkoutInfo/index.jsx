import React, { useEffect, useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

const CheckoutInfo = () => {
  const { phone, desktop } = useBreakpoint();

  retun(
    <>
      <div>{desktop ? <></> : <></>}</div>
    </>
  );
};

export default CheckoutInfo;
