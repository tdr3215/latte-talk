"use client";
import Link from "next/link";
import React from "react";

const SignUpButton = () => {
  return (
    <div className="form-control mt-6">
      <Link href={"/"} className="btn btn-primary">
        Login
      </Link>
    </div>
  );
};

export default SignUpButton;
