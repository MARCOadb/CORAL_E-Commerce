import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const clearBag = async (userId) => {
  const bagRef = collection(db, "bag");
  const q = query(bagRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  await setDoc(querySnapshot.docs[0].ref, {
    products: [],
    userId,
  });
};
