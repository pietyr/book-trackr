import { useEffect, useState } from 'react';

// const library = [
//   { title: 'A Game of Thrones ', author: 'George R. R. Martin' },
//   { title: 'A Clash of Kings ', author: 'George R. R. Martin' },
// ];

// 'https://openlibrary.org/search.json?q=first_publish_year:2023&sort=new&limit=5&language=eng'

export default function Library() {
  const [library, setLibrary] = useState([]);

  async function requestBooks() {
    const response = await fetch(
      'https://openlibrary.org/search.json?q=first_publish_year:2023&sort=new&language=eng'
    );
    const json = await response.json();
    setLibrary(
      json.docs.map((entry) => ({
        key: entry.key,
        title: entry.title,
        author: entry.author_name[0],
      }))
    );
  }

  useEffect(() => {
    requestBooks();
  }, []);

  return (
    <ul className="library">
      {library.map((book) => (
        <Book title={book.title} author={book.author} />
      ))}
    </ul>
  );
}

function Book({ title, author }) {
  return (
    <li className="book">
      <i>{title}</i> - {author}
    </li>
  );
}
