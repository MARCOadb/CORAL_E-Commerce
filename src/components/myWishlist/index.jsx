import React, { useContext, useEffect, useState } from "react";

import MobileLayout from "../../layouts/mobileLayout";
import useBreakpoint from "../../hooks/useBreakPoint";
import getAllProducts from "../../services/getAllProducts";
import Product from "../product";

import "./style.scss";

import noWishlist from "../../assets/pics/Layouts/wishlist.png";
import { BagContext } from "../../contexts/BagContext";
import { useNavigate } from "react-router-dom";

export default function MyWishlist({ open, setOpen }) {
  const { phone, desktop } = useBreakpoint();
  const { userWishlist, update } = useContext(BagContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const botoes = [{ text: "Start Shopping", outline: false, onClick: () => navigate("/CORAL_E-Commerce/") }];
  const [emptyWishlist, setEmptyWishlist] = useState(false);

  useEffect(() => {
    if (userWishlist.length < 1) {
      setEmptyWishlist(true);
    }
  }, [userWishlist]);

  return (
    <>
      <div>
        {desktop ? (
          <div className="wishlist">
            {emptyWishlist && (
              <div className="no-wishlist">
                <img src={noWishlist} alt="No Wishlist" />
                <div className="no-wishlist-text-container">
                  <h1 className="layout-main-title">Well...</h1>
                  <p className="text-high-emphasis body-medium">It seems you have not added any products to your wishlist.</p>
                </div>
              </div>
            )}
            {!loading &&
              userWishlist?.map((item) => (
                <div className="profile-wishlist-product">
                  <Product largura={200} altura={200} data={item.data} label key={item.uid} itemId={item.uid} button rmvWishlist sort />{" "}
                </div>
              ))}
          </div>
        ) : (
          <MobileLayout open={open} setOpen={setOpen} icon={"arrow"} iconAngle={90} title={"My Wishlist"} buttons={emptyWishlist && botoes}>
            {!emptyWishlist && (
              <>
                <span className="text-low-emphasis title-regular" style={{ width: "100%", paddingLeft: "16px" }}>
                  {userWishlist.length} Product(s)
                </span>
                <div className="wishlist-mobile">
                  {!loading && userWishlist?.map((item) => <Product altura={false} largura={false} data={item.data} label key={item.uid} itemId={item.uid} button />)}
                </div>
              </>
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
}
