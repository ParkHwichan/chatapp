import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBWXwshOXBh6o-8PZ4anl622e7I_CQwtoU",
  authDomain: "prac-610d6.firebaseapp.com",
  projectId: "prac-610d6",
  storageBucket: "prac-610d6.appspot.com",
  messagingSenderId: "45375925553",
  appId: "1:45375925553:web:70fd00de9b3fbdbc5b9410",
};

const firebaseApp =  initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);


export default firestore;