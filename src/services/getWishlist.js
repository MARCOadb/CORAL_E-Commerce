import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const getWishlist = async (userId) => {
  const wishlistRef = collection(db, "wishlist");
  const q = query(wishlistRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    await addDoc(wishlistRef, {
      userId,
      products: [],
    });
  } else return querySnapshot.docs[0].data().products;
};
