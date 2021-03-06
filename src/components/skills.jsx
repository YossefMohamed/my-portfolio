import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";


function Skills() {


  return (
    <SkillScreen id="skills" 
    >
      <h1>Skills 👨‍💻</h1>

      <FlexContainer>
        <SkillItem
        
        >
          {" "}
          <h2>
            <i className="fab fa-html5"></i>
          </h2>
        
        </SkillItem>
        <SkillItem
        >
          {" "}
          <h2>
            <i className="fab fa-css3-alt"></i>
          </h2>
          
        </SkillItem>
        <SkillItem
        >
          {" "}
          <h2>
            <span class="iconify" data-icon="simple-icons:graphql"></span>
          </h2>
        
        
        </SkillItem>{" "}
        <SkillItem
        >
          {" "}
          <h2>
            <span class="iconify" data-icon="bx:bxl-c-plus-plus"></span>
          </h2>
        
        
        </SkillItem>
        <SkillItem
        >
          {" "}
          <h2>
            <span class="iconify" data-icon="dashicons:database"></span>{" "}
          </h2>
         
         
        </SkillItem>{" "}
        <SkillItem
        >
          {" "}
          <h2>
            <i className="fab fa-react"></i>
          </h2>
        
        
        </SkillItem>
        <SkillItem
        >
          {" "}
          <h2>
            <i className="fab fa-js"></i>
          </h2>
         
         
        </SkillItem>
        <SkillItem
        >
          {" "}
          <h2>
            <i className="fab fa-node"></i>
          </h2>
          
        </SkillItem>
        <SkillItem
        >
          {" "}
          <h2>
            <i className="fab fa-python"></i>{" "}
          </h2>
         
         
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

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  /* border-radius: 5px; */
  padding: 2rem 0.5rem;
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
    font-size: calc(${sizes.huge} + ${sizes.big});
    color: ${colors.light};  
    transition:all 10ms !important;

  }
`;
export default Skills;
