import secondHandMarketPhoto from "../images/second-hand-shopping.JPG";
import vehicleCardSysPhoto from "../images/vehicle-card.JPG";
import myPersonalWebPhoto from "../images/my-personal-website-img.JPG";
import partrytortenMunchenImg from "../images/partytorten-img.JPG";

const projectsData = [
  {
    comingSoon: false,
    heading: "Partrytorten München",
    url: "https://partytorten-munchen.vercel.app/",
    aboutProject:
      "Partrytorten München is pastry online ordering website. Where customers can place an order for their desired products.",
    frontEnd: ["Javascript", "React", "CSS", "React Icons"],
    backEnd: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    comingSoon: false,
    heading: "Second Hand Shopping",
    url: "https://second-hand-online-shopping.vercel.app/",
    aboutProject:
      "Second Hand Shopping Website lets the users sell or buy second hand objects.",
    frontEnd: ["Javascript", "React", "Tailwind CSS", "React Icons"],
    backEnd: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    comingSoon: true,
    heading: "Vehicles' Cards Printing System",
    url: "#",
    aboutProject: "A system for printing vehicle cards.",
    frontEnd: ["Javascript", "React", "CSS", "React Icons"],
    backEnd: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    comingSoon: false,
    heading: "My Personal Website",
    url: "#",
    aboutProject:
      "This is my personal website, where you can find out about my educational background, studies, work experience, projects and many more...",
    frontEnd: [
      "Javascript",
      "jQuery",
      "React",
      "SASS CSS",
      "Bootstrap 5",
      "React Icons",
    ],
    backEnd: ["JSON Server", "Restful API", "Firebase"],
  },
];

const MyWorkAndProjects = () => {
  return (
    <div className="my-work">
      <h1 className="my-work-title">My Work and Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 g-5">
        <MyProjectsCards
          pData={projectsData[0]}
          picture={partrytortenMunchenImg}
        />
        <MyProjectsCards
          pData={projectsData[1]}
          picture={secondHandMarketPhoto}
        />
        <MyProjectsCards
          pData={projectsData[2]}
          picture={vehicleCardSysPhoto}
        />
        <MyProjectsCards pData={projectsData[3]} picture={myPersonalWebPhoto} />
      </div>
    </div>
  );
};

export default MyWorkAndProjects;

function MyProjectsCards(props) {
  return (
    <a
      href={props.pData.url}
      target="_blank"
      rel="noreferrer"
      className="project-card-animation-url"
    >
      <div className="col project-card-animation">
        <h5 className="project-card-title card-title">{props.pData.heading}</h5>
        <div className="my-work-card-template card">
          {props.pData.comingSoon && (
            <div className="my-work-card-template-canvas">
              <p className="my-work-card-template-canvas-text">
                Coming soon...
              </p>
            </div>
          )}
          <div className="my-work-card-template-front">
            <img
              src={props.picture}
              className="my-work-img card-img-top"
              alt={props.pData.heading}
            />
            <div className="card-body">
              <p className="card-text">
                Hover for details, or click to open the project!
              </p>
            </div>
          </div>
          <div className="my-work-card-template-back">
            <p>{props.pData.aboutProject}</p>
            <p>The technologies I have used building this website are:</p>
            <div style={{ display: "flex" }}>
              <div className="tech-frontend">
                <h4>Fron End</h4>
                <ul>
                  {props.pData.frontEnd.map((t) => (
                    <li>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-frontend">
                <h4>Back End</h4>
                <ul>
                  {props.pData.backEnd.map((t) => (
                    <li>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
