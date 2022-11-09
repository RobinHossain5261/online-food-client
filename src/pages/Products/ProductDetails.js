import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const { title, description, img, price, rating } = useLoaderData();

    return (
        <div >
            <div>
                <h1 className='text-4xl text-center font-bold mb-10'>Product Details</h1>
                <img className='rounded-xl' src={img} alt="" />
                <h1 className='text-3xl font-bold mt-3 text-red-500'>Name: {title}</h1>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p><span className='font-bold'>Description :</span> {description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;