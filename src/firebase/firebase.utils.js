import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCLHl3w5exMivQFukZnKhDycvsKbyGb_hA",
  authDomain: "crud-react-6de1e.firebaseapp.com",
  databaseURL: "https://crud-react-6de1e.firebaseio.com",
  projectId: "crud-react-6de1e",
  storageBucket: "crud-react-6de1e.appspot.com",
  messagingSenderId: "1001455702075",
  appId: "1:1001455702075:web:60ab29559a26c92d494c1e",
  measurementId: "G-DKSB3C3ZWE",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
