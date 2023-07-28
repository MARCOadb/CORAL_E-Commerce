export const getWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist;
};
