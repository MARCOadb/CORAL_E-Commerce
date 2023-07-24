export const addBagProduct = (productId) => {
  if (localStorage.getItem("bag") === null) localStorage.setItem("bag", "[]");
  const bagArr = JSON.parse(localStorage.getItem("bag"));
  bagArr.push(productId);
  localStorage.setItem("bag", JSON.stringify(bagArr));
};
