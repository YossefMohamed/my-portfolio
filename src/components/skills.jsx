import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Skills() {
  const [ref, InView] = useInView({
    threshold: 0,
  });
  return (
    <SkillScreen id="skills" ref={ref}>
      <h1>Skills 👨‍💻</h1>

      <FlexContainer>
        <SkillItem
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <i className="fab fa-html5"></i>
          </h2>
          <div className="skill-content">
            HTML is the standard markup language for Web pages. With HTML you
            can create your own Website.
          </div>
        </SkillItem>
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <i className="fab fa-css3-alt"></i>
          </h2>
          <div className="skill-content">
            CSS is the language we use to style an HTML document.CSS describes
            how HTML elements should be displayed.
          </div>
        </SkillItem>
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <span class="iconify" data-icon="simple-icons:graphql"></span>
          </h2>
          <div className="skill-content">
            A query language for APIs and a runtime for fulfilling those queries
            with your existing data,It's used to building Graph Api
          </div>
        </SkillItem>{" "}
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <span class="iconify" data-icon="bx:bxl-c-plus-plus"></span>
          </h2>
          <div className="skill-content">
            C++ is a powerful general-purpose programming language. It can be
            used to develop operating systems, browsers, games,
          </div>
        </SkillItem>
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <span class="iconify" data-icon="dashicons:database"></span>{" "}
          </h2>
          <div className="skill-content">
            A database is an organized collection of structured information
            There're two types NoSql "MonoDB" or SQL "MySQl"
          </div>
        </SkillItem>{" "}
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <i className="fab fa-react"></i>
          </h2>
          <div className="skill-content">
            React is a JavaScript library for building user interfaces. React is
            used to build single page applications. React is to create reusable
            UI.
          </div>
        </SkillItem>
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <i className="fab fa-js"></i>
          </h2>
          <div className="skill-content">
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-class functions.
          </div>
        </SkillItem>
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <i className="fab fa-node"></i>
          </h2>
          <div className="skill-content">
            Node.js is an open source server environment. Node.js allows you to
            run JavaScript on the server.
          </div>
        </SkillItem>
        <SkillItem
          ref={ref}
          animate={InView && { x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 10000000 }}
        >
          {" "}
          <h2>
            <i className="fab fa-python"></i>{" "}
          </h2>
          <div className="skill-content">
            Python is a powerful programming language used in a variety of
            professions, ranging from data science to web development.
          </div>
        </SkillItem>
      </FlexContainer>
    </SkillScreen>
  );
}

const SkillScreen = styled.div`
  min-height: 75vh;
  padding: 10rem 3rem;
  h1 {
    font-size: ${sizes.huge};
    text-align: left;
    @media (max-width: 650px) {
      font-size: ${sizes.big}!important;
    }
  }
  @media (max-width: 650px) {
    padding: 5rem 0rem;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-flow: row wrap;
  margin-top: 3rem;
  width: 100%;
  padding: 0rem 0 3rem;
  justify-content: space-between;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* border-radius: 5px; */
  padding: 2rem 1rem;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  /* min-height: 16rem; */
  color: ${colors.light};
  text-align: center;
  border: 5px solid ${colors.main};
  background-color: ${colors.secondary};
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0);
  /* font-weight: bold; */
  width: 32%;
  @media (max-width: 1108px) {
    width: 45%;
  }
  @media (max-width: 850px) {
    width: 95%;
  }
  font-size: ${sizes.small};
  &:hover {
    color: ${colors.secondary};
    border: 5px solid ${colors.secondary};

    background-color: ${colors.light};
    h2 {
      color: ${colors.secondary};
    }
  }
  /* flex-basis: 30%;
  flex-shrink: 0; */
  h2 {
    font-size: calc(${sizes.huge} + ${sizes.medium});
    padding: 0.5rem;
    color: ${colors.light};
  }
`;
export default Skills;
