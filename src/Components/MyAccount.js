import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@mui/material";

// Import components
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

const MyAccount = () => {
  const { id } = useParams();

  const [getUserData, setGetUserData] = useState([]);

  useEffect(() => {
    document.querySelector(".userUpdateForm").classList.add("displayNone");
    document.querySelector(".userDelete").classList.add("displayNone");

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
    document.querySelector(".userUpdateForm").classList.remove("displayNone");
    document.querySelector(".userDelete").classList.add("displayNone");
  }

  function openDelete() {
    document.querySelector(".userDelete").classList.remove("displayNone");
    document.querySelector(".userUpdateForm").classList.add("displayNone");
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
          src={
            getUserData.photo
              ? require(`../../../server/uploads/usersPhotos/${getUserData.photo}`)
              : require("../images/profile2.jpeg")
          }
          alt={getUserData.fullname}
          width={160}
          height={160}
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
              {/* <Link to={"/update-user/" + getUserData._id}>Edit</Link> */}
              Edit
            </Button>
            <Button onClick={openDelete} variant="outlined" color="error">
              {/* <Link to={"/delete-user/" + getUserData._id}>Delete</Link> */}
              Delete
            </Button>
          </div>
        </div>
        <div className="my-account-body-right">
          <UpdateUser />
          <DeleteUser />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
