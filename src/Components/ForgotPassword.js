import { useState } from "react";

// React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

const ForgotPassword = ({
  openForgotpassword,
  setForgotpassword,
  openSignup,
  setSignup,
}) => {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    document
      .querySelector(".userForgotpasswordForm")
      .classList.toggle("displayNone");
  }

  function closeForgotpasswordForm() {
    setForgotpassword(!openForgotpassword);
  }

  function toggleForms() {
    setForgotpassword(!openForgotpassword);
    setSignup(!openSignup);
  }

  return (
    <div
      className={`userForgotpasswordForm ${
        openForgotpassword && "displayNone"
      }`}
    >
      <AiOutlineCloseCircle
        onClick={closeForgotpasswordForm}
        className="form-close-btn"
      />
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
          <p>
            <span onClick={toggleForms}>Sign up</span> instead!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
