export const wishlistProduct = (productId) => {
  if (localStorage.getItem("wishlist") === null) localStorage.setItem("wishlist", "[]");
  let wishArr = JSON.parse(localStorage.getItem("wishlist"));
  console.log(productId);
  wishArr.find((item) => item === productId) ? (wishArr = wishArr.filter((item) => item !== productId)) : wishArr.push(productId);
  localStorage.setItem("wishlist", JSON.stringify(wishArr));
};
