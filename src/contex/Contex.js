import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const Authcontex = createContext();
const auth = getAuth(app);

const Contex = ({ children }) => {
    const [loading,setloading]=useState(true)
    const [user, setuser] = useState(null);
    const GoogleProviderlogin = (provider) => {
        setloading(true)
        return signInWithPopup(auth, provider);
    }
    const createuser = (email, password) => {
        setloading(true)
    return createUserWithEmailAndPassword(auth,email,password);
    }

    const singinwithemailpass=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    const updateuserprofile=(profile)=>{
        return updateProfile(auth.currentUser,profile)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            setloading(false)
        })
        return () => unsubscribe();
    }, [])

    const Authinfo = { user,loading,updateuserprofile, GoogleProviderlogin,createuser,singinwithemailpass, logout };
    return (
        <div>
            <Authcontex.Provider value={Authinfo}>
                {
                    children
                }
            </Authcontex.Provider>
        </div>
    );
};

export default Contex;