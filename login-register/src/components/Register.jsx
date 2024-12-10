import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="login-container h-[90vh] w-screen bg-[url('https://static.vecteezy.com/system/resources/previews/003/623/626/non_2x/sunset-lake-landscape-illustration-free-vector.jpg')] bg-center bg-cover rounded-3xl grid md:grid-cols-2 justify-items-center">
        <p className="text-4xl md:text-[10rem] font-bold text-white self-center">
          REGISTER
        </p>
        <div className="login-data bg-white m-5 rounded-3xl p-5 md:w-[90%] md:justify-self-start space-y-10 grid md:h-[75%] self-center">
          <div className="welcome-title space-y-3 md:self-end">
            <h1 className="text-2xl font-bold">Create Account</h1>
          </div>
          <div className="input-section">
            <div className="email">
              <p>Email</p>
              <InputBox content="Enter your email" />
            </div>
            <div className="password">
              <p>Password</p>
              <InputBox content="Enter your password" />
            </div>
            <div className="confirm">
              <p>Confirm Password</p>
              <InputBox content="Re-enter your password" />
            </div>
            <a href="" className="text-blue-400 text-sm">
              Already have an account? Log in
            </a>
          </div>
          <div className="login-button justify-self-center">
            <Button content="Register" />
          </div>
          <div className="alternative-login text-center space-y-3">
            <p>OR Sign Up With:</p>
            <div className="icon-section flex justify-center gap-5 text-2xl">
              <FaFacebook className="cursor-pointer transition-transform hover:scale-125" />
              <FaGithub className="cursor-pointer transition-transform hover:scale-125" />
              <FaGoogle className="cursor-pointer transition-transform hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
