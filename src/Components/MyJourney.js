import "../styles/index.css";

// Import Images
import accountantsImg from "../images/accountants.png";
// Web img is imported inline

const MyJourney = () => {
  return (
    <div className="my-journey">
      <h1>
        <span className="journey-started">How my journey started;</span>
        <span className="ups-downs">the ups and downs</span>
      </h1>
      <p className="profession">
        From an asset management specialist to a full stack web developer!
      </p>
      <div className="journey-one">
        <img
          src={accountantsImg}
          className="finance-img"
          width="20%"
          alt="Financial Management"
        />
        <p className="first-p">
          I don't hold a Computer Science or IT degree, rather I'm a Business
          Administration's (BBA) graduate with specialization in finance. My
          journey started in the world of technologies in 2016, when I first
          started learning some somputer science basics. I learned on youtube
          how to develop and design websites, which resulted in developing my
          first ever project the
          <em>second hand online shopping</em> website in 2017. Ever since,
          programming has become my passion and number one learning priority.
        </p>
      </div>
      <div className="journey-two">
        <img
          src={require("../images/webb.jpg")}
          className="programming-img"
          width="20%"
          alt="Web Delopment"
        />
        <p className="second-p">
          As a result, in early 2021 I started Computer Science at Kardan
          University. I completed the first semester, but immigrated to Europe.
          Later on, for supporting my web development and designing skills I
          have pursued some online courses from web development to web designing
          to web & mobile application development. The major part of my learning
          comes from Udemy courses. I learned full-stack development and have
          built various projects.
        </p>
      </div>

      <i className="know-more">Want to know more? --{">"}</i>
    </div>
  );
};

export default MyJourney;
