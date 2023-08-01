export const addBagProduct = (productId) => {
  if (localStorage.getItem("bag") === null) localStorage.setItem("bag", "[]");
  const bagArr = JSON.parse(localStorage.getItem("bag"));
  const productFound = bagArr.find((item) => item.id === productId);
  if (!productFound) {
    bagArr.push({
      id: productId,
      qnt: 1,
    });
  } else productFound.qnt++;
  localStorage.setItem("bag", JSON.stringify(bagArr));
};
