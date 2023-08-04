import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

const getCategoryById = async (id) => {
  const categoriesRef = collection(db, "categories");
  const q = query(categoriesRef, where("id", "==", parseInt(id)));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs[0].data().name,
 
};
export default getCategoryById;
