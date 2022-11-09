import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ProductCard = ({ product }) => {
    const { _id, title, img, price, rating, description } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-semibold'>Price:{price}</p>
                <p>Description:{description.slice(0, 100)}...<Link>see more</Link></p>
                <div className="card-actions justify-end items-center">
                    <p className='font-semibold '>Rating: {rating}</p>
                    <Link to={`/product/${_id}`}>
                        <button className="btn btn-error">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;