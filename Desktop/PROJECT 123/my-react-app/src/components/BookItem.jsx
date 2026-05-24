function BookItem({ book, deleteBook, toggleRead }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>

      <p>Author: {book.author}</p>

      <p>
        Status:
        {book.read ? " ✅ Read" : " ❌ Not Read"}
      </p>

      <div className="buttons">
        <button onClick={() => toggleRead(book.id)}>
          Toggle Read
        </button>

        <button onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookItem;