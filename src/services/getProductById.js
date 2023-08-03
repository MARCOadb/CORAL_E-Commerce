import axios from "axios";
import { db, storage } from "./firebaseConnection";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref } from "firebase/storage";

const getProductById = async (id) => {
  const productsRef = collection(db, "products");
  const storageRef = ref(storage, `/productsImg/${querySnapshot.docs[0].data().name}`);
  console.log(storageRef); //olhar oq tem aq pra retorna a imagem
  const q = query(productsRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  return {
    name: querySnapshot.docs[0].data().name,
    description: querySnapshot.docs[0].data().description,
    price: querySnapshot.docs[0].data().price,
    image: storageRef,
  };
};
export default getProductById;
