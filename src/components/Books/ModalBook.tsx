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
  const authors = book.authors.join(", ");
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto ">
          <div
            onClick={closeModalHandler}
            className=" top-[-3rem] flex justify-end relative w-[98vw]"
          >
            <img src="/images/Close.png" alt="livro" className="w-[2rem]" />
          </div>
          {/*content*/}
          <div className="h-[76vh] overflow-y-scroll max-w-[70%] mx-auto p-10 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(15rem,_4fr))]">
              <div className="">
                <img src={book.imageUrl} alt="livro" className="w-100%]" />
              </div>
              <div>
                <p className="text-4xl font-medium">{book.title}</p>
                <p className="text-[1.5rem] font-normal text-[#AB2680] min-h-[2.5rem]">
                  {authors}
                </p>
                <p className="mt-5 font-medium">INFORMAÇÕES</p>
                <div className="flex justify-between">
                  <p className="font-medium">Páginas</p>
                  <p className="text-[#999999]">{book.pageCount}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium">Editora</p>
                  <p className="text-[#999999]">{book.publisher}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium">Publicação</p>
                  <p className="text-[#999999]">{book.published}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium">Idioma</p>
                  <p className="text-[#999999]">{book.language}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium">Título Original</p>
                  <p className="text-[#999999]">{book.title}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium">ISBN-10</p>
                  <p className="text-[#999999]">{book.isbn10}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium">ISBN-13</p>
                  <p className="text-[#999999]">{book.isbn13}</p>
                </div>
                <p className="mt-5 font-medium">RESENHA DA EDIORA</p>
                <p className="text-[#999999]">{book.description}</p>
              </div>
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
