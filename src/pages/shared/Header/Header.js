import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../assets/logo.png';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const menuBar = <>
        <Link to="/"><li className='font-semibold mr-5 hover:text-red-600 '>Home</li></Link>
        <Link to="/orders"><li className='font-semibold mr-5 hover:text-red-600'>My-review</li></Link>
        <Link><li className='font-semibold mr-5 hover:text-red-600'>Add-service</li></Link>
        <Link to='/products'><li className='font-semibold mr-5 hover:text-red-600'>Product</li></Link>
        <Link to='/blog'><li className='font-semibold mr-5 hover:text-red-600 '>Blog</li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <div className='flex items-center	'>
                    <img className='w-20 h-20' src={logo} alt="" />
                    <Link className="font-bold text-2xl">Online-Food</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <Link to="/login" onClick={handleLogOut} className="btn btn-goast ml-5">Log Out
                    </Link>
                        : <Link to="/login" className="btn btn-goast">Log In</Link>
                }


            </div>
        </div>
    );
};

export default Header;