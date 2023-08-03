import { useEffect, useState } from "react";
import "./style.scss";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import useBreakpoint from "../../hooks/useBreakPoint";
import Modal from "../modal";
import Product from "../product";
import { useNavigate } from "react-router-dom";
import getAllProducts from "../../services/getAllProducts";
const SearchBar = ({ text, icon }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const { desktop, phone } = useBreakpoint();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (e.key === "Enter") {
      navigate(`/search/${searchValue}`, {
        state: {
          searchValue,
        },
      });
    }
  };

  useEffect(() => {
    if (phone) {
      setLoading(true);
      getAllProducts()
        .then((data) => setProducts(data))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <>
      {desktop ? (
        <input onKeyUp={searchHandler} id={icon ? "icon" : undefined} className="searchBar" placeholder={text} />
      ) : (
        <>
          <div className="searchHeader">
            <ArrowSvg stroke={"#13101E"} x={90} />
            <input id={icon ? "icon" : undefined} className="searchBar" type="search" placeholder={text} />
          </div>
          <div className="searchBody">
            <div className="arrivals-carousel">
              {!loading && products?.map((item) => <Product largura={desktop ? 286 : 136} altura={desktop ? 286 : 136} data={item.data} label key={item.uid} itemId={item.uid} />)}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default SearchBar;
