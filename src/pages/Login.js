
import Register from "../components/Register"
import Signin from "../components/Signin"
import Signout from '../components/Signout'

function Login(){

    return(
        <div>
            <h1>Sign up or Login</h1>
            <Register />
            <Signin />
        </div>
    )
}

export default Login