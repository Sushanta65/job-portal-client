import React, { useContext } from "react";
import registerLottie from '../assets/lotties/register.json'
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {createUser, setLoading, setUser} = useContext(AuthContext)

  const handleRegister = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true)
    createUser(email, password)
    .then(data => {
      setUser(data.user)
    }).catch(err => {
      console.log(err.message)
    })
  }
   return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse w-4/5 mx-auto">
        <div className="text-center lg:text-left">
          <Lottie className="w-3/6" animationData={registerLottie} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
