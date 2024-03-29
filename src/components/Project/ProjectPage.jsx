import React, { useEffect, useState } from "react";

import { ProjectPagePicture } from "./ProjectPagePicture";
import { ProjectPageProjectList } from "./ProjectPageProjectList";
import useWindowSize from "../../tool/useWindowSize";
import MobileProjectList from "./MobileProjectList";

import { ReactComponent as ReactLogo } from "../../image/loading.svg";
import Footer from "../setting/Footer";

export const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState("");

  const [showModal, setShowModal] = useState(false);
  const windowSize = useWindowSize();

  const [loading, setLoading] = useState(false);

  const showSelectedProject = (pickedId) => {
    setShowModal((pre) => !pre);

    const selectedProject = projectData.find(
      (project) => project._id === pickedId
    );
    setSelectedInfo(selectedProject);
  };

  const leaveSelectedProject = () => {
    setShowModal((pre) => !pre);
  };

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_SERVER_URL}/api/projects`)
      .then((res) => res.json())
      .then((res) => {
        setProjectData(res);
      })
      // .then((res) => dispatch(res))
      .catch((err) => console.log("err", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, [selectedInfo]);

  return (
    <>
      {loading && <ReactLogo className="project-con-loading-logo" />}

      {windowSize.width > 768 ? (
        <>
          <div className="project-con-left">
            {projectData && (
              <ProjectPagePicture info={selectedInfo} showModal={showModal} />
            )}
          </div>
          <div className="project-con-right">
            <div className="project-con-right-list">
              {projectData.map((project) => {
                return (
                  <ProjectPageProjectList
                    key={project._id}
                    project={project}
                    onHover={showSelectedProject}
                    onLeave={leaveSelectedProject}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          {projectData.map((project) => {
            return (
              <MobileProjectList
                key={project._id}
                data={project}
                info={selectedInfo}
                // showModal={showModal}
                // onHover={showSelectedProject}
                // onLeave={leaveSelectedProject}
              />
            );
          })}
        </>
      )}
      <Footer />
    </>
  );
};
