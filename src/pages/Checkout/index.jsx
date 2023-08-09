import Header from "../../components/header";
import Footer from "../../components/footer";
import { BagContext } from "../../contexts/BagContext";
//import CheckoutInfo from "../../components/checkoutInfo";
//import CheckoutPayment from "../../components/checkoutPayment";
import Breadcrump from "../../components/breadcrumpDesktop";
import Dropdown from "../../components/dropdown";
import { toast } from "react-toastify";

import { useState, useEffect, useContext } from "react";

import UPI from "../../assets/pics/Payments/upi.png";
import CDcard from "../../assets/pics/Payments/credit-debit-card.png";
import ApplePay from "../../assets/pics/Payments/apple-pay.png";
import AmazonPay from "../../assets/pics/Payments/amazon-pay.png";

import "./style.scss";
import { AuthContext } from "../../contexts/AuthContext";

export default function Checkout() {
  const { userProducts, subTotal, totalPrice } = useContext(BagContext);
  const { user } = useContext(AuthContext);

  //CHECKOUT FORM
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

  const [buttonAvailable, setButtonAvailable] = useState(false);

  useEffect(() => {
    const isFormValid = fullName !== "" && streetAddress !== "" && city !== "" && DDD !== "" && mobNumber !== "" && state !== "" && pinCode !== "" && email !== "" && selectedOption !== "";

    setButtonAvailable(isFormValid);
  }, [fullName, streetAddress, city, DDD, mobNumber, state, pinCode, email, selectedOption]);

  const available = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      toast.error("The E-mail is not valid.");
      return;
    }
    toast.success("Purchase done with success! Please, check your E-mail to track your order.");
  };

  const unavailable = () => {
    toast.error("Please fill all of the fields.");
  };

  return (
    <>
      <Header path={"home"} />
      <Breadcrump page={"home"} category={"Checkout"} />
      <h1 className="page-title display-medium text-primary">Checkout</h1>
      <div className="main-container">
        <div className="form-container">
          <Dropdown title="Add New Address" content={addNewAdressContent} />
          <Dropdown title="Contact Information" content={contactInfo} />
          <Dropdown title="Select Payment Method" content={cardArray} />
          <div className="inferior-link-button">
            <a href="#">Back to Cart</a>
            <button className={buttonAvailable ? "available" : "unavailable"} onClick={buttonAvailable ? available : unavailable}>
              Next
            </button>
          </div>
        </div>
        <div className="order-items">
          <div className="order-title">
            <h1 className="display-small-he">Order summary</h1>
            <div className="separator"></div>
          </div>
          <div className="items-container">
            {userProducts &&
              !!user &&
              userProducts.map((product) => (
                <div key={product.uid} className="mapped-item">
                  <img />
                  <div className="mapped-data">
                    <p className="body-medium-he">{product.data.name}</p>
                    <p className="body-regular text-low-emphasis">{product.data.description}</p>
                    <p className="body-regular text-low-emphasis">Qty - {product.qnt}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="order-title">
            <h1 className="display-small-he">Order details</h1>
            <div className="separator"></div>
          </div>
          <div className="details-container">
            <div className="rows">
              <p className="body-medium text-low-emphasis">Sub Total</p>
              <p className="cost">${subTotal}</p>
            </div>
            <div className="rows ">
              <p className="body-medium text-low-emphasis">Discount</p>
              <p className="cost">$**.**</p>
            </div>
            <div className="rows ">
              <p className="body-medium text-low-emphasis">Delivery Fee</p>
              <p className="cost">$**.**</p>
            </div>
            <div className="rows grand-total">
              <p>Grand Total</p>
              <p>${totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
