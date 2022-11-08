import React from 'react';
import img1 from '../../assets/banner.jpg';
import img2 from '../../assets/banner-2.jpg';
// import img3 from '../../assets/banner-3.webp';
import img4 from '../../assets/banner-4.jpg';
import img5 from '../../assets/banner1.webp'
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full my-12">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img5} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>


                <div className="absolute  transform -translate-y-1/2 left-24  top-1/2">
                    <h1 className='text-7xl font-bold text-white'>Enjoy <br /> <span className='text-orange-600 ml-10' >Delicious</span> <br /> Food</h1>
                    <button className="btn btn-error mt-5">Order Now</button>
                </div>

            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img2} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-24  top-1/2">
                    <h1 className='text-7xl font-bold text-white'>Enjoy <br /> <span className='text-orange-600 ml-10' >Delicious</span> <br /> Food</h1>
                    <button className="btn btn-error mt-5">Order Now</button>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img1} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-24  top-1/2">
                    <h1 className='text-7xl font-bold text-white'>Enjoy <br /> <span className='text-orange-600 ml-10' >Delicious</span> <br /> Food</h1>
                    <button className="btn btn-error mt-5">Order Now</button>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img4} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-24  top-1/2">
                    <h1 className='text-7xl font-bold text-white'>Enjoy <br /> <span className='text-orange-600 ml-10' >Delicious</span> <br /> Food</h1>
                    <button className="btn btn-error mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;