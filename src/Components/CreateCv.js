// React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

const CreateCv = ({ openCreateCV, setCreateCV }) => {
  function closeCreateCv() {
    setCreateCV(!openCreateCV);
  }

  return (
    <div className={`create-cv-container ${openCreateCV && "displayNone"} `}>
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
