import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const getBag = async (userId) => {
  const bagRef = collection(db, "bag");
  const q = query(bagRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

<<<<<<< HEAD
  //if (!querySnapshot.docs[0]) {
  //  await addDoc(bagRef, {
  //    userId,
  //    products: [],
  //  });
  //}
  return querySnapshot.docs[0].data().products;
=======
  if (querySnapshot.empty) {
    console.log(querySnapshot.docs);
    await addDoc(bagRef, {
      userId,
      products: [],
    });
  } else return querySnapshot.docs[0].data().products;
>>>>>>> e70852dde7e1f0d7bbfcdccc193a206d66b37b6e
};
