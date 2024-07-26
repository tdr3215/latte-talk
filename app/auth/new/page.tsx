import Image from "next/image";
import Link from "next/link";
import CreateAccountButton from "../../components/buttons/CreateAccountButton";
import Logo from "../../components/Logo";

const CreateAccount = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div>
              <h2 className="text-2xl font-bold">Create Account</h2>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <CreateAccountButton />
          </form>
        </div>

        <div>
          <Logo />
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

export default CreateAccount;
