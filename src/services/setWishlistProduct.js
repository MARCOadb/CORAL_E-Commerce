import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebaseConnection";
export const setWishlistProduct = async (userId, productId) => {
  const wishlistRef = collection(db, "wishlist");
  const q = query(wishlistRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.docs[0]) {
    let wishArr = querySnapshot.docs[0].data();
    let removedProduct;
    wishArr.products.find((item) => item === productId) ? (removedProduct = wishArr.products.filter((item) => item !== productId)) : wishArr.products.push(productId);
    if (removedProduct) wishArr.products = removedProduct;
    await updateDoc(querySnapshot.docs[0].ref, wishArr);
    return !removedProduct;
  } else if (!querySnapshot.docs[0]) {
    await addDoc(wishlistRef, {
      userId,
      products: [productId],
    });
    return true;
  }
};
