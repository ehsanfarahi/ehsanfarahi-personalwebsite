// React Icons
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const logos = [
  { id: 1, title: "HTML 5", logo: "html-logo.png", alt: "html-logo" },
  { id: 2, title: "CSS", logo: "css-logo.png", alt: "css-logo" },
  { id: 3, title: "Tailwind CSS", logo: "tailwind-logo.png", alt: "tailwind" },
  { id: 4, title: "SASS", logo: "sass-logo.png", alt: "sass-logo" },
  { id: 5, title: "Bootstrap", logo: "bootstrap-logo.png", alt: "botstrap" },
  { id: 6, title: "Figma", logo: "figma-logo.png", alt: "figma-logo" },
  { id: 7, title: "JavaScript", logo: "js-logo.png", alt: "js-logo" },
  { id: 8, title: "TypeScript", logo: "ts-logo.png", alt: "ts-logo" },
  { id: 9, title: "jQuery", logo: "jquery-logo.png", alt: "jquery-logo" },
  { id: 10, title: "React", logo: "react-logo.png", alt: "react-logo" },
  { id: 11, title: "Next.js", logo: "nextjs-logo.png", alt: "nextjs" },
  { id: 12, title: "Node.js", logo: "node-logo.png", alt: "nodejs-logo" },
  { id: 13, title: "Express", logo: "express-logo.png", alt: "express" },
  { id: 14, title: "MongoDB", logo: "mongodb-logo.png", alt: "mongodb" },
  { id: 15, title: "MySQL", logo: "mysql-logo.png", alt: "mysql-logo" },
  { id: 16, title: "PHP", logo: "php-logo.png", alt: "php-logo" },
];
const GeneralInfo = () => {
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".card-carousel");
  const cards = document.querySelectorAll(".card-box");
  const btn = document.querySelectorAll("button");
  const previous = document.querySelector("#prev");
  const nxt = document.querySelector("#next");

  cards.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  let counter = 0;

  const slideCard = () => {
    cards.forEach((e) => {
      e.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  const prev = () => {
    if (counter > 0) {
      counter--;
      slideCard();
    }
  };

  const next = () => {
    if (counter <= cards.length - 6) {
      counter++;
      slideCard();
    }
  };

  return (
    <div className="general-info">
      <h1 className="general-info-heading">About Programming World</h1>
      <p className="general-info-heading2">
        For me, programming is what makes me feel proud.
      </p>
      <h3 className="my-expertise-heading">My Expertise</h3>
      <div className="row row-cols-1 justify-content-center row-cols-lg-6 row-cols-md-3 g-4">
        <div className="col">
          <div className="my-expertise-card card">
            <img
              src={require("../images/full-stack.jpg")}
              className="my-expertise-image card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="my-expertise-title card-title">
                Full Stack Development
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  style={{ paddingLeft: "10px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="my-expertise-card card">
            <img
              src={require("../images/web-app.png")}
              className="my-expertise-image card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="my-expertise-title card-title">
                Web Applications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  style={{ paddingLeft: "10px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="my-expertise-card card">
            <img
              src={require("../images/mobile-app.jpg")}
              className="my-expertise-image card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="my-expertise-title card-title">
                Mobile Applications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  style={{ paddingLeft: "10px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h3 className="my-skills-title">My Skills</h3>

      <div className="my-skills-card-container my-skills-laptop">
        <div>
          <button className="active" id="prev" onClick={prev}>
            <FaArrowLeft className="slide-btn" />
          </button>
        </div>
        <div className="card-container">
          <div className="card-carousel">
            {logos.map((logo) => {
              return (
                <div className="col card-box">
                  <div className="card">
                    <h5 className="card-title">{logo.title}</h5>
                    <img
                      src={require(`../images/${logo.logo}`)}
                      className="card-img-top"
                      alt={logo.alt}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button className="active" id="next" onClick={next}>
            <FaArrowRight className="slide-btn" />
          </button>
        </div>
      </div>
      <div className="my-skills-mobile">
        {logos.map((logo) => {
          return (
            <span>
              <img
                src={require(`./../images/${logo.logo}`)}
                alt={`${logo.alt}`}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralInfo;
