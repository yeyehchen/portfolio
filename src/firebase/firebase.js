import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore"; 

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export async function sendMessage(name, email, message) {
  await addDoc(collection(db, "messages"), {
    name: name,
    email: email,
    message: message,
    timestamp: Timestamp.now(), 
  });
}