import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const checkWishlist = async (userId, productId) => {
  const wishlistRef = collection(db, "wishlist");
  const q = query(wishlistRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs[0]) {
    const wishArr = querySnapshot.docs[0].data();
    const isWishListed = wishArr.products.find((item) => item === productId);
    return !!isWishListed;
  } else {
    await addDoc(wishlistRef, {
      userId,
      products: [],
    });
    return false;
  }
};
