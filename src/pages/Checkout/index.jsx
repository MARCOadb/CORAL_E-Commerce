import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { BagContext } from "../../contexts/BagContext";
//import CheckoutInfo from "../../components/checkoutInfo";
//import CheckoutPayment from "../../components/checkoutPayment";
import Breadcrump from "../../components/breadcrumpDesktop";
import Dropdown from "../../components/dropdown";
import useBreakpoint from "../../hooks/useBreakPoint";
import { toast } from "react-toastify";
import CartProduct from "../../components/cartProduct";

import { useState, useEffect, useContext } from "react";

import UPI from "../../assets/pics/Payments/upi.png";
import CDcard from "../../assets/pics/Payments/credit-debit-card.png";
import ApplePay from "../../assets/pics/Payments/apple-pay.png";
import AmazonPay from "../../assets/pics/Payments/amazon-pay.png";
import ChevronRight from "../../assets/icon/chevron-right.svg";
import { AuthContext } from "../../contexts/AuthContext";

import { useLocation, useNavigate } from "react-router-dom";
import { addOrder } from "../../services/addOrder";
import { clearBag } from "../../services/clearBag";

export default function Checkout() {
  const { userProducts, taxPrice, subTotal, totalPrice, update } = useContext(BagContext);
  const { user } = useContext(AuthContext);
  const { phone, desktop } = useBreakpoint();

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
    const capitalizedFullName = e.target.value.replace(/(^|\s)\S/g, (c) => c.toUpperCase());
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

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (category) => {
    category
      ? navigate(`/${category}`, {
          state: {
            path: location.state.path,
            category: category,
          },
        })
      : navigate("/");
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
    const date = new Date();

    const month = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(date);
    const day = date.getDate();
    const year = date.getUTCFullYear();
    const orderDate = {
      day,
      year,
      month,
    };
    const phoneNumber = DDD + mobNumber;
    const adress = `${streetAddress} ${city} ${state}`;
    const orderProds = userProducts.map((item) => {
      const product = {
        uid: item.uid,
        qnt: item.qnt,
      };
      return product;
    });

    const order = {
      fullName,
      phoneNumber,
      adress,
      pinCode,
      email,
      selectedOption,
      userId: user.uid,
      price: totalPrice,
      products: orderProds,
      date: orderDate,
    };
    addOrder(order).then(() => {
      toast.success("Purchase done with success! Please, check your E-mail to track your order.");
      clearBag(user.uid).then(() => {
        toast.success("Your bag was cleard");
        update({ products: false });
      });
    });

    navigate("/");
  };

  const unavailable = () => {
    toast.error("Please fill all of the fields.");
  };

  return (
    <>
      <div>
        {desktop ? (
          <>
            <Header path={"home"} />
            <Breadcrump page={"home"} category={"Checkout"} />
            <div className="checkout-content">
              <h1 className="page-title display-medium text-primary">Checkout</h1>
              <div className="main-container">
                <div className="form-container">
                  <Dropdown title="Add New Address" content={addNewAdressContent} />
                  <Dropdown title="Contact Information" content={contactInfo} />
                  <Dropdown title="Select Payment Method" content={cardArray} />
                  <div className="inferior-link-button">
                    <a onClick={() => navigate("/bag")} style={{ cursor: "pointer" }}>
                      Back to Cart
                    </a>
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
                          <CartProduct showQnt data={product.data} largura={476} qnt={product.qnt} key={product.uid} itemId={product.uid} />
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
                      <p className="cost">${subTotal?.toFixed(2)}</p>
                    </div>
                    <div className="rows ">
                      <p className="body-medium text-low-emphasis">Discount</p>
                      <p className="cost">$0.00</p>
                    </div>
                    <div className="rows ">
                      <p className="body-medium text-low-emphasis">Delivery Fee</p>
                      <p className="cost">${taxPrice?.toFixed(2)}</p>
                    </div>
                    <div className="rows grand-total">
                      <p>Grand Total</p>
                      <p>${totalPrice?.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <>
            <div className="topbar">
              <a onClick={() => navigate("/bag")}>
                <img src={ChevronRight} />
              </a>
              <h1 className="display-small text-primary">Checkout</h1>
            </div>
            <div className="button-container">
              <button className={buttonAvailable ? "available" : "unavailable"} onClick={buttonAvailable ? available : unavailable}>
                Finalize the Purchase
              </button>
            </div>
            <div className="mobile-main-container">
              <div className="sub-container">
                <p className="title-regular text-low-emphasis">Order Summary</p>
                <div>
                  <div className="items-container">
                    {userProducts &&
                      !!user &&
                      userProducts.map((product) => (
                        <div key={product.uid} className="mapped-item">
                          <CartProduct showQnt data={product.data} largura={476} qnt={product.qnt} key={product.uid} itemId={product.uid} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="sub-container">
                <div className="title-regular text-low-emphasis">
                  <p className="">Order details</p>
                </div>
                <div className="details-container">
                  <div className="rows">
                    <p className="title-medium text-low-emphasis">Sub Total</p>
                    <p className="title-medium-he">${subTotal?.toFixed(2)}</p>
                  </div>
                  <div className="rows">
                    <p className="title-medium text-low-emphasis">Discount</p>
                    <p className="title-medium-he">$0.00</p>
                  </div>
                  <div className="rows">
                    <p className="title-medium text-low-emphasis">Delivery Fee</p>
                    <p className="title-medium-he">${taxPrice?.toFixed(2)}</p>
                  </div>
                  <div className="rows title-regular-he">
                    <p>Grand Total</p>
                    <p>${totalPrice?.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="input-container">
                <p className="title-reguar text-low-emphasis">Contact Information</p>
                <div className="mobile-separator"></div>
                <input type="text" placeholder="Full Name" value={fullName} onChange={handleFullName} />
                <input type="email" placeholder="Enter e-mail" value={email} onChange={handleEmail} />
                <div className="phone-input-fields">
                  <input type="number" placeholder="DDD" className="ddd" value={DDD} onChange={handleDDD} />
                  <input type="number" placeholder="Enter Number" className="number" value={mobNumber} onChange={handleMobNumber} />
                </div>
              </div>
              <div className="input-container">
                <p className="title-reguar text-low-emphasis">Delivery Adress</p>
                <div className="mobile-separator"></div>
                <input type="number" placeholder="Pin Code" value={pinCode} onChange={handlePinCode} />
                <input type="text" placeholder="Street Address" value={streetAddress} onChange={handleStreetAddress} />
                <input type="text" placeholder="City" value={city} onChange={handleCity} />
                <input type="text" placeholder="State" value={state} onChange={handleState} />
              </div>
              <div className="card-container">
                <p className="title-reguar text-low-emphasis">Payment Method</p>
                <div className="mobile-separator"></div>
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
              </div>
              <div className="spacer"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
