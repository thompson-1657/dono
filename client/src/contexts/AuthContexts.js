import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContexts = React.createContext()

export function useAuth() {
    return useContext(AuthContexts)
}


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User logged in already or has just logged in.
            console.log(user.uid);
        } else {
            // User not logged in or has just logged out.
        }
    });

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    })


    const value = {
        currentUser,
        login,
        signup,
        logout
    }


    return (
        <AuthContexts.Provider value={value}>
            {children}
        </AuthContexts.Provider>
    )

}