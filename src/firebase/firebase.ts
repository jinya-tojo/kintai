import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDjb3C3Gl0DR3DMjGBIPQER7WGTU4DYLN0",
  authDomain: "kintai-76493.firebaseapp.com",
  projectId: "kintai-76493",
  storageBucket: "kintai-76493.appspot.com",
  messagingSenderId: "1075158817472",
  appId: "1:1075158817472:web:f0a38e3a389dfa8dfdeb25"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      if (errorCode === 'auth/email-already-in-use') {
        alert('すでに登録済みのユーザーです。')
      }
    })
}

export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      // const errorMessage = error.message
      if (errorCode) {
        alert(errorCode)
      }
    })
}

export const db = getFirestore(app)
