import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAJ_J-fEaVUMbYTuGqwYe8tvZ3Zb1xQeJ0',
  authDomain: 'trivia-game-9adb8.firebaseapp.com',
  databaseURL: 'https://trivia-game-9adb8-default-rtdb.firebaseio.com/',
  projectId: 'trivia-game-9adb8',
  storageBucket: 'trivia-game-9adb8.appspot.com',
  messagingSenderId: '361576782282',
  appId: '1:361576782282:web:5719fa68821587f1821733',
  measurementId: 'G-BPMSKH3ZD0',
};

export const firebase = initializeApp(firebaseConfig);
