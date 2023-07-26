import React, { useEffect, useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import getAllProducts from "../../services/getAllProducts";
import Product from "../product";

const MyWishlist = () => {
  const { phone, desktop } = useBreakpoint();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    const produtos = await getAllProducts();
    return produtos;
  };

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>
        {desktop ? (
          <div className="wishlist">{!loading && products?.map((item) => <Product largura={172} altura={172} data={item} label={true} key={item.id} sort={true} button={true} />)}</div>
        ) : (
          <div className="wishlist-mobile">{!loading && products?.map((item) => <Product altura={false} largura={false} data={item} label={true} key={item.id} sort={false} button={true} />)}</div>
        )}
      </div>
    </>
  );
};

export default MyWishlist;
