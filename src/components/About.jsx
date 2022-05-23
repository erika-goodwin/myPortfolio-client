import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoSass } from "react-icons/io";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import topPic from "../image/top-me-pic.jpg";
import useWindowSize from "../tool/useWindowSize";
import Footer from "./setting/Footer";

export const About = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <div className="about-con">
        <div className="about-con-bg">
          <div className="about-con-top ">
            {windowSize.width < 768 && <h1>Erika Hashizume</h1>}
            <div className="about-con-top-resume ">
              <ul className="about-con-top-resume-linkCont ">
                <li>
                  <a
                    href="https://www.linkedin.com/in/erika-hashizume/"
                    target="_blank"
                    rel="noreferrer"
                    alt="linkdin"
                  >
                    <BsLinkedin className="sns-icon linkdin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/erika-goodwin"
                    target="_blank"
                    rel="noreferrer"
                    alt="GitHub"
                  >
                    <BsGithub className="sns-icon github" />
                  </a>
                </li>
              </ul>
              <div className="about-con-top-resume-resumelink">
                <a
                  href="/resumePdf/ErikaHashizume.pdf"
                  target="_blank"
                  // rel="noreferrer"
                  alt="resume"
                  className="btn-resume btn"
                  download
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="about-con-below ">
            <div className="about-con-below-pic ">
              <div className="about-con-below-pic-absolute ">
                <div className="about-con-below-pic-absolute-picCont ">
                  <h2>
                    Erika <br /> Hashizume
                  </h2>
                  <img src={topPic} alt="erika-pic" className="" />
                  <div className="glow-wrap ">
                    <i className="glow"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-con-below-des">
              <div className="about-con-below-des-summary ">
                <h4>
                  I am a full-stack web developer with experience in HTML / CSS
                  and Javascript.
                </h4>

                <p>
                  In my previous job as an airline mechanical engineer, I used a
                  variety of outdated web applications that looked like they
                  were made decades ago. Even comparatively newer web
                  applications used for creating formal documents were marginal
                  at best. I always wished that I could improve it. I found it
                  exciting thinking of ways I could utilize web development in
                  combination with my mechanical engineering knowledge. That was
                  the first step towards the coding world.
                  <br />
                  Since I started coding at my current school, I have been able
                  to learn and significantly grow my skill set. Lately, I am
                  picking up my confidence in myself including skills dealing
                  with errors, coding, and learning new things that I have never
                  tried before on my own. I am always passionate about achieving
                  small steps every day, month, and year following my passion
                  and plan. From easy things to difficult things, it doesn't
                  matter, I like the feeling of accomplishment and moving
                  forward. My current career goal is to work in Canada, build my
                  web developer career with on-site learning and improve my
                  knowledge. I'm now seeking a full-time role where I can
                  contribute my skills and knowledge to help a company.
                  <br />
                  PS: Personal 2022 goal I am working on is to become a
                  rollerskate who flies under the sky like figure skaters. I
                  practice many tricks a few times a week, and I am preparing
                  for the moment to take off! My rollerskating journey IG ▷{" "}
                  <a href="https://www.instagram.com/erika.on.wheels/">
                    @erika.on.wheels
                  </a>
                </p>
              </div>
              <div className="about-con-below-des-skill">
                <h3>Technical Skill</h3>
                <div className="about-con-below-des-skill-con">
                  <div className="about-con-below-des-skill-con-con1 ">
                    <div className="skill-logo">
                      <h4>Languages</h4>
                      <div className="gridbox">
                        <div className="gridbox-item ">
                          <ImHtmlFive className="logo ImHtmlFive" />
                          <p>HTML5</p>
                        </div>
                        <div className="gridbox-item ">
                          <ImCss3 className="logo ImCss3" />
                          <p>CSS</p>
                        </div>
                        <div className="gridbox-item ">
                          <SiJavascript className="logo SiJavascript" />
                          <p>JavaScript</p>
                        </div>
                        <div className="gridbox-item">
                          <SiReact className="logo SiReact" />
                          <p>React.js</p>
                        </div>
                        <div className="gridbox-item">
                          <FaNodeJs className="logo FaNodeJs" />
                          <p>Node.js</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-con-below-des-skill-con-con2">
                    <div className="skill-logo">
                      <h4>Frameworks / Libraries</h4>
                      <div className="logoflexbox gridbox">
                        <div className="gridbox-item ">
                          <IoLogoSass className="logo IoLogoSass" />
                          <p>HTML5</p>
                        </div>
                        <div className="gridbox-item">
                          <SiTailwindcss className="logo SiTailwindcss" />
                          <p>CSS</p>
                        </div>
                        <div className="gridbox-item">
                          <SiBootstrap className="logo SiBootstrap" />
                          <p>JavaScript</p>
                        </div>
                        <div className="gridbox-item">
                          <SiRedux className="logo SiRedux" />
                          <p>React.js</p>
                        </div>
                        <div className="gridbox-item">
                          <SiExpress className="logo SiExpress" />
                          <p>Node.js</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-con-below-des-education ">
                <h3>Education/Experience</h3>
                <div className="about-con-below-des-education-con">
                  <div className="grid">
                    <p className="item1">2021-Now</p>
                    <h5 className="item2">
                      Web and Mobile Application Development Diploma
                    </h5>
                    <p className="item3">
                      - Cornerstone International Community College, Vancouver,
                      BC
                    </p>
                    <p className="item4">2017-2021</p>
                    <h5 className="item5">Airplane Mechanical Engineer</h5>
                    <p className="item6">- AIRDO Co., Ltd. ,Japan</p>
                    <p className="item7">2013-2017</p>
                    <h5 className="item8">
                      Bachelor’s degree in Aerospace Engineering
                    </h5>
                    <p className="item9">
                      - Muroran Institute of Technology, Japan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
