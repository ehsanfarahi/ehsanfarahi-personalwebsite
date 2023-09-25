import { useEffect } from "react";

import { FcHome, FcCellPhone, FcGlobe } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

const MyCv = () => {
  useEffect(() => {
    document.querySelector(".my-cv-container").classList.add("displayNone");
    document.querySelector(".minus").classList.add("displayNone");
    document.querySelector(".minus-skills").classList.add("displayNone");
    document.querySelector(".minus-education").classList.add("displayNone");
    document
      .querySelector(".content-data-wrapper-body")
      .classList.add("displayNone");
    document
      .querySelector(".content-data-wrapper-body-skills")
      .classList.add("displayNone");
    document
      .querySelector(".content-data-wrapper-body-education")
      .classList.add("displayNone");
  });

  function closeMyCv() {
    document.querySelector(".my-cv-container").classList.add("displayNone");
  }

  function handleAction() {
    document.querySelector(".plus").classList.toggle("displayNone");
    document.querySelector(".minus").classList.toggle("displayNone");
    document
      .querySelector(".content-data-wrapper-body")
      .classList.toggle("displayNone");
  }

  function handleEducation() {
    document.querySelector(".plus-education").classList.toggle("displayNone");
    document.querySelector(".minus-education").classList.toggle("displayNone");
    document
      .querySelector(".content-data-wrapper-body-education")
      .classList.toggle("displayNone");
  }

  function handleSkills() {
    document.querySelector(".plus-skills").classList.toggle("displayNone");
    document.querySelector(".minus-skills").classList.toggle("displayNone");
    document
      .querySelector(".content-data-wrapper-body-skills")
      .classList.toggle("displayNone");
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
            <FcHome />
            <p>First Street Str. 5</p>
            <p>80001 Munich, Germany</p>
          </div>
          <div className="content-data">
            <FcCellPhone />
            <p>+49 176 46294780</p>
          </div>
          <div className="content-data">
            <MdAttachEmail />
            <p>ehsanullah.farahi@yahoo.com</p>
          </div>
          <div className="content-data">
            <FcGlobe />
            <p>www.ehsanfarahi.com</p>
          </div>
          <h3>Career Objective</h3>
          <div className="content-data">
            <p>
              To obtain a full-stack web development position and to contribute
              to the success and advancement of the company.
            </p>
          </div>
        </div>
      </div>
      <div className="cv-container-right-side">
        <div className="content">
          <p className="head">Introduction</p>
          <div className="content-data">
            <p>
              Hi, I'm Ehsan Farahi, and I am pasionate about helping
              organizations reach their goals and contributing towards their
              development and advancement. As an organized and highly creative
              individual, I love to champion brillient web development and web
              designing ideas that deliver first class results and the
              challenges of working within a dynamic and fast paced working
              environment.
            </p>
          </div>

          <div className="content-data">
            <div className="content-data-wrapper">
              <div className="content-data-wrapper-header">
                <p className="headline">Employment</p>
                <div className="action">
                  <FaPlus onClick={handleAction} className="plus" />
                  <FaMinus onClick={handleAction} className="minus" />
                </div>
              </div>
              <div className="content-data-wrapper-body">
                <div className="section">
                  <p>Software Developer - Ministry of Finance</p>
                  <p>July 2019 - August 2021</p>
                  <ul>
                    <li>Design Websites</li>
                    <li>Test Websites</li>
                    <li>Develop Websites</li>
                  </ul>
                </div>
                <div className="section">
                  <p>Frontend Developer - IDLG</p>
                  <p>October 2018 - May 2019</p>
                  <ul>
                    <li>Design Websites</li>
                    <li>Test Websites</li>
                    <li>Develop Websites</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content-data">
            <div className="content-data-wrapper">
              <div className="content-data-wrapper-header">
                <p className="headline">Education</p>
                <div className="action">
                  <FaPlus
                    onClick={handleEducation}
                    className="plus-education"
                  />
                  <FaMinus
                    onClick={handleEducation}
                    className="minus-education"
                  />
                </div>
              </div>
              <div className="content-data-wrapper-body-education">
                <div className="section">
                  <p>Bachelor of Computer Science</p>
                  <p>2021 - 2021</p>
                  <p>Kardan University - Kabul</p>
                  <p>About the degree</p>
                </div>
                <div className="section">
                  <p>Bachelor of Business Administration</p>
                  <p>2013 - 2018</p>
                  <p>Kardan University - Kabul</p>
                  <p>About the degree</p>
                </div>
                <div className="section">
                  <p>Professional Development Institute</p>
                  <p>2011 - 2012</p>
                  <p>American University of Afghanistan - Kabul</p>
                  <p>About the degree</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-data">
            <div className="content-data-wrapper">
              <div className="content-data-wrapper-header">
                <p className="headline">Skills</p>
                <div className="action">
                  <FaPlus onClick={handleSkills} className="plus-skills" />
                  <FaMinus onClick={handleSkills} className="minus-skills" />
                </div>
              </div>
              <div className="content-data-wrapper-body-skills">
                <div className="section">
                  <ul>
                    <li>HTML / CSS / Tailwind CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCv;
