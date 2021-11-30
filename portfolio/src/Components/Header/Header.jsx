import React from "react";
import { HeaderContent, H1, P, A, HeaderButtons } from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <Container className="home">
      <HeaderContent>
        <div>
          <H1>Hi 👋 I'm Vishal Rathod</H1>
          <P>
            An enthusiastic Full Stack Web Developer with a strong set of
            technical as well as non-technical skills and a dedication towards
            creating useful and interactive web applications.
          </P>
          <HeaderButtons>
            <A target="_blank" rel="noreferrer"  href="/resume/Vishal_resume.pdf" >Resume</A>
            &nbsp;&nbsp;&nbsp;
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={300}
          >
            <A>Projects</A>
            </Link>
          </HeaderButtons>
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Banner;
