import "../styles/index.css";

import logoImg from "../images/logo-black.png";

import { IoIosArrowForward } from "react-icons/io";
import { FaViber } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

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
            {/* <div className="form">
              <input
                className="subs-email"
                type="text"
                placeholder="Enter your email"
              />
              <IoIosArrowForward onClick={handleSubmit} className="sub-btn" />
            </div> */}
          </div>
        </div>
        <div className="footer-container-right">
          <span>Follow us</span>
          <div className="social-media">
            <a href="http://www.facebook.com">
              {/* <i className="fa-brands social fa-facebook-f facebook"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className="social facebook"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>

            <a href="http://www.instagram.com">
              {/* <i className="fa-brands social fa-instagram instagram"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="social instagram"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="http://www.twitter.com">
              {/* <i className="fa-brands social fa-x-twitter x"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="social x"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a href="http://www.linkedin.com">
              {/* <i className="fa-brands social fa-linkedin-in linkedin"></i> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="social linkedin"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
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
          <span>Terms and Conditions</span> <span>Privacy Policy</span>
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
