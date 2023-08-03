import { useEffect, useState } from "react";
import "./style.scss";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import useBreakpoint from "../../hooks/useBreakPoint";
import Modal from "../modal";
import Product from "../product";
import { useNavigate } from "react-router-dom";
import getAllProducts from "../../services/getAllProducts";
import MobileLayout from "../../layouts/mobileLayout";

const SearchBar = ({ open, setOpen, text, icon }) => {
  const [loading, setLoading] = useState(false);
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
          <MobileLayout
            headerSuffix={<input onKeyUp={searchHandler} id="icon" className="searchBar" placeholder={"Search"} />}
            icon="arrow"
            iconStroke={"#13101E"}
            iconAngle={90}
            open={open}
            setOpen={setOpen}
          >
            <div className="searchBody">
              <span>Recent Searchs</span>
              <span>New Arrivals</span>
              <div className="arrivals-carousel" style={{ padding: "0" }}>
                {!loading && products?.map((item) => <Product largura={desktop ? 286 : 136} altura={desktop ? 286 : 136} data={item.data} label key={item.uid} itemId={item.uid} />)}
              </div>
            </div>
          </MobileLayout>
        </>
      )}
      {console.log("aa")}
    </>
  );
};
export default SearchBar;
