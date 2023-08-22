import { createContext, useContext, useEffect, useState } from "react";
import { getBag } from "../services/getBag";
import getAllProducts from "../services/getAllProducts";
import { AuthContext } from "./AuthContext";
import { getWishlist } from "../services/getWishlist";
import { getOrders } from "../services/getOrders";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState(null);
  const [userWishlist, setUserWishlist] = useState(null);
  const [userOrders, setUserOrders] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const [taxPrice, setTaxPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const update = ({ products }) => {
    if (user) {
      setLoading(true);
      getAllProducts()
        .then((data) => {
          getBag(user.uid).then((userBag) => {
            const produtosFiltrados = data.filter((item) => !!userBag?.find((bagItem) => item.uid === bagItem.id));
            const produtosComplexo = produtosFiltrados.map((item) => {
              const qnt = userBag.find((bagItem) => bagItem.id === item.uid).qnt;
              return {
                ...item,
                qnt,
              };
            });
            let tax = 0;
            const valor = produtosComplexo.reduce((acc, cur) => {
              acc += cur.data.price * cur.qnt;
              tax += cur.qnt;
              return acc;
            }, 0);
            setTaxPrice(tax);
            setSubTotal(valor);
            setTotalPrice(tax + valor);
            setUserProducts(produtosComplexo);
          });
          getWishlist(user.uid).then((userWish) => {
            const wishlistFiltrada = data.filter((item) => !!userWish?.find((wishItem) => item.uid === wishItem));
            setUserWishlist(wishlistFiltrada);
          });
          getOrders(user.uid).then((userOrders) => {
            setUserOrders(userOrders);
          });
          if (products) setAllProducts(data);
        })
        .finally(() => setLoading(false));
    } else {
      setUserWishlist([]);
      setUserProducts([]);
      setUserOrders([]);
    }
  };
  useEffect(() => {
    if (!!user) {
      update({ products: true });
    } else update({ products: false });
  }, [user]);
  return <BagContext.Provider value={{ allProducts, userOrders, userWishlist, userProducts, taxPrice, subTotal, totalPrice, loading, update }}>{children}</BagContext.Provider>;
};
