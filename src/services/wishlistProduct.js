export const wishlistProduct = (user, productId) => {
  let wishArr = user.wishlist;
  if (user.wishlist === null) wishArr = [];
  wishArr.find((item) => item === productId) ? (wishArr = wishArr.filter((item) => item !== productId)) : wishArr.push(productId);
  return wishArr;
};
