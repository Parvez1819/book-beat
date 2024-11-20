;
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    
    
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher } = book
    return (
       <Link to={`/book/${bookId}`}>
        <div  className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10 bg-[#F3F3F3]  rounded-xl">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl " />
            </figure>
            <div className=" px-10 mt-10 mb-5">
                <div className="flex justify-between text-[#23BE0A] mb-4">
                    <p>{tags[0]}</p>
                    <p className="ml-6">{tags[1]}</p>
                </div>
                <h2 className="card-title mb-4">{bookName}</h2>
                <p>By : {author}</p>
                <div className="flex justify-between items-center text-lg font-medium mt-6">
                    <p>{category}</p>
                    <p className="flex items-center">{rating} <FaRegStar className="ml-3"></FaRegStar></p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;