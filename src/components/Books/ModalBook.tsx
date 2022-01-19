import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BookType } from "../../types/BookType";

interface BookPropsType {
  book: BookType;
  setToggleModal: (value: React.SetStateAction<boolean>) => void;
}
const ModalBook = ({ book, setToggleModal }: BookPropsType) => {
  const closeModalHandler = () => {
    setToggleModal((prevState) => !prevState);
  };
  const node = document.getElementById("portal-root");
  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        onClick={closeModalHandler}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative  my-6 mx-auto ">
          {/*content*/}
          <div className="p-6 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="grid grid-cols-2">
              <div>
                <img src={book.imageUrl} alt="livro" className="h-32" />
              </div>
              <p>{book.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </React.Fragment>,
    node!
  );
};

export default ModalBook;
