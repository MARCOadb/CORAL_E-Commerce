export const deleteBagProduct = (user, productId, remove) => {
  if (user.bag === null) user.bag = [];
  const bagArr = user.bag;
  const productFound = bagArr.find((item) => item.id === productId);
  if (productFound?.qnt > 1 && !remove) {
    productFound.qnt--;
    return bagArr; // checar se esta correto ver se n deve retornar productfound
  } else if (!remove) {
    const removedItem = bagArr.filter((item) => item.qnt !== 1);
    return removedItem;
  } else {
    const removedItem = bagArr.filter((item) => item.id !== productFound.id);
    return removedItem;
  }
};
