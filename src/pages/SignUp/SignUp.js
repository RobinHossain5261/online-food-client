import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/useTitle';

const SignUp = () => {
    const [errorpass, setErrorPass] = useState('');
    const { createUser } = useContext(AuthContext);
    useTitle('SignUp');
    const navigate = useNavigate();

    const handaleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('User register successfull.');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setErrorPass(error.message)

            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                    <form onSubmit={handaleSignUp} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <p className='text-red-500'>{errorpass}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">Have an account <Link to="/login" className='font-bold text-red-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;