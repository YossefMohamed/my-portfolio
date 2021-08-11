import React from "react";
import styled from "styled-components";
import colors from "../util/colors";

function Footer() {
  return (
    <FooterContainer>
      <div>© 2021, Built With 💖 By Yossef Mohamed</div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  div {
      padding: 2rem 1rem;
      color: ${colors.light};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: 10px 10px ${colors.main};
      border: 3px solid ${colors.main};
      background-color: ${colors.secondary};
      width: 100%;
      /* transform: translateY(-10px); */
     
`;
export default Footer;
