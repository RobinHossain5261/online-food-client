import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const Item = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Our Products Menu</h1>

            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    products.map(product => <ItemCard
                        key={product._id}
                        product={product}
                    ></ItemCard>)
                }

            </div>
        </div>
    );
};

export default Item;