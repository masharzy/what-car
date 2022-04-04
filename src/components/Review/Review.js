import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
  const { img, name, text, rating } = review;
  return (
      <div className="col-md-4 mb-4">
        <div class="card h-100 review-card">
          <div className="d-flex align-items-center justify-content-center">
            <img className="rounded-circle me-3" src={review.img} alt="" />
            <div className="card-content">
              <h3 style={{ fontSize: "22px" }}>{review.name}</h3>
              <span class="me-2">{review.rating}</span>
              <Rating
                initialRating={review.rating}
                emptySymbol={
                  <FontAwesomeIcon style={{ color: "#ddd" }} icon={faStar} />
                }
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
          </div>

          <div class="review-text">
            <p class="content mt-4" style={{ fontSize: "16px" }}>
              "{review.text}"
            </p>
          </div>
        </div>
      </div>
  );
};

export default Review;
