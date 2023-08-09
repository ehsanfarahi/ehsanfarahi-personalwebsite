import "../styles/index.css";

import { Link } from "react-router-dom";

// Import Components
import UserSignup from "./UserSignup";
import UserLogin from "./UserLogin";
import MyCv from "./MyCv";

// import ehsanCartoon from "../images/ehsan-farahi-img.png";
import ehsanCartoon2 from "../images/ehsan-farahi-img2.png";

import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const hideShowMenu = document.getElementById("menu-list");

    // Toggle Navbar Menu on Menu-icon Click
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("is-active");
      hideShowMenu.classList.toggle("is-active");
    });
  }, []);

  function openSignupForm() {
    document.querySelector(".userSignupForm").classList.remove("displayNone");
  }

  function openLoginForm() {
    document.querySelector(".userLoginForm").classList.remove("displayNone");
  }

  function openMyCv() {
    document.querySelector(".my-cv-container").classList.remove("displayNone");
  }

  const auth = localStorage.getItem("pWebUserData");
  const authLogin = localStorage.getItem("pWebLogData");

  const userLogout = () => {
    localStorage.removeItem("pWebLogData");
  };

  function openMyAccount() {
    document.querySelector(".my-account").classList.remove("displayNone");
  }

  return (
    <div>
      <UserSignup />
      <UserLogin />
      <MyCv />
      <header className="header">
        <div className="top-menu">
          <img
            src={ehsanCartoon2}
            alt="Ehsan Farahi's cartoon"
            className="ehsan-farahi-cartoon"
          />
          <div className="logo">
            <p className="ehsan-farahi">ehsan farahi</p>
          </div>

          <nav className="menu-navigation">
            <div className="menu-icon" id="menu-icon">
              {/* <span className="icon">|||</span>
              <span className="close-icon">X</span> */}

              <span className="menu-icon-line"></span>
              <span className="menu-icon-line"></span>
              <span className="menu-icon-line"></span>
            </div>
            <div className="menu-list" id="menu-list">
              <ul>
                <li className="menu-li">
                  <Link className="menu-link">HOME</Link>
                </li>
                <li className="menu-li">
                  <span
                    onClick={openMyCv}
                    className="menu-link"
                    style={{ cursor: "pointer" }}
                  >
                    MY CV
                  </span>
                </li>
                <li className="menu-li">
                  <Link className="menu-link" to="/create-cv">
                    CREATE CV
                  </Link>
                </li>
                <li className="menu-li">
                  <Link className="menu-link" to="/projects">
                    PROJECTS
                  </Link>
                </li>
                <li className="menu-li">
                  <Link className="menu-link" to="/contact">
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
                    Log in
                  </span>
                  <span onClick={openSignupForm} className="signup">
                    Sign up
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
          <i className="fa-solid fa-angle-right"></i>
          <h2 className="full-stack">FULL STACK WEB DEVELOPER.</h2>

          {/* <p class="know-more">Want to know more about me...?</p>  */}
        </div>
      </header>
    </div>
  );
}
