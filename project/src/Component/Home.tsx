import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../Images/stratforge.png";
import Content from "./Content";
const Home = () => {
  return (
    <div className="background">
      <div className="navbar">
        <h1>
          <img src={Logo} width="50px" height="50px" /> Stratforge
        </h1>
        <p>
          <Link to="/rocket">Rockets</Link>
        </p>
        <p>
          <Link to="/launches">Launches</Link>
        </p>
        <p>
          <Link to="/history">History</Link>
        </p>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Home;
