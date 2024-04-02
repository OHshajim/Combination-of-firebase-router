import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

    const { LoginUser, signWithGoogle, signWithGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        LoginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })

    }
    const handleGoogle = () => {
        signWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }
    const handleGit = () => {
        signWithGithub()
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupidity voluptatem et in. Quadrat fugit ut assumed except exercitation quasi. In delegati ease aut repudiate et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>New here ? Please
                                    <Link to="/signup">
                                        <button className="btn btn-link">Sign up</button>
                                    </Link>
                                </p>

                                <div className="flex ">
                                    <p><button className="btn btn-link " onClick={handleGoogle}>Google</button></p>
                                    <p><button className="btn btn-link " onClick={handleGit}>GitHub</button></p>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;