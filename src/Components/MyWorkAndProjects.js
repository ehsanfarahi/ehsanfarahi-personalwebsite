const projectsData = [
  {
    comingSoon: false,
    heading: "Partytorten München",
    url: "https://partytorten-munchen.vercel.app/",
    imageAddress: "images/partytorten-img.JPG",
    aboutProject:
      "Partytorten München is pastry online ordering website. Where customers can place an order for their desired products.",
    frontEnd: ["Javascript", "React", "CSS", "React Icons"],
    backEnd: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    comingSoon: false,
    heading: "Second Hand Shopping",
    url: "https://second-hand-online-shopping.vercel.app/",
    imageAddress: "images/second-hand-shopping.JPG",
    aboutProject:
      "Second Hand Shopping Website lets the users sell or buy second hand objects.",
    frontEnd: [
      "Javascript",
      "React",
      "Tailwind CSS",
      "React Icons",
      "Javascript",
      "React",
      "Tailwind CSS",
      "React Icons",
      "Javascript",
      "React",
      "Tailwind CSS",
      "React Icons",
    ],
    backEnd: ["Node.js", "Express.js", "MongoDB"],
  },

  {
    comingSoon: false,
    heading: "My Personal Website",
    url: "#",
    imageAddress: "images/my-personal-website-img.JPG",
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
  {
    comingSoon: true,
    heading: "Vehicles' Cards Printing System",
    url: "#",
    imageAddress: "images/vehicle-card.JPG",
    aboutProject: "A system for printing vehicle cards.",
    frontEnd: ["Javascript", "React", "CSS", "React Icons"],
    backEnd: ["Node.js", "Express.js", "MongoDB"],
  },
];

const MyWorkAndProjects = () => {
  return (
    <div className="my-work">
      <h1 className="my-work-title">My Work and Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 g-5  my-work-flex">
        {projectsData.map((card) => (
          <MyProjectsCards cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default MyWorkAndProjects;

function MyProjectsCards({ cardData }) {
  return (
    <a
      href={cardData.url}
      target="_blank"
      rel="noreferrer"
      className="project-card-animation-url"
    >
      <div className="col project-card-animation">
        <h5 className="project-card-title card-title">{cardData.heading}</h5>

        <div className="my-work-card-template card">
          {cardData.comingSoon && (
            <div className="my-work-card-template-canvas">
              <p className="my-work-card-template-canvas-text">
                Coming soon...
              </p>
            </div>
          )}
          <div className="my-work-card-template-front">
            <img
              src={cardData.imageAddress}
              className="my-work-img card-img-top"
              alt={cardData.heading}
            />
            <div className="card-body">
              <p className="card-text">
                Hover for details, or click to open the project!
              </p>
            </div>
          </div>
          <div className="my-work-card-template-back">
            <p className="projects-details">{cardData.aboutProject}</p>
            <p className="techs-used">
              Technologies used building this website;
            </p>
            <div className="techs-used-container">
              <div className="techs-frontend">
                <h4>Front End</h4>
                <div className="techs-frontend-list">
                  <ul>
                    {cardData.frontEnd.map((t) => (
                      <li>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="techs-backend">
                <h4>Back End</h4>
                <div className="techs-backend-list">
                  <ul>
                    {cardData.backEnd.map((t) => (
                      <li>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
