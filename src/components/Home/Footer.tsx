interface FooterPropsType {
  page: number;
  totalPages: number;
  getBefore: () => void;
  getAfter: () => void;
}

const Footer = ({ page, totalPages, getBefore, getAfter }: FooterPropsType) => {
  return (
    <footer className="flex justify-end mt-2 ">
      <p className="text-[0.7rem] font-normal mr-4 pt-2">{`Página ${page} de ${totalPages}`}</p>
      {page > 1 ? (
        <div>
          <button onClick={getBefore}>
            <img
              src={
                page > 1
                  ? "/images/NextButton.png"
                  : "/images/PrevButtonDisabled.png"
              }
              alt="previous button"
              className="rotate-180 w-8"
            />
          </button>
        </div>
      ) : (
        <div className="w-8">
          <button disabled>
            <img
              src="/images/PrevButtonDisabled.png"
              alt="previous button"
              className="w-8"
            />
          </button>
        </div>
      )}

      <div className="ml-2">
        <button onClick={getAfter}>
          <img src="/images/NextButton.png" alt="next button" className="w-8" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
