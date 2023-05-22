import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Aura Liz')  ;
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5 animate__animated animate__fadeInDown">
      <h1 className="d-flex justify-content-center">Heroes App Login </h1>
      <hr />
      <div className="d-flex justify-content-center m-5">
        <img
          className="rounded-circle img-thumbnail img-fluid"
          width={250}
          height={250}
          src={`https://github.com/WilsonCorrea5/heroes-single-page-app/user_profile.jpg`}
          alt="User profile picture"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={onLogin} className="btn btn-primary btn-lg">
          Login
        </button>
      </div>
    </div>
  );
};
