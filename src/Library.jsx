const library = [
  { title: 'A Game of Thrones ', author: 'George R. R. Martin' },
  { title: 'A Clash of Kings ', author: 'George R. R. Martin' },
];

export default function Library() {
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
