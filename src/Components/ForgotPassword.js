import { useState, useEffect } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    document
      .querySelector(".userForgotpasswordForm")
      .classList.toggle("displayNone");
  }

  useEffect(() => {
    document
      .querySelector(".userForgotpasswordForm")
      .classList.add("displayNone");
  }, []);

  function closeForgotpasswordForm() {
    document
      .querySelector(".userForgotpasswordForm")
      .classList.toggle("displayNone");
  }

  return (
    <div className="userForgotpasswordForm">
      <p onClick={closeForgotpasswordForm} className="forgotpassword-close-btn">
        <i className="fa-solid fa-circle-xmark cv-close-btn"></i>
      </p>
      <div className="forgotpasswordForm">
        <h2>Re-set Password Form</h2>
        <div className="form-controll">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            autoComplete="none"
            className="user-forgotpassword-email"
          />
          <p className="user-forgotpassword-error">
            Email field cannot be empty!
          </p>
        </div>
        <div className="forgotpassword-form-bottom">
          <button onClick={handleSubmit} className="forgotpassword-btn">
            Reset password
          </button>
          <p>Sign up instead!</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
