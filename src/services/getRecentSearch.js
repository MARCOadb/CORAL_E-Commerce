export const getRecentSearch = () => {
  if (localStorage.getItem("recentSearch") === null) localStorage.setItem("recentSearch", "[]");
  return JSON.parse(localStorage.getItem("recentSearch"));
};
export default getRecentSearch;
