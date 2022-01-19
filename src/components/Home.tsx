import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";

interface BookType {
  authors: string[];
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

const Home = () => {
  const [books, setBooks] = useState(new Array<BookType>());
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://books.ioasys.com.br/api/v1/books",
      params: {
        page: 1,
        amount: 12,
      },
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    }).then((response) => {
      console.log(response);
      setBooks(response.data.data);
    });
  }, [authCtx.token]);
  console.log("token:", authCtx.token);
  return (
    <div>
      {books.map((book) => (
        <div>
          <p>{book.title}</p>
          <img src={book.imageUrl} alt="livro" />
        </div>
      ))}
    </div>
  );
};

export default Home;
