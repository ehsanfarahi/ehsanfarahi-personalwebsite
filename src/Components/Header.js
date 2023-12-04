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

  const [cartoon, setCartoon] = useState(true);

  const [menuIcon, setMenuIcon] = useState(false);
  const [openCV, setOpenCV] = useState(true);
  const [openCreateCV, setOpenCreateCV] = useState(true);
  const [openContactForm, setOpenContactForm] = useState(true);
  const [openSignin, setOpenSignin] = useState(true);
  const [openSignup, setOpenSignup] = useState(true);
  const [openForgotpassword, setOpenForgotpassword] = useState(true);
  const [menuAnim, setMenuAnim] = useState(false);

  // Event Listeners
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
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
    setMenuIcon(!menuIcon);
    setOpenCV(true);
    setOpenCreateCV(true);
    setOpenContactForm(true);
    setOpenSignin(true);
    setOpenSignup(true);
    setOpenForgotpassword(true);
    scrollToTop();
    setTimeout(() => {
      setMenuAnim(!menuAnim);
    }, 300);
  };

  const openMyCv = () => {
    setMenuIcon(!menuIcon);
    setOpenCV(false);
    setOpenCreateCV(true);
    setOpenContactForm(true);
    setOpenSignin(true);
    setOpenSignup(true);
    setOpenForgotpassword(true);
    scrollToTop();
    setTimeout(() => {
      setMenuAnim(!menuAnim);
    }, 300);
  };

  const openCreateCv = () => {
    setMenuIcon(!menuIcon);
    setOpenCV(true);
    setOpenCreateCV(false);
    setOpenContactForm(true);
    setOpenSignup(true);
    setOpenForgotpassword(true);
    scrollToTop();
    setTimeout(() => {
      setMenuAnim(!menuAnim);
    }, 300);
  };

  const openMyAccount = () => {
    document.querySelector(".my-account").classList.remove("displayNone");
  };

  const openContact = () => {
    setOpenCV(true);
    setOpenContactForm(false);
    setOpenSignin(true);
    setOpenSignup(true);
    setOpenForgotpassword(true);
    setOpenCreateCV(true);
    setMenuIcon(!menuIcon);
    scrollToTop();
    setTimeout(() => {
      setMenuAnim(!menuAnim);
    }, 300);
  };

  const openLoginForm = () => {
    setOpenSignin(false);
    setOpenCV(true);
    setOpenCreateCV(true);
    setMenuIcon(!menuIcon);
    setOpenContactForm(true);
    scrollToTop();
    setTimeout(() => {
      setMenuAnim(!menuAnim);
    }, 300);
  };

  function scrollToProjects() {
    const goToWork = document.querySelector(".my-work").getBoundingClientRect();
    window.scrollTo({ top: goToWork.top, behavior: "smooth" });
    setMenuIcon(!menuIcon);
    setTimeout(() => {
      setMenuAnim(!menuAnim);
    }, 300);
  }

  function showHideMenu() {
    setMenuIcon(!menuIcon);
    setCartoon(false);

    setTimeout(() => {
      setMenuAnim(!menuAnim);
    }, 300);
  }

  return (
    <div>
      <UserSignup
        openSignin={openSignin}
        setSignin={setOpenSignin}
        openSignup={openSignup}
        setSignup={setOpenSignup}
      />
      <UserLogin
        openSignin={openSignin}
        setSignin={setOpenSignin}
        openSignup={openSignup}
        setSignup={setOpenSignup}
        openForgotpassword={openForgotpassword}
        setForgotpassword={setOpenForgotpassword}
      />
      <ForgotPassword
        openForgotpassword={openForgotpassword}
        setForgotpassword={setOpenForgotpassword}
        openSignup={openSignup}
        setSignup={setOpenSignup}
      />
      <MyCv openCV={openCV} setOpenCV={setOpenCV} />
      <CreateCv openCreateCV={openCreateCV} setCreateCV={setOpenCreateCV} />
      <Contact openContact={openContactForm} setContact={setOpenContactForm} />
      <header className="header">
        <div className="glassOne"></div>

        <div className="glassTwo"></div>
        <div className="glassThree">
          <div className="inner-triangleThree"></div>
        </div>
        <div className="glassFive"></div>
        <div className="glassFour">
          <div className="inner-triangleFour"></div>
        </div>

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
            <div
              onClick={showHideMenu}
              className={`menu-icon ${menuIcon && "is-active"}`}
              id="menu-icon"
            >
              <span className="menu-icon-line"></span>
              <span className="menu-icon-line"></span>
              <span className="menu-icon-line"></span>
            </div>
            <div
              className={`menu-list ${menuIcon && "is-active"}`}
              id="menu-list"
            >
              <ul
                className={`menu-li-container ${
                  menuAnim && "menu-li-animation"
                }`}
              >
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
