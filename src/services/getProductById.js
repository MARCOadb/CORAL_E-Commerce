import { db } from "./firebaseConnection";
import { doc, getDoc } from "firebase/firestore";

const getProductById = async (id) => {
  const productRef = doc(db, "products", id);
  const productSnap = await getDoc(productRef);
  return productSnap.data();
};
export default getProductById;
