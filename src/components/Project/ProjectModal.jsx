import React from "react";


const ProjectModal = ({ project, setShowModal }) => {
  const tag = project.LangTag;

  return (

    <div className="project-con-left-comp-modal ">
      <h2>{project.title}</h2>
      <h4>{project.summary}</h4>
      <div className="project-con-left-comp-modal-tag ">
        <ul>
          {tag?.map((tag, index) => (
            <li key={index}>
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="project-con-left-comp-modal-deslink-con">
        <p className="project-con-left-comp-modal-deslink-con-description ">
          {project.description}
        </p>

      </div>
    </div>
  );
};

export default ProjectModal;
