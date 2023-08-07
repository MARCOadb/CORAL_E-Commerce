import React, { useState } from "react";
import Dropdown from "../dropdown";
import "./style.scss";

const CheckoutInfo = () => {
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [DDD, setDDD] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [email, setEmail] = useState("");

  const handleFullName = (e) => {
    const capitalizedFullName = e.target.value.replace(/\b\w/g, (c) => c.toUpperCase());
    setFullName(capitalizedFullName);
  };

  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };

  const handleCity = (e) => {
    setCity(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };

  const handleDDD = (e) => {
    setDDD(e.target.value);
  };

  const handleMobNumber = (e) => {
    setMobNumber(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
  };

  const handlePinCode = (e) => {
    setPinCode(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const addNewAdressContent = (
    <div className="new-adress-container">
      <div className="input-column">
        <div className="input-holder">
          <p className="body-medium-he">Full Name</p>
          <input type="text" placeholder="Enter Name" value={fullName} onChange={handleFullName} />
        </div>
        <div className="input-holder">
          <p className="body-medium-he">Street Address</p>
          <input type="text" placeholder="Enter Address" value={streetAddress} onChange={handleStreetAddress} />
        </div>
        <div className="input-holder">
          <p className="body-medium-he">City</p>
          <input type="text" placeholder="Enter City" value={city} onChange={handleCity} />
        </div>
      </div>
      <div className="input-column">
        <div className="phone-input-holder">
          <p className="body-medium-he">Mobile Number</p>
          <div className="phone-input-fields">
            <input type="number" placeholder="DDD" className="ddd" value={DDD} onChange={handleDDD} />
            <input type="number" placeholder="Enter Number" className="number" value={mobNumber} onChange={handleMobNumber} />
          </div>
        </div>
        <div className="wide-input-holder">
          <p className="body-medium-he">State</p>
          <input type="text" placeholder="Enter State" value={state} onChange={handleState} />
        </div>
        <div className="wide-input-holder">
          <p className="body-medium-he">Pin Code</p>
          <input type="number" placeholder="Enter Pin Code" value={pinCode} onChange={handlePinCode} />
        </div>
      </div>
    </div>
  );

  const contactInfo = (
    <>
      <div className="input-holder">
        <p className="body-medium-he">E-Mail</p>
        <input type="email" placeholder="Enter e-mail" value={email} onChange={handleEmail} />
      </div>
    </>
  );

  return (
    <>
      <Dropdown title="Add New Address" content={addNewAdressContent} />
      <Dropdown title="Contact Information" content={contactInfo} />
    </>
  );
};

export default CheckoutInfo;
