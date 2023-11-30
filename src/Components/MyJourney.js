import "../styles/index.css";
import { useRef } from "react";

// Import Images
import accountantsImg from "../images/accountants.png";
// Web img is imported inline

const MyJourney = () => {
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

  return (
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
        <p ref={refP1} className="first-p">
          I don't hold a Computer Science or IT degree, rather I'm a Business
          Administration's (BBA) graduate with specialization in finance. My
          journey, to the world of technologies, started in 2016, when I first
          started learning some somputer science basics. I learned on youtube,
          how to design and develop websites, which resulted in developing my
          first ever project the <em>second hand online shopping</em> website in
          2017. Since then, programming and web development have become my
          passion and number one learning priority. So far, I have built varies
          website. Scroll down to know more about my work and projects.
        </p>
      </div>
      <div className="journey-two">
        <img
          src={require("../images/webb.jpg")}
          className="programming-img"
          width="20%"
          alt="Web Delopment"
        />
        <p ref={refP2} className="second-p">
          In continuation, to further enhance my skills & knowledge of
          programming, and to learn web development in a professional manner, I
          started Computer Science at Kardan University in early 2021. I
          completed the first semester, however after starting the second
          semester, I immigrated to Europe. Later on, as a substitute to the
          University, for supporting my programming and web development skills,
          I pursued some online courses from web development to web designing to
          web & mobile application development. The major part of my learning
          comes from Udemy courses. I have learned front end development and
          have built various projects.
        </p>
      </div>

      <i className="know-more">
        <p>Want to know more?</p> <span>&rarr;</span>
      </i>
    </div>
  );
};

export default MyJourney;
