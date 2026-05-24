import { useState } from "react";
import "./App.css";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Add new book
  const addBook = (title, author) => {
    const newBook = {
      id: Date.now(),
      title,
      author,
      read: false,
    };

    setBooks([...books, newBook]);
  };

  // Delete book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Toggle read status
  const toggleRead = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, read: !book.read }
          : book
      )
    );
  };

  // Search filter
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📚 Mini Library Tracker</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <BookForm addBook={addBook} />

      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        toggleRead={toggleRead}
      />
    </div>
  );
}

export default App;