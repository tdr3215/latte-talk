import Image from "next/image";
import React from "react";
import LoginButton from "../components/LoginButton";
import CreateAccountButton from "../components/CreateAccountButton";
const AuthPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div>
              <h2 className="text-2xl font-bold">Welcome!</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <LoginButton />
            <CreateAccountButton />
          </form>
        </div>
        <div>
          <h1 className="mb-5 text-5xl font-bold text-center">Latte Talk</h1>

          <Image
            className="max-w-sm rounded-lg "
            src="/coffee-icons/002-menu.png"
            alt="foldable sign for a coffee shop"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
