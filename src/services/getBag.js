export const getBag = () => {
  const bag = JSON.parse(localStorage.getItem("bag"));
  return bag;
};
