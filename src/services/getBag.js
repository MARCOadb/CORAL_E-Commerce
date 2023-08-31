import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const getBag = async (userId) => {
  const bagRef = collection(db, "bag");
  const q = query(bagRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    await addDoc(bagRef, {
      userId,
      products: [],
    });
  } else return querySnapshot.docs[0].data().products;
};
