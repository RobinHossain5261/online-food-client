import React from 'react';
import appImg from '../../assets/app.png';

const About = () => {
    return (
        <div className="hero bg-gray-200 p-5 rounded-xl mb-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <img src={appImg} alt="" className=" rounded-lg shadow-2xl justify-end" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Find Favorites and Discover New Ones</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-error">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default About;