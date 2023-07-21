import Header from "../../components/header";
import Footer from "../../components/footer";

import useBreakpoint from "../../hooks/useBreakPoint";
import { useState, useEffect } from "react";

import style from "./style.scss";
import utilityClasses from "../../assets/utility.scss";

export default function ProductPage(){

    return(
        <>
        <Header/>
        <div className="product-image">
            
        </div>
        <div className="container">
            <div className="content-product">
            <div className="product-description .body-medium">Product Description</div>
            <div className="product-related .body-medium">Related Products</div>
            <div className="product-ratings .body-medium">Ratings and Reviews</div>
            </div>
            
        </div>
        <Footer/>
       </> 
    )
}