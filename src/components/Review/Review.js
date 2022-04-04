import React from "react";
import useRating from "../../hooks/useRating";

const Review = ({ review }) => {
  const { img, name, text, rating } = review;
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 review-card">
        <div className="d-flex align-items-center justify-content-center">
          <img className="rounded-circle me-3" src={img} alt="" />
          <div className="card-content">
            <h3 style={{ fontSize: "22px" }}>{name}</h3>
            <span className="me-2">{rating}</span>
            {useRating(rating)}
          </div>
        </div>

        <div className="review-text">
          <p className="content mt-4" style={{ fontSize: "16px" }}>
            "{text}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
