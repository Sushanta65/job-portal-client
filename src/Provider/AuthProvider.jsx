import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userSignOut = () => {
        signOut(auth)
        .then(data => {
            console.log(data)
            
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        userSignOut
    }

   


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (existUser) => {
            setUser(existUser)
            const loggedInUser = {email: existUser?.email}
            if(existUser?.email){
                axios.post('http://localhost:5200/jwt', loggedInUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
            else{
                axios.post('http://localhost:5200/logout', {}, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
        })

        
        return () => {
            unsubscribe()
        }
    }, [])
    console.log(user)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;