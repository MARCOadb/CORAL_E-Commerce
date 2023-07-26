import Header from "../../components/header";
import Footer from "../../components/footer";

import useBreakpoint from "../../hooks/useBreakPoint";
import { useState, useEffect } from "react";

import style from "./style.scss";
import utilityClasses from "../../assets/utility.scss";

export default function ProductPage(){
    function process(quant){
        var value = parseInt(document.getElementById("quant").value);
        value+=quant;
        if(value < 1){
          document.getElementById("quant").value = 1;
        }else{
        document.getElementById("quant").value = value;
        }
      }
    return(
        <>
        <Header/>
        <div className="product-image">
            
        </div>
        <div className="container">
            <div className="content-product">
            <div className="product-description body-medium">Product Description</div>
            <div className="product-related body-medium">Related Products</div>
            <div className="product-ratings body-medium">Ratings and Reviews</div>
            </div>
        </div>
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
            <div className="quantity display-small" color="#13101E">Quantity<input type="button" id="plus" value='-' onclick="process(-1)" />
  <input id="quant" name="quant" class="text" size="1" type="text" value="1" maxlength="10" />
  <input type="button" id="minus" value='+' onclick="process(1)"/></div>
        </div>
        <Footer/>
       </> 
    )
}