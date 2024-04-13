import firebase from "firebase/app";
import "firebase/auth"; // 인증 기능 사용시
import "firebase/firestore"; // 데이터베이스 기능 사용시

const firebaseConfig = {
  apiKey: "AIzaSyBWXwshOXBh6o-8PZ4anl622e7I_CQwtoU",
  authDomain: "prac-610d6.firebaseapp.com",
  projectId: "prac-610d6",
  storageBucket: "prac-610d6.appspot.com",
  messagingSenderId: "45375925553",
  appId: "1:45375925553:web:70fd00de9b3fbdbc5b9410",
};

let firestore = null;
// Firebase가 이미 초기화되었는지 확인
if (!(firebase.getApps().length > 0) ) {
  firestore = firebase.initializeApp(firebaseConfig);
}



export default  firestore;
