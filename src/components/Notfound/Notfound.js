import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div className="container text-center">
      <div className="row fourZeroFourPageRow align-items-center">
        <div className="fourZeroFour">
          <div className="fourZeroFourBg">
            <h1 style={{fontSize:"50px"}}>404</h1>
          </div>
          <h3>Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>
          <Link to="/" className="btn defaultBtn">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
