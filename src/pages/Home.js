import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="relative min-h-screen w-full bg-neutral-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
            </div>
            <h1 className="text-3xl font-bold underline">Home page</h1>
            <Link to="/portal">
                <button>Go to portal</button>
            </Link>
        </div>
    );
}

export default Home;
