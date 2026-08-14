import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'kelly-sub-challenge-20260814',
  appId: '1:3146765052:web:b25bc1688644391d80fd79',
  storageBucket: 'kelly-sub-challenge-20260814.firebasestorage.app',
  apiKey: 'AIzaSyDqK1c3smRV7kAq4UaDANqwq53yuGVg05k',
  authDomain: 'kelly-sub-challenge-20260814.firebaseapp.com',
  messagingSenderId: '3146765052'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
