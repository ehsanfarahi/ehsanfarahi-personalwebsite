import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Button } from "@mui/material";

const MyAccount = () => {
  const { id } = useParams();
  console.log("ID from my account: " + id);

  const [getUserData, setGetUserData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/userReg?id=" + id).then((response) => {
      response.json().then((result) => {
        setGetUserData(result);
      });
    });
  }, [id]);

  function hideMyAccount() {
    document.querySelector(".my-account").classList.add("displayNone");
  }

  function openUpdateForm() {
    document.querySelector(".userUpdateForm").classList.toggle("displayNone");
  }

  return (
    <div className="my-account displayNone">
      <i
        onClick={hideMyAccount}
        className="fa-solid fa-circle-xmark cv-close-btn"
      ></i>
      <div className="my-account-header">
        <img
          className="profile-img"
          src={require("../images/profile2.jpeg")}
          alt={getUserData.fullname}
          width={160}
        />
      </div>
      <div className="my-account-body">
        <div className="my-account-body-left">
          <p className="my-account-fullname">{getUserData.fullname}</p>
          <div className="my-account-email">
            <i className="fa-regular fa-envelope"></i>
            <span>{getUserData.email}</span>
          </div>
          <div className="my-account-action">
            <Button onClick={openUpdateForm} variant="contained">
              <Link to={"/update-user/" + getUserData._id}>Edit</Link>
            </Button>
            <Button variant="outlined" color="error">
              <Link to={"/delete-user/" + getUserData._id}>Delete</Link>
            </Button>
          </div>
        </div>
        <div className="my-account-body-right"></div>
      </div>
    </div>
  );
};

export default MyAccount;
