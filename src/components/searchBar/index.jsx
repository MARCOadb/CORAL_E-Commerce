import "./style.scss";
const SearchBar = ({ text, icon }) => {
  return <input id={icon ? "icon" : undefined} className="searchBar" type="search" placeholder={text} />;
};
export default SearchBar;
