import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from '../../hook/useTitle';

const Login = () => {
    const { login, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    useTitle('Login');

    const location = useLocation();
    const from = location.state?.from.pathname || ('/');
    const navigate = useNavigate();

    const handaleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handaleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handaleLogin} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={handaleGoogleSignIn} className="btn btn-success mt-2">Login With Google</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">I have no account <Link to="/signUp" className='font-bold text-red-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;