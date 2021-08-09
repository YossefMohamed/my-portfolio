import React from "react";
import styled from "styled-components";
import About from "./components/about";
import Nav from "./components/nav";
import "./app.css";
import "./app.css";
import Experiance from "./components/experiance";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App(props) {
  React.useEffect(() => {
    // console.log(props);
    window.scrollTo(0, 0);
  }, [props.match]);

  return (
    <Container>
      <Nav />
      <About />
      <Experiance />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  padding: 0rem 9rem;
  @media (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;
export default App;
