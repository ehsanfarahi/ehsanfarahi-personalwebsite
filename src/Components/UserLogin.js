// import "../styles/index.css";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    let userLoginData = await fetch("http://127.0.0.1:3001/api/userLogin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    userLoginData = await userLoginData.json();
    console.log(userLoginData);

    localStorage.setItem("pWebLogData", JSON.stringify(userLoginData));
    navigate("/my-account/" + userLoginData._id);

    alert("Logged In");

    document.querySelector(".userLoginForm").classList.toggle("displayNone");
  }

  useEffect(() => {
    document.querySelector(".userLoginForm").classList.add("displayNone");
  }, []);

  function closeLoginForm() {
    document.querySelector(".userLoginForm").classList.toggle("displayNone");
  }

  function toggleForms() {
    document.querySelector(".userLoginForm").classList.toggle("displayNone");
    document.querySelector(".userSignupForm").classList.toggle("displayNone");
  }

  function openForgotPasswordForm() {
    document.querySelector(".userLoginForm").classList.toggle("displayNone");
    document
      .querySelector(".userForgotpasswordForm")
      .classList.toggle("displayNone");
  }

  return (
    <div className="userLoginForm">
      <AiOutlineCloseCircle
        onClick={closeLoginForm}
        className="form-close-btn"
      />
      <div className="loginForm">
        <h2>User Sign In Form</h2>
        <div className="form-controll">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            autoComplete="none"
            className="user-login-email"
          />
          <p className="user-login-error">Email field cannot be empty!</p>
        </div>
        <div className="form-controll">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="********************"
            className="user-login-password"
          />
          {showPassword ? (
            <AiFillEyeInvisible
              className="showHidePasswordIcon"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          ) : (
            <AiFillEye
              className="showHidePasswordIcon"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          )}
          <p className="user-password-error">Password field cannot be empty!</p>
        </div>
        <div className="login-form-bottom">
          <div className="login-form-bottom--btn">
            <button onClick={handleSubmit} className="login-btn">
              Sign in
            </button>
          </div>
          <div className="login-form-bottom--forgot-password">
            <p onClick={openForgotPasswordForm}>Forgot Password?</p>
          </div>
        </div>
        <div className="login-with-google">
          <p className="login-with-google--or">Or</p>
          <button>
            <FcGoogle className="google-icon" /> Continue with Google
          </button>
          <p>
            Don't have an account? <span onClick={toggleForms}>Sign up</span>
          </p>
        </div>
      </div>
      <div className="small-glassmorphism-1"></div>
      <div className="small-glassmorphism-2"></div>
      <div className="small-glassmorphism-3"></div>
      <div className="small-glassmorphism-4"></div>
      <div className="small-glassmorphism-5"></div>
    </div>
  );
};

export default UserLogin;
