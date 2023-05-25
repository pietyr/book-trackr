import { useEffect, useState } from 'react';

export default function Latest() {
  const [books, setBooks] = useState([]);

  async function requestBooks() {
    const response = await fetch(
      'https://openlibrary.org/search.json?q=first_publish_year%3A[2018+TO+2023]&sort=random&language=eng&limit=80'
    );
    const json = await response.json();
    setBooks(
      json.docs
        .filter((entry) => entry.cover_i)
        .map((entry) => ({
          key: entry.key,
          title: entry.title,
          author: entry.author_name[0],
          coverId: entry.cover_i,
        }))
    );
  }

  useEffect(() => {
    requestBooks();
  }, []);

  return (
    <section className="latest">
      {books.map((book) => (
        <Card name={book.title} coverId={book.coverId} />
      ))}
    </section>
  );
}

function Card({ name, coverId }) {
  return (
    <section className="latest__card">
      <h2>{name}</h2>
      <img
        src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
        alt={name}
      />
    </section>
  );
}
