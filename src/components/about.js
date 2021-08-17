import React from "react";
import styled from "styled-components";
import sizes from "../util/sizes";
import colors from "./../util/colors";
import axios from "axios";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, InView] = useInView({
    threshold: 0,
  });

  return (
    <ScreenDiv
      ref={ref}
      id="about"
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -1000, opacity: 0 }}
      transition={{ type: "spring", stiffness: 10000000 }}
    >
      <div>
        <Hello>
          Hi, I'm <span>Yossef Mohamed</span> 👋
        </Hello>
        <Brief>
          I'm a Software Engineer
          <br /> I'm Building webapps, brands, and experience...
        </Brief>
        <Hello>
          I Love Working With Modern Technologies, Building Awesome Projects.
          Projects which will make the world a Better Place..
        </Hello>
        <Button onClick={(e) => axios.get("/resume")}>
          Download my resume
        </Button>
      </div>
    </ScreenDiv>
  );
}

const ScreenDiv = styled(motion.div)`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem 2rem;
  @media (max-width: 750px) {
    padding: 3rem 1rem 2rem;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Hello = styled.div`
  font-size: ${sizes.medium};
  @media (max-width: 868px) {
    font-size: calc(${sizes.medium} + -5px);
  }
  span {
    color: ${colors.secondary};
    font-size: calc(${sizes.medium} + 5px);
    @media (max-width: 868px) {
      font-size: calc(${sizes.medium} + 0px);
    }
    font-weight: bold;
  }
`;
const Brief = styled.div`
  font-size: ${sizes.huge};
  font-weight: bolder;
  margin: 1rem 0 0.5rem;
  color: black;
  @media (max-width: 868px) {
    font-size: calc(${sizes.huge} + -8px);
  }
`;
export const Button = styled.button`
  color: ${colors.light};
  border: 0;
  outline: 0;
  margin-top: 2rem;
  font-size: ${sizes.medium};
  /* border-radius: 5px; */
  padding: 0.5rem 1rem;
  border: 3px solid ${colors.main};
  background-color: ${colors.secondary};
  box-shadow: 10px 10px ${colors.main};
  &:hover {
    color: ${colors.secondary};
    border: 3px solid ${colors.secondary};

    background-color: ${colors.light};
  }
`;
export default About;
