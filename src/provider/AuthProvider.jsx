import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    
    const loggedOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            // task 7

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail} 
             setUser(currentUser);
             console.log('current user', currentUser)
             setLoading(false)
            //  task 3
            //  if a user exist issue a token
             if (currentUser) {
                // currentUser.email  -- userEmail
                
                axios.post( 'https://ofline-database-server.vercel.app/jwt',loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token response', res.data)
                })
                
             }
            //  task 6
             else{
                axios.post('https://ofline-database-server.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data)
                })

             }
         });
         return()=>{
             return unsubscribe();
         }
     },[])


    const userInfo={
        user, loading, createUser, signIn, loggedOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;