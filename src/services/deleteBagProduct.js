export const deleteBagProduct = (productId, remove) => {
  if (localStorage.getItem("bag") === null) localStorage.setItem("bag", "[]");
  const bagArr = JSON.parse(localStorage.getItem("bag"));
  const productFound = bagArr.find((item) => item.id === productId);
  if (productFound?.qnt > 1 && !remove) {
    productFound.qnt--;
    localStorage.setItem("bag", JSON.stringify(bagArr));
  } else if (!remove) {
    const removedItem = bagArr.filter((item) => item.qnt !== 1);
    localStorage.setItem("bag", JSON.stringify(removedItem));
  } else {
    console.log("dsadas");
    const removedItem = bagArr.filter((item) => item.id !== productFound.id);
    localStorage.setItem("bag", JSON.stringify(removedItem));
  }
};
