// import "../styles/index.css";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { useEffect, useState } from "react";

const UserSignup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [photo, setPhoto] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(fullname, email, password, password2, photo);

    const formData = new FormData();
    formData.append("file", photo);
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", password2);

    if (password === password2) {
      let regUser = await fetch("http://127.0.0.1:3001/api/userReg", {
        method: "post",
        // body: JSON.stringify({ fullname, email, password, password2 }),
        body: formData,
        // headers: { "Content-Type": "application/json" },
      });

      regUser = await regUser.json();
      console.log(regUser);

      localStorage.setItem("pWebUserData", JSON.stringify(regUser));
    } else {
      console.log("Passwords do not match");
    }
  }

  useEffect(() => {
    document.querySelector(".userSignupForm").classList.add("displayNone");
  }, []);

  function closeSignuoForm() {
    document.querySelector(".userSignupForm").classList.toggle("displayNone");
  }

  function toggleForms() {
    document.querySelector(".userSignupForm").classList.toggle("displayNone");
    document.querySelector(".userLoginForm").classList.toggle("displayNone");
  }

  return (
    <div className="userSignupForm">
      <p onClick={closeSignuoForm} className="signup-close-btn">
        <i className="fa-solid fa-circle-xmark cv-close-btn"></i>
      </p>
      <div className="signupForm">
        <h2>User Registration Form</h2>
        <div className="form-controll">
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            name="fullname"
            placeholder="Enter your full name"
          />
          <p className="user-signup-fullname-error">
            Full name field cannot be empty!
          </p>
        </div>
        <div className="form-controll">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <p className="user-signup-email-error">
            Email field cannot be empty!
          </p>
        </div>
        <div className="form-controll">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="********************"
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
          <p className="user-signup-password-error">
            Password field cannot be empty!
          </p>
        </div>
        <div className="form-controll">
          <label htmlFor="password2">Re-enter Password</label>
          <input
            onChange={(e) => setPassword2(e.target.value)}
            type={showPassword2 ? "text" : "password"}
            name="password2"
            placeholder="********************"
          />
          {showPassword2 ? (
            <AiFillEyeInvisible
              className="showHidePasswordIcon"
              onClick={() => setShowPassword2((prevState) => !prevState)}
            />
          ) : (
            <AiFillEye
              className="showHidePasswordIcon"
              onClick={() => setShowPassword2((prevState) => !prevState)}
            />
          )}
          <p className="user-signup-password2-error">
            Password field cannot be empty!
          </p>
        </div>
        <div className="form-controll">
          <label htmlFor="photo">Photo (optional)</label>
          <input
            onChange={(e) => setPhoto(e.target.files[0])}
            type="file"
            name="photo"
          />
        </div>
        <div className="signup-form-bottom--btn">
          <button onClick={handleSubmit} className="signup-btn">
            Sign up
          </button>
        </div>

        <div className="signup-with-google">
          <p className="signup-with-google--or">Or</p>
          <button>
            <FcGoogle className="google-icon" /> Continue with Google
          </button>
          <p>
            Already have an account? <span onClick={toggleForms}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
