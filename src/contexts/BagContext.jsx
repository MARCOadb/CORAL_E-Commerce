import { createContext, useContext, useEffect, useState } from "react";
import { getBag } from "../services/getBag";
import getAllProducts from "../services/getAllProducts";
import { AuthContext } from "./AuthContext";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const [taxPrice, setTaxPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const update = async () => {
    if (user) {
      setLoading(true);
      getAllProducts()
        .then(async (data) => {
          const arrayDeIds = await getBag(user.uid);
          const produtosFiltrados = data.filter((item) => !!arrayDeIds?.find((bagItem) => item.id === bagItem.id));
          const produtosComplexo = produtosFiltrados.map((item) => {
            const qnt = arrayDeIds.find((bagItem) => bagItem.id === item.id).qnt;
            return {
              ...item,
              qnt,
            };
          });
          let tax = 0;
          const valor = produtosComplexo.reduce((acc, cur) => {
            acc += cur.price * cur.qnt;
            tax += cur.qnt;
            return acc;
          }, 0);
          setTaxPrice(tax);
          setSubTotal(valor);
          setTotalPrice(tax + valor);
          setUserProducts(produtosComplexo);
        })
        .finally(() => setLoading(false));
    } else return console.log("Usuario invalido");
  };
  useEffect(() => {
    update();
  }, []);

  return <BagContext.Provider value={{ user, userProducts, taxPrice, subTotal, totalPrice, loading, update }}>{children}</BagContext.Provider>;
};
