import { useEffect } from "react";

const CreateCv = () => {
  useEffect(() => {
    document.querySelector(".create-cv-container").classList.add("displayNone");
  });

  function closeCreateCv() {
    document.querySelector(".create-cv-container").classList.add("displayNone");
  }

  return (
    <div className="create-cv-container">
      <i
        onClick={closeCreateCv}
        className="fa-solid fa-circle-xmark create-cv-close-btn"
      ></i>
      <div className="create-cv-container-content">
        <h2>Coming soon...</h2>
      </div>
    </div>
  );
};

export default CreateCv;
