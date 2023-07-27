export const deleteBagProduct = (productId) => {
  if (localStorage.getItem("bag") === null) localStorage.setItem("bag", "[]");
  const bagArr = JSON.parse(localStorage.getItem("bag"));
  const productFound = bagArr.find((item) => item.id === productId);
  if (productFound?.qnt > 1) {
    productFound.qnt--;
    localStorage.setItem("bag", JSON.stringify(bagArr));
  } else {
    const removedItem = bagArr.filter((item) => item.qnt !== 1);
    console.log(removedItem);
    localStorage.setItem("bag", JSON.stringify(removedItem));
  }
};
