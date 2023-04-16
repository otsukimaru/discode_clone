import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzrX8MazPrwRcOf13KGGbDwfErHwa48G8",
  authDomain: "discord-clone-98881.firebaseapp.com",
  projectId: "discord-clone-98881",
  storageBucket: "discord-clone-98881.appspot.com",
  messagingSenderId: "317651781320",
  appId: "1:317651781320:web:571efdbcc9666cd20507fd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
