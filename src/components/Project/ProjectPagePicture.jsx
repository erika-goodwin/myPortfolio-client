import React from "react";
import ProjectModal from "./ProjectModal";
import useWindowSize from "../../tool/useWindowSize";
import { useState } from "react";
import { useEffect } from "react";

export const ProjectPagePicture = ({ info, showModal }) => {
  const windowSize = useWindowSize();
  const [mobileImage, setMobileImage] = useState('/projectlist-image/nodeblogapp-pic1.png')

  useEffect(() => {
    setMobileImage(info.image[0].original);
  }, [info]);

  return (
    <>
      {windowSize.width > 768 ? (
        <div className="project-con-left-comp">
          {showModal ? (
            <img src={info.image[0].original} alt="projectImage" />
          ) : (
            <img
              src="/projectlist-image/nodeblogapp-pic1.png"
              alt="projectImage"
            />
          )}
          {showModal && <ProjectModal project={info} />}
        </div>
      ) : (
        <div className="mobile-project-con-pic">
          <img
            src={mobileImage}
            alt="projectImage"
          />
        </div>
      )}
    </>
  );
};
