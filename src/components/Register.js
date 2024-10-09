import { auth, db } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFirstName] = useState("")
    const [lName, setLastName] = useState("")
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            console.log(user)
            if(user){
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fName,
                    lastName: lName,
                    interests: [],
                    completed: []
                })
            }
            console.log("User registered successfully")
            navigate("/portal")
        }
        catch(err){ console.error(err) }
    }

    return(
        <div>
            <input 
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input 
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
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

export default Register