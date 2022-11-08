import React from 'react';

const Known = () => {
    return (
        <div className='text-center mb-12'>
            <h1 className='text-5xl font-bold mb-4'>Get to Know Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos quod quibusdam similique ex modi delectus minima <br /> quisquam autem ullam facilis exercitationem, omnis reiciendis vel ipsa enim tenetur molestiae voluptas!</p>
            <div className='flex justify-center mt-5'>
                <div>
                    <h1 className='text-6xl font-bold text-orange-500'>650K+</h1>
                    <p>Users Order Online</p>
                </div>
                <div className='mx-5'>
                    <h1 className='text-6xl font-bold text-green-500'>85</h1>
                    <p>Cities & Even More on the Way</p>
                </div>
                <div>
                    <h1 className='text-6xl font-bold text-red-500'>8,000+</h1>
                    <p>Merchants Grow Their Businesses</p>
                </div>
            </div>
        </div>
    );
};

export default Known;