import { useEffect, useState } from "react";
import "./style.scss";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import useBreakpoint from "../../hooks/useBreakPoint";
import Modal from "../modal";
import Product from "../product";
import { useNavigate } from "react-router-dom";
import getAllProducts from "../../services/getAllProducts";
import MobileLayout from "../../layouts/mobileLayout";
import setRecentSearch from "../../services/setRecentSearch";
import getRecentSearch from "../../services/getRecentSearch";

const SearchBar = ({ open, setOpen, text, icon }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [getSearchRecent, setGetSearchRecent] = useState(null);
  const { desktop, phone } = useBreakpoint();

  const navigate = useNavigate();

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    if (e.key === "Enter" || e.type === "click") {
      navigate(`/search/${searchValue}`, {
        state: {
          searchValue,
        },
      });
      if (phone) setOpen(false);
      setRecentSearch(searchValue);
    }
  };

  useEffect(() => {
    if (phone) {
      setLoading(true);
      getAllProducts()
        .then((data) => setProducts(data))
        .finally(() => setLoading(false));
      setGetSearchRecent(getRecentSearch());
      console.log(getRecentSearch());
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
              <span className="title-regular text-high-emphasis">Recent Searchs</span>
              <div className="recentContainer">
                {!!getSearchRecent && getSearchRecent?.map((item, index) => <input type="button" className="recentBtn title-medium " key={index} onClick={searchHandler} value={item} />)}
              </div>
              <span className="title-regular text-high-emphasis">New Arrivals</span>
              <div className="arrivals-carousel" style={{ padding: "0" }}>
                {!loading && products?.map((item) => <Product largura={desktop ? 286 : 136} altura={desktop ? 286 : 136} data={item.data} label key={item.uid} itemId={item.uid} />)}
              </div>
            </div>
          </MobileLayout>
        </>
      )}
    </>
  );
};
export default SearchBar;
