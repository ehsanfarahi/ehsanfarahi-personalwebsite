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

export default function Header() {
  const auth = localStorage.getItem("pWebUserData");
  const authLogin = localStorage.getItem("pWebLogData");

  const userLogout = () => {
    localStorage.removeItem("pWebLogData");
  };

  const [openCV, setOpenCV] = useState(false);

  // Functions
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openHomePage = () => {
    // document.querySelector(".my-cv-container").classList.add("displayNone");
    // document
    //   .querySelector(".my-cv-container")
    //   .classList.remove("display-flex-wrap");
    setOpenCV(false);
    document.querySelector(".create-cv-container").classList.add("displayNone");
    document.querySelector(".contact-container").classList.add("displayNone");
    document
      .querySelector(".contact-container")
      .classList.remove("display-flex-wrap");
    document.querySelector(".userLoginForm").classList.add("displayNone");
    document.querySelector(".userSignupForm").classList.add("displayNone");

    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");

    scrollToTop();
  };

  const openMyCv = () => {
    // document.querySelector(".my-cv-container").classList.remove("displayNone");
    setOpenCV(true);
    // document
    //   .querySelector(".my-cv-container")
    //   .classList.add("display-flex-wrap");
    document.querySelector(".create-cv-container").classList.add("displayNone");
    document.querySelector(".contact-container").classList.add("displayNone");
    document
      .querySelector(".contact-container")
      .classList.remove("display-flex-wrap");
    document.querySelector(".userLoginForm").classList.add("displayNone");
    document.querySelector(".userSignupForm").classList.add("displayNone");

    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");

    scrollToTop();
  };

  const openCreateCv = () => {
    // document.querySelector(".my-cv-container").classList.add("displayNone");
    // document
    //   .querySelector(".my-cv-container")
    //   .classList.remove("display-flex-wrap");
    setOpenCV(false);
    document
      .querySelector(".create-cv-container")
      .classList.remove("displayNone");
    document.querySelector(".contact-container").classList.add("displayNone");
    document
      .querySelector(".contact-container")
      .classList.remove("display-flex-wrap");
    document.querySelector(".userLoginForm").classList.add("displayNone");
    document.querySelector(".userSignupForm").classList.add("displayNone");

    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");

    scrollToTop();
  };

  const openMyAccount = () => {
    document.querySelector(".my-account").classList.remove("displayNone");
  };

  const openContact = () => {
    // document.querySelector(".my-cv-container").classList.add("displayNone");
    // document
    //   .querySelector(".my-cv-container")
    //   .classList.remove("display-flex-wrap");
    setOpenCV(false);
    document.querySelector(".create-cv-container").classList.add("displayNone");
    document
      .querySelector(".contact-container")
      .classList.remove("displayNone");
    document
      .querySelector(".contact-container")
      .classList.add("display-flex-wrap");
    document.querySelector(".userLoginForm").classList.add("displayNone");
    document.querySelector(".userSignupForm").classList.add("displayNone");

    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");

    scrollToTop();
  };

  const openLoginForm = () => {
    // document.querySelector(".my-cv-container").classList.add("displayNone");
    // document
    //   .querySelector(".my-cv-container")
    //   .classList.remove("display-flex-wrap");
    setOpenCV(false);
    document.querySelector(".create-cv-container").classList.add("displayNone");
    document.querySelector(".contact-container").classList.add("displayNone");
    document
      .querySelector(".contact-container")
      .classList.remove("display-flex-wrap");
    document.querySelector(".userLoginForm").classList.remove("displayNone");

    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");

    scrollToTop();
  };

  function scrollToProjects() {
    const goToWork = document.querySelector(".my-work").getBoundingClientRect();

    window.scrollTo({ top: goToWork.top, behavior: "smooth" });

    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");
  }

  function showHideMenu() {
    document.querySelector(".menu-icon").classList.toggle("is-active");
    document.querySelector(".menu-list").classList.toggle("is-active");
    setCartoon(false);
  }

  const [cartoon, setCartoon] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setCartoon(false);
    }
  });

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
              <ul>
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
                    {/* <span
                      onClick={openSignupForm}
                      className="menu-account-mobile--signup"
                    >
                      Sign up
                    </span> */}
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
                  {/* <span onClick={openSignupForm} className="signup">
                    Sign up
                  </span> */}
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
          {/* <i className="fa-solid fa-angle-right"></i> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="fa-solid"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
          <h2 className="full-stack">Front End Web Developer.</h2>
        </div>
      </header>
    </div>
  );
}
