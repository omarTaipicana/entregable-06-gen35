import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "./styles/RegisterPage.css"

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [registerUser, loginUser] = useAuth();

  const submit = (data) => {
    registerUser(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "unknown",
    });
  };

  return (
    <div className="register__card">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <h2 className="title__register__card">Register</h2>
        <label className="label__register__card">
          <span className="span__register__card">First Name</span>
          <input className="input__register__card" {...register("firstName")} type="text" />
        </label>
        <label className="label__register__card">
          <span className="span__register__card">Last Name</span>
          <input className="input__register__card" {...register("lastName")} type="text" />
        </label>
        <label className="label__register__card">
          <span className="span__register__card">Email</span>
          <input className="input__register__card" {...register("email")} type="email" />
        </label>
        <label className="label__register__card">
          <span className="span__register__card">Password</span>
          <input className="input__register__card" {...register("password")} type="password" />
        </label>
        <label className="label__register__card">
          <span className="span__register__card">Gender</span>
          <select className="input__register__card" {...register("gender")}>
            <option value={"unknown"}>Unknown</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value={"other"}>i prefer don¨t say</option>
          </select>
        </label>
        <button className="register__card__btn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
