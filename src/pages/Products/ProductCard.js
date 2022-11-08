import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { title, img, price, rating, description } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-semibold'>Price:{price}</p>
                <p>Description:{description.slice(0, 100)}...<Link>see more</Link></p>
                <div className="card-actions justify-end items-center">
                    <p className='font-semibold '>Rating: {rating}</p>
                    <button className="btn btn-error">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;