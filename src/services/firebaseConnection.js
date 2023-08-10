import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBOy6igCGmJ7lXhik5cG-4weW1pKOGQ8xg",
    authDomain: "cora-l.firebaseapp.com",
    projectId: "cora-l",
    storageBucket: "cora-l.appspot.com",
    messagingSenderId: "113467344833",
    appId: "1:113467344833:web:ac41694416b84b93afd140"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { db, auth, storage }