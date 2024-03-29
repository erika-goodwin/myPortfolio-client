import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import topPic from "../image/top-me-pic.jpg";
import { Link } from "react-router-dom";
import Footer from "./setting/Footer";

export const TopPage = () => {
  return (
    <>
      <div className="top-con">
        <div className="top-con-left">
          <div className="top-con-left-location">
            <MdOutlineLocationOn className="icon" />
            <h5 className="">Vancouver, BC</h5>
          </div>
          <div className="top-con-left-me ">
            <div className="top-con-left-me-active">
              <h1>Hi, I'm Erika </h1>
              <h2> &#60; Actively seeking employment &#62; </h2>
            </div>
            <h5>
              Frontend web developer with experience in HTML/CSS and
              Javascript, currently in the process of completing my diploma.
              <br />
              <br /> My previous experience as an Airline engineer allowed me to
              gain troubleshooting and problem-solving skills to identify
              defects and improve reliability. I am motivated to continue
              learning and applying these skills working as part of a Frontend
              web developer team.
            </h5>
          </div>
          <div className="top-con-left-btn">
            <Link to="/project">
              <button className="btn btn-top">Project </button>
            </Link>

            <Link to="/about">
              <button className="btn btn-top">About me </button>
            </Link>
          </div>
        </div>

        <div className="top-con-right ">
          <div className="top-con-right-pic">
            <img src={topPic} alt="erika-pic"></img>
          </div>
        </div>

        <div className="top-con-attr">
          <a href="https://lovepik.com/images/png-botanical-lace.html">
            Botanical Lace Png vectors by Lovepik.com
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
};
