import React, { useEffect, useState, useRef } from "react";

import Dropdown from "../dropdown";

import "./style.scss";

const CheckoutInfo = () => {
  const addNewAdressContent = (
    <div className="new-adress-container">
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
  );

  const contactInfo = (
    <>
      <div className="input-holder">
        <p className="body-medium-he">E-Mail</p>
        <input type="text" placeholder="Enter e-mail" />
      </div>
    </>
  );

  return (
    <>
      <Dropdown title="Add New Adress" content={addNewAdressContent} />
      <Dropdown title="Contact Information" content={contactInfo} />
    </>
  );
};

export default CheckoutInfo;
