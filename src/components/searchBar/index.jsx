import { useState } from "react";
import "./style.scss";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import useBreakpoint from "../../hooks/useBreakPoint";
const SearchBar = ({ text, icon }) => {
  const [results, setResults] = useState(null);
  const { desktop, phone } = useBreakpoint();
  return (
    <>
      {desktop ? (
        <input id={icon ? "icon" : undefined} className="searchBar" type="search" placeholder={text} />
      ) : (
        <>
          <div className="searchHeader">
            <ArrowSvg stroke={"#13101E"} x={90} />
            <input id={icon ? "icon" : undefined} className="searchBar" type="search" placeholder={text} />
          </div>
          <div className="searchBody">
            <div className="arrivals-carousel">{!loading && products?.map((item) => <Product largura={desktop ? 286 : 136} altura={desktop ? 286 : 136} data={item} label key={item.id} />)}</div>
          </div>
        </>
      )}
    </>
  );
};
export default SearchBar;
