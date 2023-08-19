import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const addOrder = async (order) => {
  const orderRef = collection(db, "orders");

  await addDoc(orderRef, order);
};
