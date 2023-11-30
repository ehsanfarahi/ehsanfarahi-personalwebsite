import { useEffect } from "react";

import { FcHome, FcCellPhone, FcGlobe } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MyCv = () => {
  useEffect(() => {
    // document.querySelector(".my-cv-container").classList.add("displayNone");
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
      <AiOutlineCloseCircle onClick={closeMyCv} className="form-close-btn" />
      <div className="cv-container-header">
        <p>Ehsan Farahi</p>
        <p>Front End Web Developer</p>
        <hr />
      </div>
      <div className="cv-container-left-side">
        <div className="content">
          <h3>Contacts</h3>
          <div className="content-data">
            <FcHome />
            <p>Burgauerstr. 41</p>
            <p>81929 Munich, Germany</p>
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
              To obtain a front end web development position and to contribute
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
                  <p>Front End Developer - Ministry of Finance {"(MoF)"}</p>
                  <p>October 2019 - August 2021</p>
                  <ul>
                    <li>
                      Write well-structured code that is easy to maintain and
                      understand.
                    </li>
                    <li>
                      Provide pre-built components and efficient ways to manage
                      the state of an application.
                    </li>
                    <li>
                      Debug errors, troubleshoot issues, and perform routine
                      performance optimizations.
                    </li>
                    <li>On-site search engine optimization {"(SEO)"}.</li>
                  </ul>
                </div>
                <div className="section">
                  <p>
                    Front End Developer - Citizens' Charter National Priority
                    Program {"CCNPP"}
                  </p>
                  <p>November 2018 - October 2019</p>
                  <ul>
                    <li>Write high-quality, scalable, and reusable code.</li>
                    <li>
                      Gather and refine specifications and requirements based on
                      technical requirements or UX design.
                    </li>
                    <li>
                      Collaborate with designers, product managers and backend
                      engineers.
                    </li>
                  </ul>
                </div>
                <div className="section">
                  <p>Assistant Front End Developer - Hope Tech Ltd</p>
                  <p>February 2018 - September 2018</p>
                  <ul>
                    <li>
                      Build applications that adapt and work well across
                      different devices and screen sizes.
                    </li>
                    <li>
                      Transform app designs into front-end code with HTML, CSS,
                      and JavaScript.
                    </li>
                    <li>Translate UI/UX design wireframes to actual code.</li>
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
                  <p>Bachelor in Computer Science {"(BCS)"}</p>
                  <p>2021 - 2021</p>
                  <p>Kardan University - Kabul</p>
                  <p>
                    Discontinued in 2nd semester due to polital changes in the
                    country, and then continued online courses.
                  </p>
                </div>
                <div className="section">
                  <p>Bachelor in Business Administration {"(BBA)"}</p>
                  <p>2013 - 2018</p>
                  <p>Kardan University - Kabul</p>
                  <p>
                    Bachelor in Business Administration with specialization in
                    Finance {"(BBA)"}
                  </p>
                </div>
                <div className="section">
                  <p>Professional Development Institute {"(PDI)"}</p>
                  <p>2011 - 2012</p>
                  <p>American University of Afghanistan - Kabul</p>
                  <p>Professional Development Program</p>
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
                    <li>SASS / Bootstrap</li>
                    <li>Material UI / Figma</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>PHP</li>
                    <li>.Net Core</li>
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
