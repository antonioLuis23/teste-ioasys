import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const LoginForm = () => {
  const styleEmail = "rounded w-full block px-7 py-3 mb-3 bg-[rgba(0,0,0,0.4)]";
  const stylePassword = styleEmail;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const loginSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: "https://books.ioasys.com.br/api/v1/auth/sign-in",
      data: {
        email,
        password,
      },
    });
    if (response.status === 200) {
      authCtx.login(
        response.headers.authorization,
        response.headers["refresh-token"],
        response.data.name
      );
      navigate("/home");
    }
  };
  return (
    <form className="mt-10" onSubmit={loginSubmit}>
      <div>
        <input
          className="rounded w-full block px-7 py-3 mb-3 bg-[rgba(0,0,0,0.4)]"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className={stylePassword}
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
};

export default LoginForm;
