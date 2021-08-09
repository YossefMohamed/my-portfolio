import React from "react";
import styled from "styled-components";
import sizes from "../util/sizes";
import colors from "./../util/colors";
function About() {
  return (
    <ScreenDiv>
      <div>
        <Hello>
          Hi, I'm <span>Yossef Mohamed</span> 👋
        </Hello>
        <Brief>
          I'm MERN stack Deveoloper
          <br /> I'm Building webapps, brands, and experience...
        </Brief>
        <Hello>
          I Love Working With Modern Technologies, Building Awesome Projects. I
          Prefer Write Your Functionality Requirements..
        </Hello>
        <Button>Download my resume</Button>
      </div>
    </ScreenDiv>
  );
}

const ScreenDiv = styled.div`
  min-height: 70vh;
  background-color: ${colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Hello = styled.div`
  font-size: ${sizes.medium};
  span {
    color: ${colors.secondary};
    font-weight: bold;
  }
`;
const Brief = styled.div`
  font-size: ${sizes.huge};
  font-weight: bolder;
  margin: 1rem 0 0.5rem;
  color: black;
`;
export const Button = styled.button`
  color: ${colors.light};
  border: 0;
  outline: 0;
  margin-top: 2rem;
  font-size: ${sizes.medium};
  /* border-radius: 5px; */
  padding: 0.5rem 1rem;
  border: 2px solid ${colors.secondary};
  background-color: ${colors.secondary};
  box-shadow: 6px 6px ${colors.main};
  &:hover {
    color: ${colors.secondary};

    background-color: ${colors.light};
  }
`;
export default About;
