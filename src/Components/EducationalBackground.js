// import "../styles/index.css";

// Import Images
import { useEffect } from "react";
import auafImg from "../images/auaf.png";

// React Icons
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const EducationalBackground = () => {
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const topDistance = document
        .querySelector(".edu-content")
        .getBoundingClientRect();
  
      if (window.scrollY > topDistance.top * 3) {
        document.querySelector(".edu-content").classList.add("edu-content-anim");
      }
    });
  }, [])

  return (
    <div className="educational-background">
      <h1 className="edu-back-title">My Educational Background</h1>
      <div className="edu-quotation">
        <span style={{ color: "#ffb72b", fontSize: "2.8rem" }}>
          <BiSolidQuoteAltLeft />
        </span>
        <h4>
          <span style={{ display: "block" }}>What we know matters,</span>
          <span style={{ display: "block" }}>
            but who we are matters more.
            <BiSolidQuoteAltRight />
          </span>
        </h4>
        <br />
        <hr
          style={{
            border: "3px solid #ffb72b",
            width: "80px",
            margin: "0 auto",
          }}
        />

        <p style={{ textTransform: "uppercase" }}>Brene Brown</p>
      </div>

      <div className="edu-content row row-cols-1 row-cols-lg-6 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={auafImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Professional Development Programs</h5>
              <p className="card-text">
                Professional Development Programs at AUAF
                for self development.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">2011 - 2012</small>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card h-100">
            <img src={udemyImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Web Designing and Development</h5>
              <p className="card-text">
                I have studied many Web Designing and Development courses on
                Udemy.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">2018 - 2022</small>
            </div>
          </div>
        </div> */}
        <div className="col">
          <div className="card h-100">
            <img
              src={require("../images/kardan.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Bachelor of Business Administration
              </h5>
              <p className="card-text">
                Bachelor of Business Administration (BBA) degree with specialization
                in finance.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">2013 - 2018</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={require("../images/kardan.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Bachelor of Computer Science</h5>
              <p className="card-text">
                I studied two semesters of Computer Science (BCS) before I
                migrated and continued my studies online.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">2021 - 2021</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalBackground;
