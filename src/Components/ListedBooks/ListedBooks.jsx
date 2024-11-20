import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const ListedBooks = () => {
    const booksData = useLoaderData();
    const [readBooksList, setReadBooksList] = useState([]);
    const [wishBooksList, setWishBookList] = useState([]);
    const [activeTab, setActiveTab] = useState("readList");
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        // Fetch the read and wishlist books from local storage
        const storedReadBooks = JSON.parse(localStorage.getItem("readList")) || [];
        const storedWishBooks = JSON.parse(localStorage.getItem("wishList")) || [];
        setReadBooksList(storedReadBooks);
        setWishBookList(storedWishBooks);
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const getSortedBooks = (books) => {

        // Filter matching books from booksData based on local storage IDs
        const matchingBooks = booksData.filter((book) =>
            books.includes(book.bookId)
        );

        // Sort matchingBooks based on the selected sort option
        const sortedBooks = [...matchingBooks];
        if (sortOption === "rating") {
            return sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === "totalPages") {
            return sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortOption === "year") {
            return sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;
    };

    const renderBookList = () => {

        const books = activeTab === "readList" ? readBooksList : wishBooksList;
        const sortedBooks = getSortedBooks(books);
        if (books.length === 0) {
            return <div className="flex justify-center items-center mt-5">
                <p className="text-2xl font-bold text-[#780606]">There is no Selected Books in {activeTab} </p>
            </div>
        }

        // Render sorted and matched books
        return (
            <div>

                {sortedBooks.map((book, index) => (
                    <div key={index} className="mt-4 p-4 ">
                        <div className="flex gap-5 flex-col md:flex-row lg:flex-row justify-center items-center p-8 border-[#1313134D] border rounded-2xl">
                            <div className="bg-[#1313130D] ">
                                <img src={book.image} className="rounded-xl w-1/2 h-auto mx-auto" alt="" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl mb-4 font-bold text-[#131313]">{book.bookName}</h1>
                                <h2 className="text-xl font-medium mb-6 text-[#131313CC]">By : {book.author}</h2>
                                <div className="flex justify-between items-center mt-6 mb-6">
                                    <p className="font-bold "><span className=" text-[#131313]">Tag :</span><span className="text-[#23BE0A] ml-10">{book.tags[0]}</span><span className="text-[#23BE0A] ml-10">{book.tags[1]}</span></p>
                                    <p className=""><span>Year of Publishing: </span><span className="font-bold ml-5">{book.yearOfPublishing}</span></p>
                                </div>

                                <div className="flex justify-between items-center mt-6 mb-6">
                                    <p><span>Publisher: </span><span className="font-bold ml-20">{book.publisher}</span></p>
                                    <p><span>Pages: </span><span className="font-bold ml-6">{book.totalPages}</span></p>
                                </div>




                                <hr />




                                <div className="mt-6 mb-6 flex justify-between items-center">
                                    <p className="text-xl font-medium text-[#131313CC]">{book.category}</p>
                                    <p><span>Rating: </span><span className="font-bold ml-[102px]">{book.rating}</span></p>
                                    <Link to={`/book/${book.bookId}`}> <button className="btn ml-5 bg-[#50B1C9] text-white px-6 py-4 font-bold">View Details</button></Link>
                                </div>
                            </div>

                        </div>


                    </div>
                ))}

            </div>
        );
    };

    return (
        <div className="mt-8 max-w-7xl mx-auto">
            <h2 className="text-center rounded-xl mb-8 font-bold text-3xl bg-[#1313130D] py-10">Books</h2>

            <div className="dropdown flex justify-center items-center max-w-32 mx-auto mb-4">
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="btn m-1 bg-[#23BE0A] text-white"
                >
                    <option value="">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number Of Pages</option>
                    <option value="year">Publishing Year</option>
                </select>
            </div>

            <div className="text-lg mb-4 ">
                <button
                    onClick={() => handleTabChange("readList")}
                    className={`px-4 py-2 ${activeTab === "readList" ? "border-[#1313134D] border-2 rounded border-b-0 font-bold" : ""}`}
                >
                    Read Books
                </button>
                <button
                    onClick={() => handleTabChange("wishList")}
                    className={`ml-3 px-4 py-2 ${activeTab === "wishList" ? "border-[#1313134D] border-2 rounded border-b-0 font-bold" : ""}`}
                >
                    Wishlist Books
                </button>
            </div>
            <hr className="border-[#1313134D] border-1 rounded" />

            <section>{renderBookList()}</section>
        </div>
    );
};

export default ListedBooks;
