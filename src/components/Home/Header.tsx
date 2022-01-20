import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };
  return (
    <header className="flex justify-between mb-5">
      <div>
        <img src="/images/logo header.png" alt="logo" className="w-28" />
      </div>
      <div className="flex gap-2">
        <p className=" pt-1 text-[0.8rem]">{`Bem vindo, ${authCtx.name}`}</p>
        <img
          src="/images/Log Out.png"
          alt="logo"
          className="w-7"
          onClick={logoutHandler}
        />
      </div>
    </header>
  );
};

export default Header;
