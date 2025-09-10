
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBES2FcOlyWUk3Tag00KsVmSLPJ5Y2s2h8",
  authDomain: "inove-track-22409.firebaseapp.com",
  projectId: "inove-track-22409",
  storageBucket: "inove-track-22409.firebasestorage.app",
  messagingSenderId: "272224885365",
  appId: "1:272224885365:web:fc62e916975a7d5bde763c",
  measurementId: "G-HZS7YC4MTW"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
