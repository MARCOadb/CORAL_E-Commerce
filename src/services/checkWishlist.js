export const checkWishlist = (productId) => {
  if (localStorage.getItem("wishlist") === null) localStorage.setItem("wishlist", "[]");
  const wishArr = JSON.parse(localStorage.getItem("wishlist"));
  return wishArr.find((item) => item === productId);
};
