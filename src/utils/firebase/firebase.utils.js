import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjMfvfVnxgYGQzEeXKB-YrDaVGnrz8eY0",
  authDomain: "crwn-clothing-db-c7f7a.firebaseapp.com",
  projectId: "crwn-clothing-db-c7f7a",
  storageBucket: "crwn-clothing-db-c7f7a.appspot.com",
  messagingSenderId: "1486485108",
  appId: "1:1486485108:web:6f290f1a087eff7cd60321",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signinWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
