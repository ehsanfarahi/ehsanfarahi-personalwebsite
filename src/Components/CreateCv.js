import { useEffect } from "react";

// React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

const CreateCv = () => {
  useEffect(() => {
    document.querySelector(".create-cv-container").classList.add("displayNone");
  });

  function closeCreateCv() {
    document.querySelector(".create-cv-container").classList.add("displayNone");
  }

  return (
    <div className="create-cv-container">
      <AiOutlineCloseCircle
        onClick={closeCreateCv}
        className="form-close-btn"
      />
      <div className="create-cv-container-content">
        <h2>Coming soon...</h2>
      </div>
    </div>
  );
};

export default CreateCv;
