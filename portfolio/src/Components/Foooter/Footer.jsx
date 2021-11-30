import React from "react";
import { Container } from "../../SharedStyles/SharedStyles";
import { FooterCont, A } from "./Styles";

const Footer = () => {
  return (
    <Container>
        <FooterCont>
      {/* <FooterLink> */}
        <A
          href="https://github.com/ajmalmiyan/portfolio"
          target="_blank" rel="noreferrer"
        >
          <strong>Source Code</strong>
        </A>
        </FooterCont>
      {/* </FooterLink> */}
    </Container>
  );
};

export default Footer;
