import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { useHistory } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

function Nav() {
  const [navCheck, setNavCheck] = React.useState(0);
  const [scrollingTop, setScrollingTop] = React.useState(0);
  const [pageHeight, setPageHeight] = React.useState(
    document.querySelector("body").offsetHeight
  );
  const history = useHistory();
  const onScroll = (e) => {
    if (window.pageYOffset) {
      setPageHeight(document.querySelector("body").offsetHeight);
      setScrollingTop(window.pageYOffset / (pageHeight / 100));
    }
  };
  const closeNav = () => setNavCheck(0);
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <FlexContainer>
      <BorderNav></BorderNav>

      <Logo>
        <span
          onClick={(e) => {
            closeNav();
            history.push("/");
          }}
        >
          YM..
        </span>
      </Logo>
      <NavList clicked={navCheck}>
        {" "}
        <NavListItem
          onClick={(e) => {
            if (history.location.pathname.split("/")[1]) history.push("/");
            closeNav();
          }}
        >
          <Link to="#experiance">
            <span>
              <i className="fas fa-user-tie"></i>
            </span>{" "}
            Experience
          </Link>
        </NavListItem>
        <NavListItem
          onClick={(e) => {
            if (history.location.pathname.split("/")[1]) history.push("/");
            closeNav();
          }}
        >
          <Link to="#projects">
            <span>
              <i className="fas fa-laptop"></i>
            </span>{" "}
            Projects
          </Link>
        </NavListItem>
        <NavListItem
          onClick={(e) => {
            if (history.location.pathname.split("/")[1]) history.push("/");
            closeNav();
          }}
        >
          {" "}
          <Link to="#skills">
            <span>
              <i className="fas fa-drafting-compass"></i>{" "}
            </span>
            Skills
          </Link>
        </NavListItem>
        <NavListItem
          onClick={(e) => {
            closeNav();
            history.push("/blog");
          }}
        >
          <span>
            <i className="far fa-newspaper"></i>{" "}
          </span>
          Blog
        </NavListItem>
        <NavListItem
          onClick={(e) => {
            if (history.location.pathname.split("/")[1]) history.push("/");
            closeNav();
          }}
        >
          <Link to="#content">
            <span>
              {" "}
              <i className="far fa-id-card"></i>{" "}
            </span>{" "}
            Contact
          </Link>
        </NavListItem>
      </NavList>
      <NavCheck onClick={(e) => setNavCheck(navCheck ? 0 : 1)}>
        <i className="fas fa-bars"></i>
      </NavCheck>
    </FlexContainer>
  );
}
const BorderNav = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  top: 100%;
  left: 0;
  border-radius: 0px 0px 5px 5px;
  background-color: ${colors.secondary};
`;
const NavCheck = styled.div`
  font-size: ${sizes.medium};
  display: none;
  cursor: pointer;
  @media (max-width: 925px) {
    display: block;
  }
`;
const FlexContainer = styled(motion.div)`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${colors.light};
  box-shadow: 0px 10px 6px 0px rgba(0, 0, 0, 0.2);
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
  span {
    cursor: pointer;
  }
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
  @media (max-width: 925px) {
    flex-direction: column;
    border: 1px solid black;
    top: 100%;
    left: 0;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    position: absolute;
    transform: scale(${(props) => props.clicked}) translateY(5px);
    transform-origin: top;
    box-shadow: 10px 10px black;
    background: ${colors.light};
  }
  justify-content: flex-end;
`;
const NavListItem = styled(motion.li)`
  margin-left: 2rem;
  padding: 1rem 0.5rem;
  border-bottom: 3px solid transparent;

  color: ${colors.main};
  height: 100%;
  font-weight: bold;
  cursor: pointer;
  span {
    margin: 0 10px;
  }
  @media (max-width: 925px) {
    margin: 0;
    border: 0.5px solid black;
    width: 100%;
    padding-left: 2rem;
  }
  &:hover {
    /* opacity: 0.75; */
    color: ${colors.secondary};
    * {
      color: ${colors.secondary};
    }
  }
`;
export default Nav;
