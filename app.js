// Firebase config — substracker project
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyAfgU2SG0zXnTK8zT5SmsgmlnWVxpjPiSI",
  authDomain:        "substracker-12440.firebaseapp.com",
  projectId:         "substracker-12440",
  storageBucket:     "substracker-12440.firebasestorage.app",
  messagingSenderId: "444207682873",
  appId:             "1:444207682873:web:9ea849dc52a67cb8ed84e8"
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
