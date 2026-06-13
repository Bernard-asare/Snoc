import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import type { User } from './types';

export const signUp = async (email: string, password: string, name: string, role: 'admin' | 'client' = 'client') => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      email,
      name,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      try {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.data() as User;
        callback(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        callback(null);
      }
    } else {
      callback(null);
    }
  });
};
