import { BookType } from "../../types/BookType";
import Book from "./Book";

interface BooksPropsType {
  books: Array<BookType>;
}

const BooksContainer = ({ books }: BooksPropsType) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_4fr))] gap-4  ">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
  );
};

export default BooksContainer;
