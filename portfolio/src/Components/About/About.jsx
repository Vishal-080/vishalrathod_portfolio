import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/vishalrathod01/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/Vishal-080",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://twitter.com/Vishal_Rathod01",
    icon: <FaTwitter />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <br />
      <AboutDiv>
        <Column>
          <Img src="/images/vishalT.webp" alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              A dedicated Front-End Web Developer with a specialized skill set
              that enables me to build robust web applications. I am adept in
              front-end frameworks &amp; tools and have an eye for performance and pixel perfect
              accuracy.
            </AboutInfoP>
            <AboutInfoP>
              I am adaptable, proficient in using different OS like Linux, Windows and Mac also experienced in remote collaboration, and committed
              to achieving organizational goals. With a knack for
              problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
      <br />
    </Container>
  );
};

export default About;
