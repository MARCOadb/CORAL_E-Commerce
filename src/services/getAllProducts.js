import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConnection";

const getAllProducts = async () => {
  const productsRef = collection(db, "products");
  const products = await getDocs(productsRef);
  const arrProd = products.docs.map((item) => {
    const prod = {
      data: item.data(),
      uid: item.id,
    };
    return prod;
  });
  return arrProd;
};
export default getAllProducts;
