import { db } from "./firebaseConnection";
import { doc, getDoc } from "firebase/firestore";

const getUserById = async (id) => {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
};
export default getUserById;