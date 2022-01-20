import { useContext, useEffect, useState } from "react";
import getBooks from "../../services/get-books";
import AuthContext from "../../store/auth-context";
import { BookType } from "../../types/BookType";
import BooksContainer from "../Books/BooksContainer";
import ModalBook from "../Books/ModalBook";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  const [books, setBooks] = useState(new Array<BookType>());
  const [currentPage, setcurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const authCtx = useContext(AuthContext);
  const getBooksResponse = (response: any) => {
    setBooks(response.data.data);
    setcurrentPage(response.data.page);
    setTotalPages(Math.ceil(response.data.totalPages));
  };
  useEffect(() => {
    getBooks(1, 12, authCtx).then(getBooksResponse);
  }, [authCtx]);

  const getPageBefore = () => {
    if (currentPage > 1) {
      getBooks(currentPage - 1, 12, authCtx).then(getBooksResponse);
      setcurrentPage((prevPage) => prevPage - 1);
    }
  };
  const getPageAfter = () => {
    if (currentPage < totalPages) {
      getBooks(currentPage + 1, 12, authCtx).then(getBooksResponse);
      setcurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="bg-blend-darken bg-repeat bg-cover bg-background-home1 ">
      <div className="bg-cover bg-repeat bg-background-home2  py-6 px-16">
        <Header />
        <BooksContainer books={books} />
        <Footer
          page={currentPage}
          totalPages={totalPages}
          getBefore={getPageBefore}
          getAfter={getPageAfter}
        />
      </div>
    </div>
  );
};

export default Home;
