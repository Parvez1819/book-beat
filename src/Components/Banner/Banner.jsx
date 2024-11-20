import { Link } from "react-router-dom";


const Banner = () => {
    return (

        <div className="flex gap-5 p-2 mt-5  justify-between items-center flex-col-reverse md:flex-row lg:flex-row-reverse">
            <div className="">
                <img
                    src="https://i.ibb.co.com/RBxJz8N/thought-catalog-Dx-Az-OKSi-Po-E-unsplash.jpg"
                    className="max-w-sm object-cover rounded-lg shadow-2xl" />
            </div>

            <div>
                <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                <Link to={'/listed-books'}><button className="mt-10 bg-[#23BE0A]  rounded-xl px-4 py-2 text-white hover:bg-[#59C6D2]">View The List</button></Link>
            </div>

        </div>

    );
};

export default Banner;