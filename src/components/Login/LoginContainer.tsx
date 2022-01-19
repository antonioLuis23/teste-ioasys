import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <div className="flex ml-20 items-center h-screen">
      <div>
        <img src="/images/logo.png" alt="logo" className="w-44" />

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainer;
