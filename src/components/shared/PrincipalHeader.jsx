import React from "react";
import { Link } from "react-router-dom";
import "./styles/PrincipalHeader.css";

const PrincipalHeader = () => {
  return (
    <header className="principal__header">
      <h1 >
        {" "}
        <Link className="title__principal__header" to="/">Hotels App</Link>
      </h1>
      <nav className="nav__principal__header">
        <ul className="ul_principal__header">
          <li>
            <Link className="link__principal__header" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="link__principal__header" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link__principal__header" to="/reservations">
              Reservations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PrincipalHeader;
