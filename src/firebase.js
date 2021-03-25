import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const APIKey = process.env.REACT_APP_API_KEY

const firebaseConfig = {
    // apiKey: `${process.env.REACT_APP_API_KEY}`,
    // authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    // databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
    // projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    // storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    // messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    // appId: `${process.env.REACT_APP_ID}`

    apiKey: "AIzaSyAk6zqLUcoiFgT0otnbpSRH_1gYGWe3S8s",
    authDomain: "sarao-18c59.firebaseapp.com",
    databaseURL: "https://sarao-18c59-default-rtdb.firebaseio.com",
    projectId: "sarao-18c59",
    storageBucket: "sarao-18c59.appspot.com",
    messagingSenderId: "935098972202",
    appId: "1:935098972202:web:e9c2cfeefac554c327eb53"
};



firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

