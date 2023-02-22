import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAYTYTNSETqRoXV-iDAcyVA5e20tCOT5Xw",
  authDomain: "fir-v9-testing-d709c.firebaseapp.com",
  projectId: "fir-v9-testing-d709c",
  storageBucket: "fir-v9-testing-d709c.appspot.com",
  messagingSenderId: "664084582613",
  appId: "1:664084582613:web:8587039db03d3db85b925c",
  measurementId: "G-7Z9L7VEE55",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export const auth = getAuth(fire)


export default fire

// https://firebase.google.com/docs/auth/web/manage-users