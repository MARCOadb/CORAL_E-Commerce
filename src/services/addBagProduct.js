export const addBagProduct = (user, productId) => {
  if (user.bag === null) user.bag = [];
  const bagArr = user.bag;
  const productFound = bagArr.find((item) => item.id === productId);
  if (!productFound) {
    bagArr.push({
      id: productId,
      qnt: 1,
    });
  } else productFound.qnt++;
  return bagArr;
};
