import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser
    }

   


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (existUser) => {
    //         setUser(existUser)
    //     })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])
    console.log(user)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;