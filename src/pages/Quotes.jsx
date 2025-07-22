import React, { useEffect, useState } from 'react';
import '../App.css';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch quotes');
        return res.json();
      })
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading quotes...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="quotes-container">
      <h2 className="quotes-header">Random Quotes</h2>
      <ul className="quotes-list">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote-item">
            <blockquote className="quote-text">“{quote.quote}”</blockquote>
            <cite className="quote-cite">— {quote.book?.title || 'Unknown Book'}</cite>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
