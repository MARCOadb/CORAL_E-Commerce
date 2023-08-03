import { useLocation, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import getAllProducts from "../../services/getAllProducts";
import Product from "../../components/product";
import Header from "../../components/header";
import Footer from "../../components/footer";
import useBreakpoint from "../../hooks/useBreakPoint";

const Search = () => {
  const { desktop } = useBreakpoint();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const getProducts = async () => {
    setLoading(true);
    const produtos = await getAllProducts();
    return produtos;
  };

  useEffect(() => {
    const searchCheck = location.state.searchValue.toLowerCase().slice(0, 3);
    getProducts()
      .then((prods) => {
        const produtosFiltrados = prods.reduce((acc, cur) => {
          if (cur.data.name.toLowerCase().startsWith(searchCheck)) {
            acc.push(cur);
          }
          return acc;
        }, []);
        setProducts(produtosFiltrados);
      })
      .finally(() => setLoading(false));
  }, [location.state.searchValue]);

  return (
    <>
      <div className={style.pageContainer}>
        <div>
          <Header />
          <div className={style.searchContainer}>
            <span className="display-large text-primary">Resultados da busca para {location.state.searchValue}</span>
            <span>Mostrando {!loading && products && products.length} resultados</span>
            <div className={style.productContainer}>
              {!loading && products?.map((item) => <Product largura={desktop ? 286 : 136} altura={desktop ? 286 : 136} data={item.data} key={item.uid} itemId={item.uid} button label />)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Search;
