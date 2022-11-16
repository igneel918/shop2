import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAggwtBN8qF6i1pX7eFBelysUmb2HVkpmo",
  authDomain: "shop-31e94.firebaseapp.com",
  databaseURL: "https://shop-31e94-default-rtdb.firebaseio.com",
  projectId: "shop-31e94",
  storageBucket: "shop-31e94.appspot.com",
  messagingSenderId: "165447127944",
  appId: "1:165447127944:web:5f40ca110408cee4c5603d",
  measurementId: "G-FQWVY34JH0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
