// import "../styles/index.css";

const logos = [
  { id: 1, logo: "html-logo.png", alt: "html-logo" },
  { id: 2, logo: "css-logo.png", alt: "css-logo" },
  { id: 3, logo: "tailwind-logo.png", alt: "tailwind" },
  { id: 4, logo: "sass-logo.png", alt: "sass-logo" },
  { id: 5, logo: "bootstrap-logo.png", alt: "botstrap" },
  { id: 6, logo: "figma-logo.png", alt: "figma-logo" },
  { id: 7, logo: "js-logo.png", alt: "js-logo" },
  { id: 8, logo: "ts-logo.png", alt: "ts-logo" },
  { id: 9, logo: "jquery-logo.png", alt: "jquery-logo" },
  { id: 10, logo: "react-logo.png", alt: "react-logo" },
  { id: 11, logo: "nextjs-logo.png", alt: "nextjs" },
  { id: 12, logo: "node-logo.png", alt: "nodejs-logo" },
  { id: 13, logo: "express-logo.png", alt: "express" },
  { id: 14, logo: "mongodb-logo.png", alt: "mongodb" },
  { id: 15, logo: "mysql-logo.png", alt: "mysql-logo" },
  { id: 16, logo: "php-logo.png", alt: "php-logo" },
];
const GeneralInfo = () => {
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

      <div className="row row-cols-2 justify-content-left row-cols-lg-6 row-cols-md-4 row-cols-sm-2 g-4 my-skills-laptop">
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
            <h5 className="card-title">Javascript</h5>
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
