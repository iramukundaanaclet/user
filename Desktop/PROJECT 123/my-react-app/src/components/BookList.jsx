import BookItem from "./BookItem";

function BookList({ books, deleteBook, toggleRead }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            deleteBook={deleteBook}
            toggleRead={toggleRead}
          />
        ))
      )}
    </div>
  );
}

export default BookList;