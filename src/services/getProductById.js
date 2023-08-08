import { db, storage } from "./firebaseConnection";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { ref } from "firebase/storage";

const getProductById = async (id) => {
  const productRef = doc(db, "products", id);
  const productSnap = await getDoc(productRef);
  return productSnap.data();
};
export default getProductById;
