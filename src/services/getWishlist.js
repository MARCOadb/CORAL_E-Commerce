import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const getWishlist = async (userId) => {
  const wishlistRef = collection(db, "wishlist");
  const q = query(wishlistRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
<<<<<<< HEAD
  //if (!querySnapshot.docs[0]) {
  //  await addDoc(wishlistRef, {
  //    userId,
  //    products: [],
  //  });
  //}
  return querySnapshot.docs[0].data().products;
=======
  if (querySnapshot.empty) {
    await addDoc(wishlistRef, {
      userId,
      products: [],
    });
  } else return querySnapshot.docs[0].data().products;
>>>>>>> e70852dde7e1f0d7bbfcdccc193a206d66b37b6e
};
