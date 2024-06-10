// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearch from "./pages/BookSearch";
import MyBookshelf from "./pages/MyBookShelf";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BookSearch addToBookshelf={addToBookshelf} />}
        />
        <Route
          path="/my-bookshelf"
          element={<MyBookshelf bookshelf={bookshelf} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
