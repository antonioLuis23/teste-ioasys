import axios from "axios";

const getBooks = async (page: number, amount: number, token: string) => {
  console.log("page: ", page);
  console.log("amount: ", amount);
  const response = await axios({
    method: "get",
    url: "https://books.ioasys.com.br/api/v1/books",
    params: {
      page,
      amount,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export default getBooks;
