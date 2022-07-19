import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const config = {
  apiKey: "AIzaSyARI6rl1A3B8wZN1NQkEq9ZnI340oiuWfg",
  authDomain: "crwn-db-49448.firebaseapp.com",
  projectId: "crwn-db-49448",
  storageBucket: "crwn-db-49448.appspot.com",
  messagingSenderId: "369438305682",
  appId: "1:369438305682:web:9730d77be39e701149654b",
  measurementId: "G-KP3TSSSLQY"
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

export const signOutWithGoogle = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('User has signed out');
  }).catch((error) => {
    // An error happened.
  });
};

export default app;