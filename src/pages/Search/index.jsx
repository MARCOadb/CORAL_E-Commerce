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
import MobileLayout from "../../layouts/mobileLayout";
import SearchBar from "../../components/searchBar";
import ArrowSvg from "../../assets/icon/ArrowSvg";
const Search = () => {
  const { desktop, phone } = useBreakpoint();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const [findProducts, setFindProducts] = useState(false);

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
        if (produtosFiltrados?.length >= 1) {
          setFindProducts(true);
        } else {
          setFindProducts(false);
        }
      })
      .finally(() => setLoading(false));
  }, [location.state.searchValue]);

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <>
      <div className={style.pageContainer}>
        <div>
          {desktop && <Header />}
          {phone && findProducts && <Header />}

          {!loading && findProducts ? (
            <div className={style.searchContainer} style={!loading && products?.length >= 1 ? { height: "auto" } : {}}>
              <span className={desktop ? "display-large text-dark" : "display-small text-dark"} style={desktop ? { paddingLeft: "20px" } : { paddingLeft: "0" }}>
                Search Results for: {desktop && <br />} <span className="text-primary">{capitalize(location.state.searchValue)}</span>
              </span>
              <div className={style.productContainer}>
                <span style={desktop ? { paddingLeft: "20px" } : { paddingLeft: "0" }}>Mostrando {!loading && products && products.length} resultados</span>
                <div className={style.productItems}>
                  {!loading &&
                    products?.map((item, index) => (
                      <div key={index} style={desktop ? { width: "286px" } : { width: "152px" }}>
                        <Product largura={desktop ? 286 : 152} altura={desktop ? 286 : 152} discount data={item.data} key={item.uid} itemId={item.uid} button label />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {!findProducts && (
                <div className={style.notFoundPage}>
                  {phone && (
                    <div className="headerLayout">
                      <div className="containerLayout" style={{ display: "flex", alignItems: "center" }}>
                        <ArrowSvg stroke={"#13101E"} x={90} onClick={() => navigate("/CORAL_E-Commerce/")} />
                        <span>Search results</span>
                      </div>
                    </div>
                  )}
                  <div className={style.notFoundTxt} style={{ height: "100%" }}>
                    <img src={notFound} style={desktop ? { width: "300px" } : {}} />
                    <span
                      className="text-dark"
                      style={phone ? { fontSize: "28px", fontWeight: 700, lineHeight: "26px", marginTop: "24px" } : { fontSize: "40px", fontWeight: 700, lineHeight: "40px", marginTop: "24px" }}
                    >
                      Whoops!
                    </span>
                    <span className={`${phone ? "title-medium" : "body-medium"} text-dark`} style={{ textAlign: "center", marginTop: "16px", padding: "0 40px" }}>
                      We coudn’t find what you’re looking for. Try something else.
                    </span>
                  </div>
                  <div className={style.btnContainer}>{phone && <DefaultBtn onClick={() => navigate("/CORAL_E-Commerce/")}>Back to home</DefaultBtn>}</div>
                </div>
              )}
            </>
          )}
        </div>
        {desktop && <Footer />}
        {!loading && findProducts && phone && <NavBarMobile />}
      </div>
    </>
  );
};
export default Search;
