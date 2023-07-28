import { useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../services/firebaseConnection'
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [loadingAuth, setLoadingAuth] = useState(false)
    const navigate = useNavigate()

    function signIn(email, password) {
        console.log(email)
        console.log(password)
        toast.success('sucesso')
    }

    async function signUp(firstName, lastName, phoneNumber, profilePhoto, email, password) {
        setLoadingAuth(true)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid

                // console.log(profilePhoto)

                // const setRef = ref(storage, `images/${uid}/${profilePhoto}`)

                // const setPhoto = uploadBytes(setRef, profilePhoto)
                //     .then(() => {
                //         console.log('enviado com sucesso')
                //     })

                await setDoc(doc(db, 'users', uid), {
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    profilePhoto: null,
                    email: email
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            firstNamename: firstName,
                            lastName: lastName,
                            email: value.user.email,
                            profilePhoto: null
                        }
                        setUser(data)
                        setLoadingAuth(false)
                        toast.success('User registrated!')
                        navigate('/')
                    })
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        toast.error('E-mail já cadastrado!')
                        break
                    case 'auth/invalid-email':
                        toast.error('E-mail inválido!')
                        break
                }
                setLoadingAuth(false)
            })
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            signIn,
            signUp,
            loadingAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider