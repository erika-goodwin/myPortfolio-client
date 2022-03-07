import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export const Project = () => {
  return (
    <>
      <div className="project-con">
        <Outlet />

      </div>
    </>
  );
};
