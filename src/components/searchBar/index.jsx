import "./style.scss";
const SearchBar = ({ text, icon }) => {
  return <>{icon ? <input id={"icon"} className="searchBar" type="search" placeholder={text} /> : <input className="searchBar" type="search" placeholder={text} />}</>;
};
export default SearchBar;
