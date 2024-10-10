import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="relative min-h-screen w-full bg-neutral-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
            </div>
            <div className="text-white pt-48 max-w-xl">
                <h1 className="text-6xl font-semibold leading-normal">Never miss a <br/> job post again</h1>
                <p>Your personalized job feed, daily. Apply fast, track smarter.</p>
                <Link to="/portal">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Go to portal</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
