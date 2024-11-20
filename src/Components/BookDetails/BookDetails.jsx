import { useLoaderData, useParams } from "react-router-dom";

import { saveBookToList } from "../../utility/localStorage"

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId === parseInt(id));

    const handleReadandwishList = (key) => {
        saveBookToList(key, parseInt(id));


    }





    return (
        <div className="max-w-7xl mx-auto p-6">

<ToastContainer   
                position="top-right"    // Always show at top-right corner
                autoClose={3000}        // Automatically close after 3 seconds
                hideProgressBar={false}  // Hide progress bar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}       // Disable drag
            />

            <div className="flex gap-5 flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className="flex-1">
                    <img src={book.image} className="rounded-xl" alt="" />
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl mb-4 font-bold text-[#131313]">{book.bookName}</h1>
                    <h2 className="text-xl font-medium mb-6 text-[#131313CC]">By : {book.author}</h2>
                    <hr />
                    <p className="text-xl font-medium mt-6 mb-4 text-[#131313CC]">{book.category}</p>
                    <hr />
                    <p className="text-lg mt-6"><span className="font-bold text-[#131313]">Review </span>{book.review}</p>
                    <p className="font-bold mt-6 mb-6"><span className=" text-[#131313]">Tag :</span><span className="text-[#23BE0A] ml-10">{book.tags[0]}</span><span className="text-[#23BE0A] ml-10">{book.tags[1]}</span></p>
                    <hr />
                    <p className="mt-6"><span>Number of Pages: </span><span className="font-bold ml-6">{book.totalPages}</span></p>
                    <p className="mt-6"><span>Publisher: </span><span className="font-bold ml-20">{book.publisher}</span></p>
                    <p className="mt-6"><span>Year of Publishing: </span><span className="font-bold ml-5">{book.yearOfPublishing}</span></p>
                    <p className="mt-6"><span>Rating: </span><span className="font-bold ml-[102px]">{book.rating}</span></p>
                    <div className="mt-6 mb-6">
                        <button onClick={() => handleReadandwishList('readList')} className="btn px-6 py-4 border-2 border-stone-500 text-[#131313] font-bold">Read</button>
                        <button onClick={() => handleReadandwishList('wishList')} className="btn ml-5 bg-[#50B1C9] text-white px-6 py-4 font-bold">Wishlist</button>
                    </div>
                </div>

            </div>
           
        </div >
    );
};

export default BookDetails;