import axios from "axios";

const getBooks = async (page: number, amount: number, authCtx: any) => {
  const response = await axios({
    method: "get",
    url: "https://books.ioasys.com.br/api/v1/books",
    params: {
      page,
      amount,
    },
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
    },
  });

  return response;
};

export default getBooks;
