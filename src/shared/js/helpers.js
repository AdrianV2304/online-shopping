import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export const firebaseRequest = async (collectionName) => {
  const productsCollection = collection(db, collectionName);
  const data = await getDocs(productsCollection);
  return data?.docs?.map((doc) => doc?.data());
};
