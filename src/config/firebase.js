import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
} from 'firebase/auth';

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

export const signupUser = async (email, password) => {
  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase);
  const user = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`Successfully created user: ${user.email}`);
      return user;
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`);
    });

  return user;
};

// export const loginUser = async (email, password) => {
//   await signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(`Successfully signed in user: ${JSON.stringify(user)}`);
//     })
//     .catch((error) => {
//       console.log(`${error.code}: ${error.message}`);
//     });
// };
