import "../styles/index.css";

import { useEffect, useState } from "react";

const UserSignup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(fullname, email, password, password2);

    if (password === password2) {
      let regUser = await fetch("http://127.0.0.1:3001/api/userReg", {
        method: "post",
        body: JSON.stringify({ fullname, email, password, password2 }),
        headers: { "Content-Type": "application/json" },
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
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="password2">Re-enter Password</label>
          <input
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            placeholder="Re-enter your password"
          />
        </div>
        <button onClick={handleSubmit} className="signup-btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default UserSignup;
