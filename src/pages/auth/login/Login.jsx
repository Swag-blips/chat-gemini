import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginPage">
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

export default Login;
