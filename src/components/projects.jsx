import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";

function Projects() {
  return (
    <div id="projects">
      <Tilte>Projects 🏹</Tilte>
      <ProjectsContainer>
        <ProjectItem>
          <div className="project-title">
            Chat-App
            <span>Secondary Text</span>
          </div>
          <div className="project-image">
            <img
              src="https://radesign.in/images/work-showcase/taylor/lead-image-taylor_desktop.png"
              alt="project"
            />
          </div>
        </ProjectItem>{" "}
        <ProjectItem>
          <div className="project-title">
            Chat-App
            <span>Secondary Text</span>
          </div>
          <div className="project-image">
            <img
              src="https://radesign.in/images/work-showcase/taylor/lead-image-taylor_desktop.png"
              alt="project"
            />
          </div>
        </ProjectItem>{" "}
        <ProjectItem>
          <div className="project-title">
            Chat-App
            <span>Secondary Text</span>
          </div>
          <div className="project-image">
            <img
              src="https://radesign.in/images/work-showcase/taylor/lead-image-taylor_desktop.png"
              alt="project"
            />
          </div>
        </ProjectItem>{" "}
        <ProjectItem>
          <div className="project-title">
            Chat-App
            <span>Secondary Text</span>
          </div>
          <div className="project-image">
            <img
              src="https://radesign.in/images/work-showcase/taylor/lead-image-taylor_desktop.png"
              alt="project"
            />
          </div>
        </ProjectItem>
      </ProjectsContainer>
    </div>
  );
}

const Tilte = styled.h2`
  text-align: left;
  margin: 1rem 0 3rem;
  padding: 0 3rem;
  @media (max-width: 908px) {
    width: 90%;
    margin: 0rem auto 2rem;
  }

  font-size: ${sizes.huge};
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 3rem;
  justify-content: space-between;
`;
const ProjectItem = styled.div`
  width: 47%;
  margin: 3rem 0;
  min-height: 20rem;
  .project-title {
    padding-left: 2rem;
    font-size: ${sizes.big};
    font-weight: bold;
    color: ${colors.main};
    margin-bottom: 2rem;
    align-self: center;
    border-left: 10px solid ${colors.secondary};
    span {
      font-weight: lighter;

      display: block;
      color: gray;
      font-size: ${sizes.medium};
    }
  }
  .project-image {
    width: 100%;
    padding: 1rem;
    background-color: black;
    overflow: hidden;
    img {
      width: 100%;
      &:hover {
        transform: scale(1.1) rotate(10deg);
      }
    }
  }
  @media (max-width: 908px) {
    width: 90%;
    margin: 1rem auto;
    .project-title {
      font-size: ${sizes.medium};

      span {
        font-weight: lighter;

        display: block;
        color: gray;
        font-size: ${sizes.small};
      }
    }
  }
`;
export default Projects;
