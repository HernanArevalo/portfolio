import { doc, getDoc, updateDoc, increment } from 'firebase/firestore/lite';
import { FirebaseDB } from '@/firebase/config';

export const getViews = async () => {
  const docRef = doc(FirebaseDB, "views", "counter");

  console.log("getting views");
  
  const docSnap = await getDoc(docRef);
  const { count } = docSnap.data();

  localStorage.setItem("views", count)  
  return count;
}

export const updateViews = async () => {
  const docRef = doc(FirebaseDB, "views", "counter");

  console.log("update views");

  await updateDoc(docRef, {
    count: increment(1)
  });
}

