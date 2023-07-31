export const getWishlist = (user) => {
  if (user.wishlist === null) user.wishlist = [];
  const wishlist = user.wishlist;
  return wishlist;
};
