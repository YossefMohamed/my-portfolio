import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";

function Nav() {
  const [navCheck, setNavCheck] = React.useState(0);

  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);
  const [pageHeight, setPageHeight] = React.useState(
    document.querySelector("body").innerWidth
  );
  console.log(pageHeight);
  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <FlexContainer>
      <Logo>YM..</Logo>
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
  font-size: ${sizes.medium};
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${colors.light};
  border-bottom: 5px solid ${colors.secondary};
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.2);
  color: black;
  z-index: 55;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  transition: all 100ms ease-in;
`;
const Logo = styled.div`
  font-size: ${sizes.big};
  font-weight: bolder;
  font-family: "Sofia", sans-serif;
  width: 20%;
`;
const NavList = styled.ul`
  align-items: center;
  list-style: none;
  padding: 0;
  font-size: ${sizes.small};
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
