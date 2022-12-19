import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/useTitle';
import ProductCard from './ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);
    const { loading } = useContext(AuthContext);

    useTitle('Products');
    useEffect(() => {
        fetch('https://online-food-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    if (loading) {
        return <div>
            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">...</span>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-7xl font-bold'>Order and Enjoy</h1>
                <p className='text-2xl text-red-500 mt-3'>Start your order and enjoy the tastiest food.</p>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }

            </div>
        </div>
    );
};

export default Products;