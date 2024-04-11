import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import UserLogged from "../components/LoginPage/UserLogged";
import "./styles/LoginPage.css"


const LoginPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const { register, handleSubmit, reset } = useForm();
  const [registerUser, loginUser] = useAuth();
  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };

  if (localStorage.getItem("token")) {
    return <UserLogged setUser={setUser} user={user} />;
  }

  return (
    <div className="login__card">
      <i class='bx bxs-user-circle' ></i>
      <h2 className="title__login__card">USER</h2>
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <label className="label__login__card">
          <span className="span__login__card">Email</span>
          <input className="input__login__card" {...register("email")} type="email" />
        </label>
        <label className="label__login__card">
          <span className="span__login__card">Password</span>
          <input className="input__login__card" {...register("password")} type="password" />
        </label>
        <button className="login__card__btn">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
