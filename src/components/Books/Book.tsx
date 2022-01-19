import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BookType } from "../../types/BookType";
import ModalBook from "./ModalBook";

interface BookPropType {
  book: BookType;
}

const Book = ({ book }: BookPropType) => {
  const authors = book.authors.join(", ");
  const [toggleModal, setToggleModal] = useState(false);
  const toggleModalHandler = () => {
    setToggleModal((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      {toggleModal && <ModalBook book={book} setToggleModal={setToggleModal} />}

      <div
        className="grid grid-cols-2 shadow-md hover:shadow-lg p-6 bg-white rounded cursor-pointer"
        onClick={toggleModalHandler}
      >
        <div>
          <img src={book.imageUrl} alt="livro" className="h-32" />
        </div>
        <div className="pl-1">
          <p className="text-[0.8rem] font-medium">{book.title}</p>
          <p className="text-[0.7rem] font-normal text-[#AB2680] min-h-[2.5rem]">
            {authors}
          </p>
          <p className="text-[0.7rem] font-normal text-[#999999]">
            {book.pageCount} páginas
          </p>
          <p className="text-[0.7rem] font-normal text-[#999999]">
            Editora {book.publisher}
          </p>
          <p className="text-[0.7rem] font-normal text-[#999999]">
            Publicado em {book.published}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Book;
