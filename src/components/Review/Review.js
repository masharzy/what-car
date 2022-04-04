import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
  return (
    <div className="row align-items-center border mx-auto mt-3 p-4 rounded">
      <div className="image col-md-2">
        <img className="rounded-circle mx-auto" src={review.img} alt="" />
      </div>
      <div className="col-md-10">
        <h1>{review.name}</h1>
        <p>{review.text}</p>
        <div className="rating d-flex">
          <h5 className="me-2">{review.rating}</h5>
          <Rating
            initialRating={review.rating}
            emptySymbol={
              <FontAwesomeIcon style={{ color: "#ddd" }} icon={faStar} />
            }
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </div>
      </div>
    </div>
  );
};

export default Review;
