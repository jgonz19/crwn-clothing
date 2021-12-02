import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyCXDjxpyTb6abb-8jdXA_U_nCtK_ycjkr0",
    authDomain: "crwn-clothing-f0690.firebaseapp.com",
    projectId: "crwn-clothing-f0690",
    storageBucket: "crwn-clothing-f0690.appspot.com",
    messagingSenderId: "188437246119",
    appId: "1:188437246119:web:68a3be5d0f7f8351bd6b82",
    measurementId: "G-5G0PLP5H6M"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return; 

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();
    
    try{
      await userRef.set({
        displayName, 
        email, 
        createAt, 
        ...additionalData
      })
    }catch (error){
        console.log("error creating user", error.message);

    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


