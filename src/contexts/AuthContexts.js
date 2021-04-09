import React, {useContext, useState, useEffect} from "react"
import { auth } from "../firebase"

const AuthContexts = React.createContext()

export function useAuth(){
    return useContext(AuthContexts)
}


export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }


    useEffect(()=>{
        const unsubscribe  = auth.onAuthStateChanged(user => {
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

    return(
         <AuthContexts.Provider value={value}>
             {children}
         </AuthContexts.Provider>
    )

}