import React from "react";
import styled from "styled-components";
import colors from "../util/colors";

function Nav() {
  const [navCheck, setNavCheck] = React.useState(0);
  console.log(navCheck);
  return (
    <FlexContainer>
      <Logo>YM.</Logo>
      <NavList clicked={navCheck}>
        <NavListItem>
          <span>
            <i class="fas fa-user-tie"></i>
          </span>{" "}
          About
        </NavListItem>
        <NavListItem>
          {" "}
          <span>
            <i class="fas fa-drafting-compass"></i>{" "}
          </span>
          Skills
        </NavListItem>
        <NavListItem>
          <span>
            <i class="far fa-newspaper"></i>{" "}
          </span>
          Blog
        </NavListItem>
        <NavListItem>
          <span>
            {" "}
            <i class="far fa-id-card"></i>{" "}
          </span>{" "}
          Contact
        </NavListItem>
      </NavList>
      <NavCheck onClick={(e) => setNavCheck(navCheck ? 0 : 1)}>
        <i class="fas fa-bars"></i>
      </NavCheck>
    </FlexContainer>
  );
}

const NavCheck = styled.div`
  font-size: 1.5rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  border-bottom: 5px solid ${colors.secondary};
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
  color: black;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 300ms ease-in;
`;
const Logo = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  font-family: "Sofia", sans-serif;
  width: 20%;
`;
const NavList = styled.ul`
  align-items: center;
  list-style: none;
  padding: 0;
  font-size: 1rem;
  display: flex !important;
  height: 100%;
  margin: 0;
  flex-grow: 1;
  transition: inherit;

  @media (max-width: 768px) {
    flex-direction: column;
    border: 1px solid black;
    top: 100%;
    left: 0;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    position: absolute;
    transform: scale(${(props) => props.clicked});
    transform-origin: top;
    box-shadow: 10px 10px black;
    background: ${colors.light};
  }
  justify-content: flex-end;
`;
const NavListItem = styled.li`
  margin-left: 2rem;
  padding: 1rem 0.5rem;
  height: 100%;
  span {
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    margin: 0;
    border: 0.5px solid black;
    width: 100%;
    padding-left: 2rem;
  }
`;
export default Nav;
