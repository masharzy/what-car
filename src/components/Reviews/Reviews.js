import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews]  =  useReviews([]);

    return (
        <div>
            <div className="banner text-center text-white">
                <h1>All Reviews</h1>
            </div>
            <div className="container">
                <div className="row mb-3">
                    {
                        reviews.map((review) => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;