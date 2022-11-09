import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ProductDetails = () => {
    const { title, description, img, price, rating } = useLoaderData();
    const { user } = useContext(AuthContext);

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

            <div className='my-12'>
                <h1 className='text-center text-4xl font-bold '>Please review this product</h1>
                <form>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your name</span>
                            </label>
                            <input type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your email</span>
                            </label>
                            <input type="email" placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your comment</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Your comment"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;