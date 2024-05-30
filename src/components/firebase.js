// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAQCpsWGS3vYEGvYevSIrGfMn5v40PtdWs",
//   authDomain: "ehr-hub.firebaseapp.com",
//   projectId: "ehr-hub",
//   storageBucket: "ehr-hub.appspot.com",
//   messagingSenderId: "6835888144",
//   appId: "1:6835888144:web:6e6f9945df925a4538ea95",
//   measurementId: "G-6X52CB8N8W"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);

// export { app, auth, db };




//...................................................

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQCpsWGS3vYEGvYevSIrGfMn5v40PtdWs",
  authDomain: "ehr-hub.firebaseapp.com",
  projectId: "ehr-hub",
  storageBucket: "ehr-hub.appspot.com",
  messagingSenderId: "6835888144",
  appId: "1:6835888144:web:6e6f9945df925a4538ea95",
  measurementId: "G-6X52CB8N8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };