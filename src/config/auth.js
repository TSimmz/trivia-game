import { firebase } from './firebase.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth(firebase);

export const isCurrentUser = auth.currentUser !== undefined;

export const signupUser = async (username, email, password) => {
  console.log('Creating user...');
  const response = await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('Updating username...');
      return updateProfile(auth.currentUser, {
        displayName: username,
      });
    })
    .then(() => {
      const user = auth.currentUser;
      console.log(`Successfully created user: ${user.displayName}`);
      return user;
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`);
      return error.code;
    });

  return response;
};

export const loginUser = async (email, password) => {
  console.log('Logging in...');
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      console.log(`Successfully signed in user: ${user.displayName}`);
      return user;
    })
    .catch((error) => {
      console.log(`${error.code}: ${error.message}`);
      return error.code;
    });

  return response;
};
