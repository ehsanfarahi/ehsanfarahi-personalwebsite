// import "../styles/index.css";
import { useRef } from "react";

// Import Images
import accountantsImg from "../images/accountants.png";
// Web img is imported inline

// Import Compunents
import MyCv from "./MyCv";

const MyJourney = ({ displayMyCv, setDisplayMyCv }) => {
  // const [displayMyCv, setDisplayMyCv] = useState(false);

  // Refs
  const refP1 = useRef(1);
  const refP2 = useRef(1);

  window.addEventListener("scroll", () => {
    if (window.scrollY > refP1.current.offsetTop * 2) {
      document.querySelector(".journey-one").classList.add("journey-one-anim");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > refP2.current.offsetTop * 2) {
      document.querySelector(".journey-two").classList.add("journey-two-anim");
    }
  });

  // Functions
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function openMyCv() {
    scrollToTop();
    setDisplayMyCv(true);
  }

  return (
    <>
      <div className="my-journey">
        <h1>
          <span className="journey-started">How my journey started;</span>
          <span className="ups-downs">the ups and downs</span>
        </h1>
        <p className="profession">
          From an asset management specialist to a front end web developer!
        </p>
        <div className="journey-one">
          <img
            src={accountantsImg}
            className="finance-img"
            width="20%"
            alt="Financial Management"
          />
          {/* <p ref={refP1} className="first-p">
            I don't hold a Computer Science or IT degree, rather I'm a Business
            Administration's (BBA) graduate with specialization in finance. My
            journey to the world of technologies started in 2016, when I first
            started learning some somputer science basics. I learned on youtube,
            how to design and develop websites, which resulted in developing my
            first ever project the <em>second hand online shopping</em> website
            in 2017. Since then, programming and web development have become my
            passion and number one learning priority. So far, I have built
            various websites. Scroll down to know more about my work and
            projects.
          </p> */}
          <p ref={refP1} className="first-p">
          My journey into the world of technology began in 2016 when I started learning computer science basics. Through YouTube, I taught myself how to design and develop websites, culminating in my first project, a second-hand online shopping website, in 2017. Since then, programming and web development have become my passion and top learning priority. I have built various websites and continue to expand my skills. Please scroll down to learn more about my work and projects.
          </p>
        </div>
        <div className="journey-two">
          <img
            src={require("../images/webb.jpg")}
            className="programming-img"
            width="20%"
            alt="Web Delopment"
          />
          {/* <p ref={refP2} className="second-p">
            In continuation, I started Computer Science at Kardan University in
            early 2021 to further enhance my skills & knowledge of programming,
            and to learn web development in a professional manner. I completed
            the first semester, however, after I started the second semester, I
            immigrated to Europe. Later on, I pursued some online courses from
            web development to web designing to web & mobile application
            development as a substitute to the University degree for supporting
            my programming and web development skills. The major part of my
            learning comes from the Udemy courses.
          </p> */}
          <p ref={refP2} className="second-p">
          To further enhance my programming skills, I began studying Computer Science at Kardan University in early 2021. After completing the first semester, I immigrated to Europe and continued my education through various online courses. These courses covered topics from web development and design to web and mobile application development. These courses, primarily from Udemy, served as a valuable substitute for a university degree, significantly advancing my programming and web development skills.
          </p>
        </div>

        <i className="know-more">
          <p onClick={openMyCv}>Want to know more?</p> <span>&rarr;</span>
        </i>
      </div>
      {displayMyCv && <MyCv />}
    </>
  );
};

export default MyJourney;
