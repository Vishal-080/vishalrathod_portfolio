import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
  const projects = [
    // {
    //   id: 0,
    //   project_name: "MaskIt Store",
    //   image: "/project_images/maskit.png",
    //   project_desc:
    //     "MaskIt Store is an E-commerce web app that allows users to search, buy and review masks.",
    //   deploy_link: "https://maskit.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/maskit-store",
    //   tech_stack: [
    //     <FaReact />,
    //     <FaNodeJs />,
    //     <SiMongodb />,
    //     <SiRedux />,
    //     <FaJs />,
    //     <FaCss3 />,
    //   ],
    // },
    // {
    //   id: 1,
    //   project_name: "Indeed Clone",
    //   image: "/project_images/indeed.png",
    //   project_desc:
    //     "Indeed is a web app that allows users to search jobs, apply jobs and add reviews about employers.",
    //   deploy_link: "https://indeed.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/indeed-clone",
    //   tech_stack: [<FaReact />, <SiRedux />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    // {
    //   id: 2,
    //   project_name: "Netflix Clone",
    //   image: "/project_images/netflix.png",
    //   project_desc:
    //     "An OTT platform that allows users to watch a wide variety of shows and movies. This is a personal project.",
    //   deploy_link: "https://netflix-psi-murex.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/netflix",
    //   tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    // {
    //   id: 3,
    //   project_name: "Paytm Bus Clone",
    //   image: "/project_images/paytmbus.png",
    //   project_desc:
    //     "A clone of Paytm Bus Web Application which is an online Bus Ticket Booking platform.",
    //   deploy_link: "https://paytmbus.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/paytm-bus",
    //   tech_stack: [
    //     <FaReact />,
    //     <FaNodeJs />,
    //     <SiMongodb />,
    //     <SiRedux />,
    //     <FaJs />,
    //     <FaCss3 />,
    //   ],
    // },
    // {
    //   id: 4,
    //   project_name: "LFC Store",
    //   image: "/project_images/lfcstore.png",
    //   project_desc:
    //     "Liverpool FC Merchandise Shopping Cart. Built using React JS, SCSS and Context API",
    //   deploy_link: "https://lfcstore.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/lfcstore",
    //   tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    {
      id: 5,
      project_name: "Bluemercury Clone",
      // image: "/project_images/calendly.png",
      project_desc:
        "Bluemercury is an US based Cosmetics store.",
      // deploy_link: "https://calendly-clone-nu.vercel.app/",
      repo_link: "https://github.com/Vishal-080/Bluemercury",
      tech_stack: [<FaJs />, <FaHtml5 />, <FaCss3 />],
    }
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "25px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
