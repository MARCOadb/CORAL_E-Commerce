export const checkWishlist = (user, productId) => {
  if (user.wishlist === null) user.wishlist = [];
  const wishArr = user.wishlist;
  return wishArr.find((item) => item === productId);
};
