import React from "react";
import useReviews from "../../hooks/useReviews";
import hero from "../../images/model-x.png";
import "./Home.css";

const Home = () => {

    // const [reviews, setReviews]  =  useReviews();


  return (
    <div className="container">
      <div className="row align-items-center homePageRow">
        <div className="col-md-6">
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
        <div className="col-md-6">
          <img className="w-100" src={hero} alt="" />
        </div>
      </div>
      {/* <div className="row">
          {
              reviews.map((review) => <li>{review.name}</li>)
          }
      </div> */}
    </div>
  );
};

export default Home;
