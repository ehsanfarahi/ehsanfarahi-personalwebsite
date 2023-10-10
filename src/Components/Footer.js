import "../styles/index.css";

import logoImg from "../images/logo-black.png";

import { IoIosArrowForward } from "react-icons/io";
import { FaViber } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    document
      .querySelector(".subscription-message")
      .classList.add("display-none");
  });

  const handleSubmit = () => {
    document
      .querySelector(".subscription-message")
      .classList.remove("display-none");
    setInterval(() => {
      document
        .querySelector(".subscription-message")
        .classList.add("display-none");
    }, 4000);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <div className="name">
            <p>Ehsan Farahi</p>
            <p>Self-taught Front End Web Developer.</p>
          </div>
          <div className="hire-me">
            <button>Hire me</button>
          </div>
        </div>
        <div className="footer-container-middle">
          <div className="newsletter">
            <p className="subs-text">
              <span>Subscribe For New Stories</span>{" "}
              <span>And Personal Offers</span>
            </p>
            <div className="form">
              <input
                className="subs-email"
                type="text"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
        <div className="footer-container-right">
          <span>Follow us</span>
          <div className="social-media">
            <a href="http://www.facebook.com">
              <i className="fa-brands social fa-facebook-f facebook"></i>
            </a>

            <a href="http://www.instagram.com">
              <i className="fa-brands social fa-instagram instagram"></i>
            </a>
            <a href="http://www.twitter.com">
              <i className="fa-brands social fa-x-twitter x"></i>
            </a>
            <a href="http://www.linkedin.com">
              <i className="fa-brands social fa-linkedin-in linkedin"></i>
            </a>
          </div>
          <div className="contact-num">
            <p>Get in touch</p>
            <p>
              +49 176 46294780 - <FaViber className="contact-icons" />{" "}
              <BsWhatsapp className="contact-icons" />
            </p>
          </div>
        </div>
      </div>

      <span>
        <img className="footer-logo-img" src={logoImg} alt="logo" />
      </span>
      <div className="rights-reserved">
        <div className="current-year">
          <p>
            All Rights Reserved. &copy; {new Date().getFullYear()}{" "}
            www.ehsanfarahi.com
          </p>
        </div>
        <div className="terms-and-conditions">
          <span>Privacy Policy</span> <span>Terms and Conditions</span>
        </div>
      </div>
      {/* <button className="top-arrow" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="35"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 -2 16 22"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button> */}
      {/* <button className="dark-mode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-moon-stars-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </svg>
        DARK MODE
      </button> */}
      {/* <button className="light-mode">LIGHT MODE</button> */}
    </div>
  );
};

export default Footer;
