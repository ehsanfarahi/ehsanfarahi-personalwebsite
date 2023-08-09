import "../styles/index.css";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const UserLogin = () => {
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
  }

  useEffect(() => {
    document.querySelector(".userLoginForm").classList.add("displayNone");
  }, []);

  function closeLoginForm() {
    document.querySelector(".userLoginForm").classList.toggle("displayNone");
  }

  return (
    <div className="userLoginForm">
      <p onClick={closeLoginForm} className="login-close-btn">
        <i className="fa-solid fa-circle-xmark cv-close-btn"></i>
      </p>
      <div className="loginForm">
        <h2>User Log In Form</h2>
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
        <button onClick={handleSubmit} className="login-btn">
          Log in
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
