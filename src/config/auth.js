import { firebase } from './firebase.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(firebase);

export const signupUser = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`Successfully created user: ${user.email}`);
      return user;
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`);
      return error.code;
    });

  return user;
};

export const loginUser = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`Successfully signed in user: ${user.email}`);
      return user;
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`);
      return error.code;
    });
};
