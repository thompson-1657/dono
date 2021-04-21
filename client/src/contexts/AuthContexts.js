import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"
import "firebase/firestore"

const AuthContexts = React.createContext()

export function useAuth() {
    return useContext(AuthContexts)
}


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User logged in already or has just logged in.
            
            const userRef = db.collection("users");
            userRef.doc(user.uid).set({
                uid: user.uid,
                email: user.email
            })
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

    function saveUserToFirestore(user){ 
        const userRef = db.collection("users");
        userRef.doc(user.uid).set({
            uid: user.uid,
            email: user.email
        })
        console.log(user.uid);
        console.log(user.email)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
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
            {children}
        </AuthContexts.Provider>
    )

}