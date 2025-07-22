import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch books');
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading books...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="books-container">
      {books.map((book) => (
        <Link to={`/book/${book.id}`} key={book.id} className="book-card" title={book.title}>
          <img
            src={book.cover}
            alt={book.title}
            className="book-cover"
            loading="lazy"
          />
          <div className="book-title">{book.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default Books;
