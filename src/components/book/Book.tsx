import css from './Book.module.css';

export interface Book {
  id: string;
  name: string;
}

interface BookProps {
  book: Book;
}

export function BookItem({ book }: BookProps) {
  return <li className={css.book}>{book.name}</li>;
}
