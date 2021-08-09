import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";

function Projects() {
  return (
    <div>
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

  font-size: ${sizes.huge};
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 3rem;
  justify-content: space-between;
`;
const ProjectItem = styled.div`
  width: 45%;
  margin: 3rem 0;
  min-height: 20rem;
  .project-title {
    padding-left: 2rem;
    font-size: ${sizes.big};
    color: ${colors.main};
    margin-bottom: 2rem;
    align-self: center;
    border-left: 13px solid ${colors.secondary};
    span {
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
`;
export default Projects;
