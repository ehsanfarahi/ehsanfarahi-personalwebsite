import { useEffect } from "react";

const MyCv = () => {
  useEffect(() => {
    document.querySelector(".my-cv-container").classList.add("displayNone");
  });

  function closeMyCv() {
    document.querySelector(".my-cv-container").classList.add("displayNone");
  }

  return (
    <div className="my-cv-container">
      <i
        onClick={closeMyCv}
        className="fa-solid fa-circle-xmark cv-close-btn"
      ></i>
      <div className="cv-container-header">
        <p>Ehsan Farahi</p>
        <p>Full Stack Web Developer</p>
        <hr />
      </div>
      <div className="cv-container-left-side">
        <div className="content">
          <h3>Contacts</h3>
          <div className="content-data">
            <i>🏠</i>
            <p>First Street Str. 5</p>
            <p>80001 Munich, Germany</p>
          </div>
          <div className="content-data">
            <i>📞</i>
            <p>+49 176 46294780</p>
          </div>
          <div className="content-data">
            <i>📧</i>
            <p>ehsanullah.farahi@yahoo.com</p>
          </div>
          <div className="content-data">
            <i>🌐</i>
            <p>www.ehsanfarahi.com</p>
          </div>
        </div>
      </div>
      <div className="cv-container-right-side">
        <div className="content">
          <p>Employment</p>
          <div className="content-data">
            <p>Software Developer - Ministry of Finance</p>
            <ul>
              <li>Design Websites</li>
              <li>Test Websites</li>
              <li>Develop Websites</li>
            </ul>
          </div>
          <div className="content-data">
            <p>Frontend Developer - IDLG</p>
            <ul>
              <li>Design Websites</li>
              <li>Test Websites</li>
              <li>Develop Websites</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCv;
