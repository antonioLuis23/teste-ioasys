import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <div className="flex ml-20 items-center h-screen">
      <img src="/images/logo.png" alt="logo" className="w-60" />
      <LoginForm />
    </div>
  );
};

export default LoginContainer;
