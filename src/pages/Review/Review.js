import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='mb-12'>
            <h1 className='text-center text-3xl font-bold'>Review</h1>
            <div className='grid lg:grid-cols-6 gap-5'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;