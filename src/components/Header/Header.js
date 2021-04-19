import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/icons/grameenponn.jpg";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/deal">Deal</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link className="btn-productss" to="/productss"></Link>
          </li>
        </ul>
      </nav>
      <div className="title-container">
        <h1>Grameen Ponno</h1>
      </div>
    </div>
  );
};

export default Header;
