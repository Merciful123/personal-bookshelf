import React, { useState, useEffect, useMemo } from "react";
import SearchBar from "../../components/SearchBar";
import BookList from "../../components/BookList";
import Loading from "../../components/LoadingUI";
import { Link } from "react-router-dom";

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=the&limit=10&page=1"
      );
      // Check if the response status indicates an error
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data.docs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error.message);
      setLoading(false);
      setError("Failed to fetch books. Please try again.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []); // Fetch only once on component mount

  // Filter books based on the search query
  const filteredBooks = useMemo(() => {
    if (query.length > 2) {
      return books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return books;
    }
  }, [query, books]);

  // Function to handle adding a book to the bookshelf
  const handleAddToBookshelf = (book) => {
    addToBookshelf(book);
    setNotification(`Book "${book.title}" added to bookshelf.`);
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <div>
      <h1 className="text-center text-green-500 text-4xl mb-2 mt-4 font-sriracha">
        Search Book
      </h1>
      <div className="flex justify-end lg:w-[90%] max-sm:w-[90%]  mx-auto mb-2">
        <Link
          to="/my-bookshelf"
          className="bg-green-400 text-white rounded-md px-2 py-2"
        >
          Go to My Bookshelf
        </Link>
      </div>

      <div className="flex md:w-[50%] max-sm:w-[95%] mx-auto justify-center items-center">
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <BookList
              books={filteredBooks}
              addToBookshelf={handleAddToBookshelf}
              error={error}
            />
          )}
        </>
      )}
      {notification && (
        <div className="absolute top-4 right-1 bg-green-500 text-white p-4 rounded-md shadow-md">
          {notification}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
