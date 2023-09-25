import "../styles/index.css";

// Import Images
import auafImg from "../images/auaf.png";
import udemyImg from "../images/udemy.png";
// Kardan image is imported inline

const EducationalBackground = () => {
  return (
    <div className="educational-background">
      <h1 className="edu-back-title">My Educational Background</h1>
      <div className="edu-quotation">
        <span style={{ color: "#ffb72b", fontSize: "5rem" }}>“</span>
        <h3>
          <span style={{ display: "block" }}>What we know matters,</span>
          <span style={{ display: "block" }}>
            but who we are matters more.”
          </span>
        </h3>
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
                I have pursued some Professional Development Programs at AUAF
                for self development.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">2011 - 2012</small>
            </div>
          </div>
        </div>
        <div className="col">
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
        </div>
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
                I have studied Business Administration (BBA) with specialization
                in finance.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">2013 - 2018</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalBackground;