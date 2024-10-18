import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext=createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const updateProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })    
    }

    const signOut=()=>{
        return signOut(auth);
    }
    const googleLogin=(provider)=>{
        return signInWithPopup(auth, provider)

    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        updateProfile,
        googleLogin,
        signOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;