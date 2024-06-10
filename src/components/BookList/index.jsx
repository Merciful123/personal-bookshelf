// src/components/BookList.js
import BookCard from "../BookCard";

const BookList = ({ books, addToBookshelf }) => {
  
  return (
    <div className="book-list grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 rounded-md">
      {books?.map((book) => (
        <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
      ))}
    </div>
  );
};

export default BookList;
