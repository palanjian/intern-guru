import { auth, db } from '../config/firebase'
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'

function Portal(){
    const [userDetails, setUserDetails] = useState(null)

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(db, "Users", user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
            }
            else{
                console.log("User is not logged in")
            }         
        })
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    
    return(
        <div>{userDetails ?
            <h1>Welcome back {userDetails.firstName}</h1> : 
            <h1>Loading...</h1>}
        </div>
    )
}

export default Portal