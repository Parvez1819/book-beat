import { Link } from "react-router-dom";

//bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent
const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen p-5">
            <h2 className="text-9xl font-bold bg-gradient-to-r from-[#59C6D2] to-[#23BE0A] bg-clip-text text-transparent font-playfair">Oops!</h2>
            <p className="text-2xl font-bold text-black">404-PAGE NOT FOUND</p>
            <p className="text-xl leading-8 text-center">The page you are looking for might have been removed <br /> has its named changed or is temporary unavailable.</p>
            <Link to="/"><button className="bg-[#59C6D2]  rounded-xl px-4 py-2 text-white hover:bg-[#23BE0A]">Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;