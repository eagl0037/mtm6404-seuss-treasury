import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch book details');
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading book details...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!book) return <p className="error">Book not found</p>;

  return (
    <div className="book-details-container">
      <Link to="/books" style={{ display: 'block', marginBottom: '1rem', color: '#646cff' }}>
        &larr; Back to Books
      </Link>
      <img src={book.cover} alt={book.title} className="book-details-cover" />
      <h2 className="book-details-title">{book.title}</h2>
      <p className="book-details-description">{book.description || 'No description available.'}</p>
    </div>
  );
}

export default BookDetails;
