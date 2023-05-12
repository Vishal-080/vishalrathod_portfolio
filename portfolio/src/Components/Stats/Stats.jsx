import React from "react";
import {
  StatsContCont,
  StatsCont,
  StatsContDiv,
  StatsContH1,
  StatsContH3,
  LastStat,
} from "./Styles";
import { Container,H1 } from "../../SharedStyles/SharedStyles";
const Stats = () => {
  return (
    <Container>
      <StatsContCont>
        <StatsCont>
          <StatsContDiv>
            <StatsContH1>1200+</StatsContH1>
            <StatsContH3>Hours of coding</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>600+</StatsContH1>
            <StatsContH3>Git Commits</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>6+</StatsContH1>
            <StatsContH3>Projects</StatsContH3>
          </StatsContDiv>
          <LastStat>
            <StatsContH1>100+</StatsContH1>
            <StatsContH3>Hours of Soft Skill</StatsContH3>
          </LastStat>
        </StatsCont>
      </StatsContCont>
      <br />
      {/* 
      <h1 style={{textAlign:"center"}}>Github Stats</h1>
      <StatsContH1 style={{textAlign:"center", color:"#495057", fontFamily:"Inter, sans-serif"}}>Github Stats</StatsContH1> */}
      
      <br />
      <br />
      <br />
      <H1 style={{textAlign:"center"}}>Github Stats</H1>
      <br />
      <img src="https://ghchart.rshah.org/495057/Vishal-080" alt="Vishal-080's Github chart" 
        style={{ width: "80%", display: "block", margin: "auto" }}/>
      {/* <img
        src="https://ghchart.rshah.org/021F34/Vishal-080"
        alt="fdsdf"
        style={{ width: "80%", display: "block", margin: "auto" }}
      /> */}
    </Container>
  );
};
export default Stats;
