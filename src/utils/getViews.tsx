import { doc, getDoc, updateDoc, increment } from 'firebase/firestore/lite';
import { FirebaseDB } from '@/firebase/config';

export const getViews = async () => {
  const docRef = doc(FirebaseDB, "views", "counter");

  console.log("getViews Llamado");

  await updateDoc(docRef, {
    count: increment(1)
  });

  const docSnap = await getDoc(docRef);
  const { count } = docSnap.data();

  localStorage.setItem("views", count.toString());

  return count;
}
