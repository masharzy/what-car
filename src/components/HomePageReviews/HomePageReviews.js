import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import HomePageReview from "../HomePageReview/HomePageReview";

const HomePageReviews = () => {
  const [reviews, setReviews] = useReviews([]);

  return (
    <div className="container">
      <div className="row">
          
        <div className="title">
          <h1 className="text-center">Customers Reviews(3)</h1>
        </div>

        {reviews.slice(0, 3).map((review) => (
          <HomePageReview key={review.id} review={review}></HomePageReview>
        ))}
        <Link to="/reviews" className="btn defaultBtn mb-5 mt-3 w-50 mx-auto">
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default HomePageReviews;
