import Header from "../../components/header";
import Footer from "../../components/footer";
import { Element } from "react-scroll";
import ProductPhotos from "../../components/productPhotos";
import QuantityInput from "../../components/quantityButton";
import useBreakpoint from "../../hooks/useBreakPoint";
import { useRef, useState } from "react";
import Tabs from "../../components/productDescription/slider";


import style from "./style.scss";
import utilityClasses from "../../assets/utility.scss";

export default function ProductPage(){
    
    return(
        <>
        <Header/>
        <div className="product-image">
            
        </div>
       <ProductPhotos/>
       <Tabs/>
        <div className="product-info">
            <div className="product-name-and-description">
                <h1 className="product-name display-medium">Coach</h1>
                <h2 className="description display-small">Leather Coach Bag with adjustable starps.</h2>
            </div>
            <div className="ratings"></div>
            <div className="product-pricing display-large">$54.69
            <div className="subscribed-pricing">$78.66</div>
            <div className="discount display-small">50%OFF</div></div>
            <div className="seperator"></div>
            <div className="pin-code-check">
                <h1 className="display-small">Delivery Details</h1>
                <h2 className="body-medium">Check estimated delivery date/pickup option.</h2>
                <div className="pin-code"><input  placeholder="Apply Valid Pincode" className="body-medium"/><button className="title-regular">CHECK</button></div>
                
            </div>
           <QuantityInput/>
            <Element className="offers">
                <div className="offers-container">
                    <h1 className="body-medium">Get upto 30% Off on order value above $100</h1>
                    <h2 className="body-small">Terms & Conditions</h2>
                    <div className="offers-code">
                        <h1 className="body-small">Use Code</h1>
                        <button className="code body-medium" >ORDER100</button>
                    </div>
                </div>
                <div className="offers-container">
                    <h1 className="body-medium">Get upto 30% Off on order value above $100</h1>
                    <h2 className="body-small">Terms & Conditions</h2>
                    <div className="offers-code">
                        <h1 className="body-small">Use Code</h1>
                        <button className="code body-medium" >ORDER100</button>
                    </div>
                </div>
            </Element>
        </div>
       
       </> 
    )
}