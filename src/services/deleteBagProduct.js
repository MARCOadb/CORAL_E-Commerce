export const deleteBagProduct = (productId) => {
  if (localStorage.getItem("bag") === null) localStorage.setItem("bag", "[]");
  const bagArr = JSON.parse(localStorage.getItem("bag"));
  const index = bagArr.findIndex((item) => item === productId);
  console.log(index);
  if (index >= 0) bagArr.splice(index, 1);

  localStorage.setItem("bag", JSON.stringify(bagArr));
};
