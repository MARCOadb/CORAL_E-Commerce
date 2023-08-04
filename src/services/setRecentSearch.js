export const setRecentSearch = (value) => {
  if (localStorage.getItem("recentSearch") === null) localStorage.setItem("recentSearch", "[]");

  const searchArr = JSON.parse(localStorage.getItem("recentSearch"));
  if (searchArr.length > 5) {
    const arr = searchArr.slice(1, 5);
    arr.push(value);
    localStorage.setItem("recentSearch", JSON.stringify(arr));
  } else {
    searchArr.push(value);
    localStorage.setItem("recentSearch", JSON.stringify(searchArr));
  }
};

export default setRecentSearch;
