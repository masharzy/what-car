import React from "react";
import useReviews from "../../hooks/useReviews";
import hero from "../../images/model-x.png";
import HomePageReviews from "../HomePageReviews/HomePageReviews";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row align-items-center homePageRow">
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
          <h1 className="title">Interior of the Future</h1>
          <h3 className="subTitle">Designed for Efficiency</h3>
          <p>
            With the most power and quickest acceleration of any SUV, Model X
            Plaid is the highest performing SUV ever built. All Model X
            powertrains, with updated battery architecture, can deliver instant
            torque at any speed.
          </p>
          <button className="btn defaultBtn">Live Demo</button>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img className="w-100" src={hero} alt="" />
        </div>
      </div>
      <div className="row">
        <HomePageReviews />
      </div>
    </div>
  );
};

export default Home;
