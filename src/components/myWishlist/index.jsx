import React, { useEffect, useState } from "react";

import MobileLayout from "../../layouts/mobileLayout";
import useBreakpoint from "../../hooks/useBreakPoint";
import getAllProducts from "../../services/getAllProducts";
import Product from "../product";

import "./style.scss";

import noWishlist from "../../assets/pics/Layouts/wishlist.png";

const MyWishlist = () => {
  const { phone, desktop } = useBreakpoint();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const botoes = [{ text: "Start Shopping", outline: false }];
  const [emptyWishlist, setEmptyWishlist] = useState(false);

  const checkWishlistStatus = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    return wishlist && wishlist.length === 0;
  };

  const getProducts = async () => {
    setLoading(true);
    const produtos = await getAllProducts();
    return produtos;
  };

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
    const isEmpty = checkWishlistStatus();
    setEmptyWishlist(isEmpty);
  }, []);

  return (
    <>
      <div>
        {desktop ? (
          <div className="wishlist">{!loading && products?.map((item) => <Product largura={172} altura={172} data={item} label={true} key={item.id} sort={true} button={true} />)}</div>
        ) : (
          <MobileLayout icon={"arrow"} iconAngle={90} title={"My Wishlist"} buttons={emptyWishlist && botoes}>
            {!emptyWishlist && (
              <div className="wishlist-mobile">{!loading && products?.map((item) => <Product altura={false} largura={false} data={item} label={true} key={item.id} sort={false} button={true} />)}</div>
            )}
            {emptyWishlist && (
              <div className="no-wishlist">
                <img src={noWishlist} alt="No Wishlist" />
                <div className="no-wishlist-text-container">
                  <h1 className="layout-main-title">Well...</h1>
                  <p className="title-medium-he">It seems you have not added any products to your wishlist.</p>
                </div>
              </div>
            )}
          </MobileLayout>
        )}
      </div>
    </>
  );
};

export default MyWishlist;
