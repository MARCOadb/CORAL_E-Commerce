import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebaseConnection";

export const setProductQnt = async (userId, productId, qnt) => {
  const bagRef = collection(db, "bag");
  const q = query(bagRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs[0]) {
    const bagArr = querySnapshot.docs[0].data();
    const productFound = bagArr.products.find((item) => item.id === productId);
    if (!productFound) {
      bagArr.products.push({
        id: productId,
        qnt: qnt,
      });
    } else productFound.qnt += qnt;
    await updateDoc(querySnapshot.docs[0].ref, bagArr);
  } else {
    await addDoc(bagRef, {
      userId,
      products: [
        {
          id: productId,
          qnt: qnt,
        },
      ],
    });
  }
};
