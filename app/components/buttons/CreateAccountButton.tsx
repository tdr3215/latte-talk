import Link from "next/link";
import React from "react";

const CreateAccountButton = () => {
  return (
    <div className="form-control">
      <Link href="/auth/new" className="btn btn-accent mt-3">
        Create account
      </Link>
    </div>
  );
};

export default CreateAccountButton;
