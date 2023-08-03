export const setProductQnt = (user, productId, qnt) => {
  if (user.bag === null) user.bag = [];
  const bagArr = user.bag;
  const productFound = bagArr.find((item) => item.id === productId);
  if (!productFound) {
    bagArr.push({
      id: productId,
      qnt,
    });
  } else productFound.qnt = qnt;
  return bagArr;
};
