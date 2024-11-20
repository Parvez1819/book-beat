


import { toast } from "react-toastify";

// Helper function to retrieve a list from localStorage by key
export const getBookList = (key) => {
    const storedList = localStorage.getItem(key);
    return storedList ? JSON.parse(storedList) : [];
};

// Function to add a book to either "Read" or "Wishlist"
export const saveBookToList = (key, id) => {
    const bookId = parseInt(id);
    const readList = getBookList('readList');         // Retrieve Read list
    const wishList = getBookList('wishList');          // Retrieve Wishlist

    // Logic for adding to "Read" list
    if (key === 'readList') {
        if (readList.includes(bookId)) {
            toast.info("This book is already in your Read list.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
            return;
        } else if (wishList.includes(bookId)) {
            toast.warning("This book is already in your Wishlist. Cannot add to Read list.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
            return;
        } else {
            readList.push(bookId);
            localStorage.setItem('readList', JSON.stringify(readList));
            toast.success("Book added to Read list successfully.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                style: { backgroundColor: "#4CAF50", color: "white" },
            });
        }
    }

    // Logic for adding to "Wishlist" list
    else if (key === 'wishList') {
        if (wishList.includes(bookId)) {
            toast.info("This book is already in your Wishlist.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
            return;
        } else if (readList.includes(bookId)) {
            toast.warning("This book is already in your Read list. Cannot add to Wishlist.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
            return;
        } else {
            wishList.push(bookId);
            localStorage.setItem('wishList', JSON.stringify(wishList));
            toast.success("Book added to Wishlist successfully.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                style: { backgroundColor: "#4CAF50", color: "white" },
            });
        }
    }
};

export default { saveBookToList };


