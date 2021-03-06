import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"
import "firebase/firestore"

const AuthContexts = React.createContext()

export function useAuth() {
    return useContext(AuthContexts)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("Save user to firestore", user.uid)
            const userRef = db.collection("users");
            userRef.doc(user.uid).set({
                uid: user.uid,
                email: user.email
            })
        } else {
            // User not logged in 
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

    function saveUserToFirestore(user){ 
        const userRef = db.collection("users");
        userRef.doc(user.uid).set({
            uid: user.uid,
            email: user.email
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        saveUserToFirestore,
    }

    return (
        <AuthContexts.Provider value={value}>
            {!loading && children}
        </AuthContexts.Provider>
    )
}