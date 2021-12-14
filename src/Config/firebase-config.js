import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBuraBOGk367YZqrQr4B_s2P35wnH0y_vw",
    authDomain: "demoday15.firebaseapp.com",
    projectId: "demoday15",
    storageBucket: "demoday15.appspot.com",
    messagingSenderId: "302696855560",
    appId: "1:302696855560:web:cdec507401a611f88e39bd",
    measurementId: "G-KXPBLJ4BXW",
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
  
  