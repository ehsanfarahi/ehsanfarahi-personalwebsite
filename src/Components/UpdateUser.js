import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();

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

    fetch(`http://127.0.0.1:3001/api/userReg/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password, password2 }),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        toast.success("User data updated!");
      });
    });
  }

  function closeUpdateForm() {
    document.querySelector(".userUpdateForm").classList.toggle("displayNone");
  }

  return (
    <div className="userUpdateForm">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="updateForm">
        <div className="form-control-double">
          <div className="form-control">
            <label htmlFor="fullname">Full Name</label>
            <input
              defaultValue={getUserData.fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={getUserData.email}
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="form-control-double">
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              defaultValue={getUserData.password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password2">Re-enter Password</label>
            <input
              defaultValue={getUserData.password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              placeholder="Re-enter your password"
            />
          </div>
        </div>
        <div className="form-control-double">
          <Button
            onClick={handleSubmit}
            className="update-btn"
            variant="contained"
            color="success"
          >
            Update
          </Button>
          <Button
            onClick={closeUpdateForm}
            className="cancel-btn"
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
