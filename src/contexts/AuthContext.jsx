import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState()

    function signIn(email, password) {
        console.log(email)
        console.log(password)
        console.log('sucesso')
    }

    async function SignUp(firstName, lastName, phoneNumber, email, password) {
        setLoadingAuth(true)

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid

                await setDoc(doc(db, 'users', uid), {
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    country: country,
                    city: city
                })
                    .then(() => {
                        toast.success('Usuário cadastrado com Sucesso!')
                        let data = {
                            uid: uid,
                            firstName: firstName,
                            lastName: lastName,
                            phoneNumber: phoneNumber,
                            country: country,
                            city: city,
                            email: value.user.email
                        }

                        storageUser(data)
                        setUser(data)
                        setEmailError(false)
                        setOpenModal(false)
                        navigate('/')
                        loadingAuth(false)
                    })
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        toast.error('E-mail já cadastrado!')
                        setEmailError(true)
                        break
                    case 'auth/invalid-email':
                        setEmailError(true)
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
            SignUp
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider