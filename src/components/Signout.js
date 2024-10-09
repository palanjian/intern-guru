import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

function Signout(){
    const navigate = useNavigate();
    const logOut = async () => {
        try{
            await signOut(auth)
            console.log(auth.currentUser)
            navigate("/")
        }
        catch(err) { console.log(err) }       
    }

    return(
        <div>
            <button onClick={logOut}>Sign out</button>
        </div>
    )
}

export default Signout

