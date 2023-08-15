import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "./firebaseConnection";
import { ref, uploadBytes } from "firebase/storage";

export const createProduct = async (productInfo, img) => {
  const storageRef = ref(storage, `/productsImg/${productInfo.name}`);
  const productsRef = collection(db, "products");
  uploadBytes(storageRef, img).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });

  await addDoc(productsRef, productInfo);
};
