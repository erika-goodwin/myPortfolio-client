import React from "react";
import ProjectModal from "./ProjectModal";
import useWindowSize from "../../tool/useWindowSize";
import { useState } from "react";
import { useEffect } from "react";

export const ProjectPagePicture = ({ info, showModal }) => {
  const windowSize = useWindowSize();
  const [mobileImage, setMobileImage] = useState(
    "/projectlist-image/nodeblogapp-pic1.png"
  );

  useEffect(() => {
    // info !== undefined && setMobileImage(info.image[0].original);
    if (windowSize.width <= 768) {
      if (info === undefined) {
        return console.log("info undefined:", info);
      } else {
        console.log("info is not undefined", info.image[0].original);
        const mobileImage = info.image[0].original;
        setMobileImage(mobileImage);
        console.log("mobileImage data: ", mobileImage);
      }
    }
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
          <img src={mobileImage} alt="projectImage" />
        </div>
      )}
    </>
  );
};
