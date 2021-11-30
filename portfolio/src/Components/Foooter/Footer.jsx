import React from "react";
import { Container } from "../../SharedStyles/SharedStyles";
import { FooterCont, A } from "./Styles";

const Footer = () => {
  return (
    <Container>
        <FooterCont>
      {/* <FooterLink> */}
        <A
          href="https://github.com/Vishal-080/vishalrathod_portfolio"
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
