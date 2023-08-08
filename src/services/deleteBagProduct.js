import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const deleteBagProduct = async (userId, productId, remove) => {
  const bagRef = collection(db, "bag");
  const q = query(bagRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs[0]) {
    let bagArr = querySnapshot.docs[0].data();
    const productFound = bagArr.products.find((item) => item?.id === productId);
    if (!productFound) return "Nothing in bag";
    if (productFound?.qnt > 1 && !remove) {
      productFound.qnt--;
      await updateDoc(querySnapshot.docs[0].ref, bagArr);
      return bagArr;
    } else if (!remove) bagArr = bagArr.products.filter((item) => item.qnt !== 1);
    else bagArr = bagArr.products.filter((item) => item.id !== productFound.id);
    await updateDoc(querySnapshot.docs[0].ref, {
      products: bagArr,
    });
  }
};
