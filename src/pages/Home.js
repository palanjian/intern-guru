import { Link } from 'react-router-dom';

function Home(){

    return(
        <div>
            <h1>Home page</h1>
            <Link to="/portal">
                <button>Go to portal</button>
            </Link>
        </div>
    )
}

export default Home