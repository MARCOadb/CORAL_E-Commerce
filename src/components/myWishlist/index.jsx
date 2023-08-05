import React, { useContext, useEffect, useState } from "react";

import MobileLayout from "../../layouts/mobileLayout";
import useBreakpoint from "../../hooks/useBreakPoint";
import getAllProducts from "../../services/getAllProducts";
import Product from "../product";

import "./style.scss";

import noWishlist from "../../assets/pics/Layouts/wishlist.png";
import { BagContext } from "../../contexts/BagContext";

const MyWishlist = () => {
  const { phone, desktop } = useBreakpoint();
  const { userWishlist, update } = useContext(BagContext);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const botoes = [{ text: "Start Shopping", outline: false }];
  const [emptyWishlist, setEmptyWishlist] = useState(false);

  return (
    <>
      <div>
        {desktop ? (
          <div className="wishlist">
            {!loading && userWishlist?.map((item) => <Product largura={172} altura={172} data={item.data} label key={item.uid} itemId={item.uid} button rmvWishlist sort />)}
          </div>
        ) : (
          <MobileLayout open={open} setOpen={setOpen} icon={"arrow"} iconAngle={90} title={"My Wishlist"} buttons={emptyWishlist && botoes}>
            {!emptyWishlist && (
              <div className="wishlist-mobile">
                {!loading && userWishlist?.map((item) => <Product altura={false} largura={false} data={item.data} label key={item.uid} itemId={item.uid} button />)}
              </div>
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
