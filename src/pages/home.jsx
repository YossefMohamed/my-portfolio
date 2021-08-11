import React from "react";
import styled from "styled-components";
import About from "../components/about";
import Contact from "../components/contact";
import Experiance from "../components/experiance";
import Projects from "../components/projects";
import Skills from "../components/skills";

function Home(props) {
  return (
    <HomeContainer>
      <About />
      <Experiance />
      <Skills />
      <Projects />
      <Contact />
    </HomeContainer>
  );
}
const HomeContainer = styled.div``;
export default Home;
