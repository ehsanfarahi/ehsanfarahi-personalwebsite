import { useParams } from "react-router-dom";

const DeleteUser = () => {
  function closeDeleteForm() {
    document.querySelector(".userDelete").classList.toggle("displayNone");
  }

  const { id } = useParams();

  function handleDelete() {
    fetch(`http://127.0.0.1:3001/api/userReg/${id}`, {
      method: "delete",
    });
  }

  return (
    <div className="userDelete">
      <p>
        Are you sure, you want to delete?{" "}
        <span onClick={handleDelete}>Yes</span>{" "}
        <span onClick={closeDeleteForm}>No</span>
      </p>
    </div>
  );
};

export default DeleteUser;
