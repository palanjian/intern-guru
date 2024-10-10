import { auth, db } from '../config/firebase'
import React, { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore'
import Signout from '../components/Signout'
import CardHolder from '../components/CardHolder'
function Portal(){
    const [userDetails, setUserDetails] = useState(null)
    
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(db, "users", user.uid)
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
        <div>
            <Signout />{userDetails ?
            <>
                <h1>Welcome back {userDetails.firstName}</h1>
                <CardHolder details={userDetails}/>
            </>
            :  <h1>Loading...</h1> }
        </div>
    )
}

export default Portal