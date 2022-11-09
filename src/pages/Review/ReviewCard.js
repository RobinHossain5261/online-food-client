import React from 'react';

const ReviewCard = ({ review }) => {
    const { customer, message } = review;
    return (
        <div className="card w-48 bg-base-100 shadow-xl">

            <div className="card-body">
                <h2 className="card-title">{customer}</h2>
                <p>{message}</p>

            </div>
        </div>
    );
};

export default ReviewCard;