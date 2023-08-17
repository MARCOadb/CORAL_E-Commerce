import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebaseConnection";
import { toast } from 'react-toastify'

export const addBagProduct = async (userId, productId) => {
  const bagRef = collection(db, "bag");
  const q = query(bagRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs[0]) {
    const bagArr = querySnapshot.docs[0].data();
    const productFound = bagArr.products.find((item) => item.id === productId);
    if (!productFound) {
      bagArr.products.push({
        id: productId,
        qnt: 1,
      });
    } else productFound.qnt++;

    await updateDoc(querySnapshot.docs[0].ref, bagArr);
  } else if (!querySnapshot.docs[0]) {
    await addDoc(bagRef, {
      userId,
      products: [
        {
          id: productId,
          qnt: 1,
        },
      ],
    });
  }

  toast.success('Item Added to Bag')
};
