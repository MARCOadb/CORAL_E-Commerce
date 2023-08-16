import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebaseConnection";
import { toast } from "react-toastify";

export const addBagProduct = async (userId, order) => {
  const orderRef = collection(db, "orders");

  await addDoc(bagRef, {
    userId,
    products: [
      {
        id: productId,
        qnt: 1,
      },
    ],
  });

  toast.success("Item Added to Bag");
};
