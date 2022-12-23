import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATIww0NhwDM-n_ugDc5gW290K-mjdP_3I",
  authDomain: "the--gourmand-lounge.firebaseapp.com",
  projectId: "the--gourmand-lounge",
  storageBucket: "the--gourmand-lounge.appspot.com",
  messagingSenderId: "918234929567",
  appId: "1:918234929567:web:413129439967e5394bc5aa",
  measurementId: "G-NDRB26BDC9",
};

//init app
const app = initializeApp(firebaseConfig);

// //init services
export const database = getFirestore(app);

// //reference collection
// //collection from firebase/firestore
// const collectionRef = collection(database, "menu");

// //get collection data
// const getData = () => {
//   getDocs(collectionRef).then(snapshot => {
//     console.log(snapshot.docs);
//   });
// };
