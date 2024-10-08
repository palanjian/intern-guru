import { auth, googleProvider } from '../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log(auth?.currentUser?.email)
        }
        catch(err){ console.error(err) }
    }

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
            console.log('Signed in with Google');
        }
        catch(err) { console.log(err) }
    }

    const logOut = async () => {
        try{
            await signOut(auth)
            console.log(auth?.currentUser?.email)
        }
        catch(err) { console.log(err) }       
    }

    return(
        <div>
            <input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign in</button>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={logOut}>Sign out</button>
        </div>
    )
}