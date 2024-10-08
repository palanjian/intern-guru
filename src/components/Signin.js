import { auth, googleProvider } from '../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("User logged in successfully");
            navigate("/portal")
        }
        catch(err){ console.error(err) }
    }

    const logOut = async () => {
        try{
            await signOut(auth)
            console.log(auth.currentUser)
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
            <button onClick={logOut}>Sign out</button>
        </div>
    )
}

export default Signin