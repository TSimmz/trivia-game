import { firebase } from 'config/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore();

export const addDocument = async (username, score, total) => {
  try {
    const docRef = await addDoc(collection(db, 'high-scores'), {
      id: 2,
      username: username,
      userScore: score,
      totalScore: total,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
