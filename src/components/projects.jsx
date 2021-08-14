import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import projects from "../util/projects";
function Projects() {
  return (
    <div id="projects">
      <Title>Projects 🏹</Title>
      <ProjectsContainer>
        {projects.map((project, idx) => {
          return (
            <ProjectItem id={idx}>
              <div className="project-title">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.Title}{" "}
                </a>

                <span>{project.brief}</span>
              </div>{" "}
              <div className="project-image">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.picture} alt={project.Title} />
                </a>
              </div>
            </ProjectItem>
          );
        })}
      </ProjectsContainer>
    </div>
  );
}

const Title = styled.h2`
  text-align: left;
  margin: 1rem 0 3rem;
  font-size: ${sizes.huge};
  padding: 0 3rem;
  @media (max-width: 908px) {
    width: 90%;
    margin: 0rem 0 2rem;
    padding: 0;
    font-size: calc(${sizes.big} + 3px);
  }
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 3rem;
  justify-content: space-between;
  @media (max-width: 908px) {
    padding: 0;
  }
`;
const ProjectItem = styled.div`
  width: 47%;
  margin: 3rem 0;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 908px) {
    margin: 1rem 0 !important;
  }
  .project-title {
    padding-left: 2rem;
    font-size: ${sizes.big};
    font-weight: bold;
    color: ${colors.main};
    width: 100%;
    margin-bottom: 2rem;
    align-self: center;
    border-left: 10px solid ${colors.secondary};
    position: relative;
    span {
      font-weight: lighter;

      display: block;
      color: gray;
      font-size: ${sizes.medium};
    }
  }
  .project-image {
    width: 100%;
    border: 3px solid ${colors.main};
    box-shadow: 10px 10px ${colors.secondary};
    background-color: black;
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    position: relative;
    height: 100%;

    a {
      flex-grow: 1;
    }
    img {
      width: 100%;
      height: 100%;
      &:hover {
        transform: scale(1.3) rotate(5deg);
      }
    }
    .links {
      position: absolute;
      width: 100%;

      height: 30rem;
      background-color: red;
      z-index: 88;
    }
  }
  @media (max-width: 908px) {
    width: 95%;
    margin: 1.5rem auto;
    .project-title {
      font-size: ${sizes.medium};
      margin-bottom: 1rem;

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
