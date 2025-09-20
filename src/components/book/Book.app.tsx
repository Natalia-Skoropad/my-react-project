import { books } from '../../data/books';
import { BookItem } from './Book';
import css from './Book.module.css';

export default function BookAdd() {
  return (
    <>
      <h3 className={css.h3}>Books of the week</h3>
      <ul>
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
}
