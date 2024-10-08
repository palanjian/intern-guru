import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react';

export const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch(err){ console.error(err) }
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
            <button onClick={signUp}>Sign up</button>
        </div>
    )
}