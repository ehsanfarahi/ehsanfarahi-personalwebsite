import "../styles/index.css";

const GeneralInfo = () => {
  return (
    <div className="general-info">
      <h1>About Programming World</h1>
      <p>For me, programming is what makes me feel proud.</p>
      <h3>My Expertise</h3>
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

      <div className="row row-cols-2 justify-content-left row-cols-lg-6 row-cols-md-4 row-cols-sm-2 g-4">
        <div className="col">
          <div className="card">
            <h5 className="card-title">HTML 5</h5>
            <img
              src={require("../images/html.png")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-title">Modern Javascript</h5>
            <img
              src={require("../images/css.png")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-title">CSS 5</h5>
            <img
              src={require("../images/js.png")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-title">jQuery</h5>
            <img
              src={require("../images/jquery.png")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-title">React.js</h5>
            <img
              src={require("../images/react.png")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-title">Node.js</h5>
            <img
              src={require("../images/nodejs.png")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-title">Express.js</h5>
            <img
              src={require("../images/expressjs.png")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
