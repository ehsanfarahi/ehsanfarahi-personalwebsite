import "../styles/index.css";

import secondHandMarketPhoto from "../images/second-hand-shopping.JPG";
import AssetMgtSysPhoto from "../images/asset-management-system.jpg";
import vehicleCardSysPhoto from "../images/vehicle-card.JPG";
import myPersonalWebPhoto from "../images/personal-website.JPG";

const MyWorkAndProjects = () => {
  return (
    <div className="my-work">
      <h1 className="my-work-title">My Work and Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 g-5">
        <div className="col">
          <h5 className="project-card-title card-title">
            Second Hand Shopping
          </h5>
          <div className="my-work-card-template card">
            <div className="my-work-card-template-canvas">
              <p className="my-work-card-template-canvas-text">
                Coming soon...
              </p>
            </div>
            <img
              src={secondHandMarketPhoto}
              className="my-work-img card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            {/* <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <h5 className="project-card-title card-title">
            Asset Management System
          </h5>
          <div className="my-work-card-template card">
            <div className="my-work-card-template-canvas">
              <p className="my-work-card-template-canvas-text">
                Coming soon...
              </p>
            </div>
            <img
              src={AssetMgtSysPhoto}
              className="my-work-img card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <h5 className="project-card-title card-title">
            Vehicles' Cards Printing System
          </h5>
          <div className="my-work-card-template card">
            <div className="my-work-card-template-canvas">
              <p className="my-work-card-template-canvas-text">
                Coming soon...
              </p>
            </div>
            <img
              src={vehicleCardSysPhoto}
              className="my-work-img card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a big longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <h5 className="project-card-title card-title">My Personal Website</h5>
          <div className="my-work-card-template card">
            <img
              src={myPersonalWebPhoto}
              className="my-work-img card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                This is my personal website, where you can find out about my
                educational background, studies, work experience, projects and
                many more...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorkAndProjects;
