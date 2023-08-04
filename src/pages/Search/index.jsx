import { useLocation, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import getAllProducts from "../../services/getAllProducts";
import Product from "../../components/product";
import Header from "../../components/header";
import Footer from "../../components/footer";
import useBreakpoint from "../../hooks/useBreakPoint";
import notFound from "../../assets/pics/Search/searchNotFound.png";
import DefaultBtn from "../../components/defaultBtn";
import NavBarMobile from "../../components/navBarMobile";
const Search = () => {
  const { desktop, phone } = useBreakpoint();

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
          <div className={style.searchContainer} style={!loading && products?.length >= 1 ? { height: "auto" } : {}}>
            {!loading && products?.length >= 1 ? (
              <>
                <span className={desktop ? "display-large text-primary" : "display-medium text-primary"}>
                  Resultados da busca para <br /> <span style={{ color: "black" }}>{location.state.searchValue}</span>
                </span>
                <div className={style.productContainer}>
                  <span>Mostrando {!loading && products && products.length} resultados</span>
                  {!loading && products?.map((item) => <Product largura={desktop ? 286 : 136} altura={desktop ? 286 : 136} data={item.data} key={item.uid} itemId={item.uid} button label />)}
                </div>
              </>
            ) : (
              <div className={style.notFoundPage}>
                <div className={style.notFoundTxt} style={{ height: "100%" }}>
                  <img src={notFound} />
                  <span>Whoops!</span>
                  <span style={{ textAlign: "center" }}>We coudn’t find what you’re looking for. Try something else.</span>
                </div>
                <DefaultBtn onClick={() => navigate("/")}>Back to home</DefaultBtn>
              </div>
            )}
          </div>
        </div>
        {desktop && <Footer />}
        {!loading && products?.length >= 1 && <NavBarMobile />}
      </div>
    </>
  );
};
export default Search;
