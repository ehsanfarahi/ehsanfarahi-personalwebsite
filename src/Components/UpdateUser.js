import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  console.log("Update Page ID: " + id);

  const [getUserData, setGetUserData] = useState([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/userReg?id=" + id).then((response) => {
      response.json().then((result) => {
        setGetUserData(result);
      });
    });
  }, [id]);

  function handleSubmit() {
    console.log(fullname, email, password, password2);
  }

  function closeUpdateForm() {
    document.querySelector(".userUpdateForm").classList.toggle("displayNone");
  }

  return (
    <div className="userUpdateForm displayNone">
      <p onClick={closeUpdateForm} className="update-close-btn">
        <i className="fa-solid fa-circle-xmark cv-close-btn"></i>
      </p>
      <div className="updateForm">
        <h2>User Update Form</h2>
        <div className="form-controll">
          <label htmlFor="fullname">Full Name</label>
          <input
            value={getUserData.fullname}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={getUserData.email}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="password">Password</label>
          <input
            value={getUserData.password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="password2">Re-enter Password</label>
          <input
            value={getUserData.password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            placeholder="Re-enter your password"
          />
        </div>
        <button onClick={handleSubmit} className="update-btn">
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
