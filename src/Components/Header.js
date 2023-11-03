import { useState } from "react";

// React Routers
import { Link } from "react-router-dom";

// Import Components
import MyCv from "./MyCv";
import CreateCv from "./CreateCv";
import Contact from "./Contact";
import UserSignup from "./UserSignup";
import UserLogin from "./UserLogin";
import ForgotPassword from "./ForgotPassword";

// Images
import ehsanCartoon from "../images/ehsan-farahi-img1.png";
import ehsanCartoon2 from "../images/ehsan-farahi-img2.png";

// React-icons
import { BiUser } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Header() {
  // Local Storage
  const auth = localStorage.getItem("pWebUserData");
  const authLogin = localStorage.getItem("pWebLogData");
  const userLogout = () => {
    localStorage.removeItem("pWebLogData");
  };

  // Hooks
  const [openCV, setOpenCV] = useState(false);
  const [cartoon, setCartoon] = useState(true);

  // Event Listeners
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setCartoon(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Functions
  const openHomePage = () => {
    setOpenCV(false);
    commonFunctionsOne();
    commonFunctionsThree();
    commonFunctionsFive();
    scrollToTop();
  };

  const openMyCv = () => {
    setOpenCV(true);
    commonFunctionsOne();
    commonFunctionsThree();
    commonFunctionsFive();
    scrollToTop();
  };

  const openCreateCv = () => {
    document
      .querySelector(".create-cv-container")
      .classList.remove("displayNone");
    setOpenCV(false);
    commonFunctionsTwo();
    commonFunctionsThree();
    commonFunctionsFive();
    scrollToTop();
  };

  const openMyAccount = () => {
    document.querySelector(".my-account").classList.remove("displayNone");
  };

  const openContact = () => {
    document
      .querySelector(".contact-container")
      .classList.remove("displayNone");
    document
      .querySelector(".contact-container")
      .classList.add("display-flex-wrap");
    setOpenCV(false);
    commonFunctionsFive();
    commonFunctionsOne();
    scrollToTop();
  };

  const openLoginForm = () => {
    document.querySelector(".userLoginForm").classList.remove("displayNone");
    setOpenCV(false);
    commonFunctionsOne();
    commonFunctionsThree();
    scrollToTop();
  };

  function scrollToProjects() {
    const goToWork = document.querySelector(".my-work").getBoundingClientRect();
    window.scrollTo({ top: goToWork.top, behavior: "smooth" });
    commonFunctionsTwo();
  }

  function showHideMenu() {
    commonFunctionsTwo();
    setCartoon(false);

    setTimeout(() => {
      document
        .querySelector(".menu-li-container")
        .classList.toggle("menu-li-animation");
    }, 300);
  }

  const commonFunctionsOne = () => {
    commonFunctionsTwo();
    document.querySelector(".create-cv-container").classList.add("displayNone");
  };

  const commonFunctionsTwo = () => {
    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");
  };

  const commonFunctionsThree = () => {
    document.querySelector(".contact-container").classList.add("displayNone");
    document
      .querySelector(".contact-container")
      .classList.remove("display-flex-wrap");
  };

  const commonFunctionsFive = () => {
    document.querySelector(".userLoginForm").classList.add("displayNone");
    document.querySelector(".userSignupForm").classList.add("displayNone");
  };

  return (
    <div>
      <UserSignup />
      <UserLogin />
      <ForgotPassword />
      {openCV && <MyCv />}
      <CreateCv />
      <Contact />
      <header className="header">
        <div className="top-menu">
          <img
            src={cartoon ? ehsanCartoon : ehsanCartoon2}
            alt="Ehsan Farahi's cartoon"
            className="ehsan-farahi-cartoon"
          />
          <div className="logo">
            <p className="ehsan-farahi">ehsan farahi</p>
          </div>

          <nav className="menu-navigation">
            <div onClick={showHideMenu} className="menu-icon" id="menu-icon">
              <span className="menu-icon-line"></span>
              <span className="menu-icon-line"></span>
              <span className="menu-icon-line"></span>
            </div>
            <div className="menu-list" id="menu-list">
              <ul className="menu-li-container">
                <li className="menu-li">
                  <Link onClick={openHomePage} className="menu-link">
                    HOME
                  </Link>
                </li>
                <li className="menu-li">
                  <Link
                    onClick={openMyCv}
                    className="menu-link"
                    style={{ cursor: "pointer" }}
                  >
                    MY CV
                  </Link>
                </li>
                <li className="menu-li">
                  <Link onClick={openCreateCv} className="menu-link">
                    CREATE CV
                  </Link>
                </li>
                <li className="menu-li">
                  <Link onClick={scrollToProjects} className="menu-link">
                    PROJECTS
                  </Link>
                </li>
                <li className="menu-li">
                  <Link onClick={openContact} className="menu-link">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <div className="social-media-menu">
                <a href="http://www.facebook.com">
                  <i className="fa-brands social fa-facebook-f"></i>
                </a>
                <a href="http://www.instagram.com">
                  <i className="fa-brands social fa-instagram"></i>
                </a>
                <a href="http://www.twitter.com">
                  <i className="fa-brands social fa-twitter"></i>
                </a>
                <a href="http://www.linkedin.com">
                  <i className="fa-brands social fa-linkedin-in"></i>
                </a>
              </div>
              <div className="menu-account-mobile">
                {auth || authLogin ? (
                  <div>
                    <span className="menu-account-mobile--my-account-icon">
                      <i
                        onClick={openMyAccount}
                        className="fa-regular fa-user"
                      ></i>
                    </span>{" "}
                    {"  "}
                    <span className="menu-account-mobile--logout">
                      <i
                        onClick={userLogout}
                        className="fa-sharp fa-solid fa-arrow-right-from-bracket"
                      ></i>
                    </span>
                  </div>
                ) : (
                  <div>
                    <span
                      onClick={openLoginForm}
                      className="menu-account-mobile--login"
                    >
                      Sign in
                    </span>
                    <span>
                      <BiUser className="login-icon" />
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="menu-account">
              {auth || authLogin ? (
                <div>
                  <span className="my-account-icon">
                    <i
                      onClick={openMyAccount}
                      className="fa-regular fa-user"
                    ></i>
                  </span>{" "}
                  {"  "}
                  <span className="logout">
                    <i
                      onClick={userLogout}
                      className="fa-sharp fa-solid fa-arrow-right-from-bracket"
                    ></i>
                  </span>
                </div>
              ) : (
                <div>
                  <span onClick={openLoginForm} className="login">
                    Sign in
                  </span>
                  <span>
                    <BiUser className="login-icon" />
                  </span>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="bio">
          <h1 className="about-me">About me,</h1>
          <h2>
            <span className="first-line">I'm</span>
            <span className="second-line">
              console<span style={{ color: "grey" }}>.</span>
              <span style={{ color: "green" }}>log</span>
              <span style={{ color: "red" }}>(</span>
              <span className="myName">{"myName"}</span>
              <span style={{ color: "red" }}>)</span>;
            </span>
          </h2>

          <h2 className="ehsan-script">
            <span className="script-first-part">Ehsan Farahi,</span>
            <span className="script-second-part">script.js:13</span>
          </h2>
          <MdKeyboardArrowRight className="fa-solid" />
          <h2 className="full-stack">Front End Web Developer.</h2>
        </div>
      </header>
    </div>
  );
}
