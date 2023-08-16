import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const getOrders = async (userId) => {
  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userOrders = querySnapshot.docs.map((value) => value.data());
    return userOrders;
  }
  return null;
};
