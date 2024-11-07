import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import useAxiousPublic from '../hooks/useAxiousPublic';
export const AuthContext=createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const axiousPublic=useAxiousPublic();

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

    const logOut=()=>{
        return signOut(auth);
    }
    const googleLogin=()=>{
        return signInWithPopup(auth, provider)

    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
            const userInfo=currentUser.email;
            if(currentUser){
                axiousPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
            }
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
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;