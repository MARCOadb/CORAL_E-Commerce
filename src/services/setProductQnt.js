export const setProductQnt = (productId, qnt) => {
  if (localStorage.getItem("bag") === null) localStorage.setItem("bag", "[]");
  const bagArr = JSON.parse(localStorage.getItem("bag"));
  const productFound = bagArr.find((item) => item.id === productId);
  if (!productFound) {
    bagArr.push({
      id: productId,
      qnt,
    });
  } else productFound.qnt = qnt;
  localStorage.setItem("bag", JSON.stringify(bagArr));
};
