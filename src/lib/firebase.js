import Firebase from "firebase/app";
import'firebase/firestore';
import 'firebase/auth';
// here to import the seed files
//import { seedDatabase } from "../seed";
const config={
    apiKey: "AIzaSyBUMqNEsH2vup3sGBflawWawkAOfrwfn2M",
    authDomain: "instagram-irfan.firebaseapp.com",
    projectId: "instagram-irfan",
    storageBucket: "instagram-irfan.appspot.com",
    messagingSenderId: "366598911322",
    appId: "1:366598911322:web:f5bfdc8a1fdc8631fa6f63"
};

const firebase= Firebase.initializeApp(config);
const {fieldValue}=Firebase.firestore;

//here to call the seed file (only once!)
//seedDatabase(firebase)

export{firebase,fieldValue};