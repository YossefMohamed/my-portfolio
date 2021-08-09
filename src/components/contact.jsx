import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { Button } from "./about";

function Contact() {
  return (
    <ContactContainer>
      <div className="social-links">
        <div className="link">LinkedIn</div>
        <div className="link">FaceBook</div>
        <div className="link">Github</div>
        <div className="link">Instagram</div>
      </div>

      <div className="mail-me">
        <div className="mail-me-text">
          {" "}
          Ready to take the next step and work together?
        </div>
        <Button className="mail-me-button">CONTACT ME</Button>
      </div>
    </ContactContainer>
  );
}
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 75vh;
  width: 100%;
  .mail-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    font-weight: bold;
    &-text {
      margin-bottom: 3rem;
      font-size: ${sizes.huge};
      color: ${colors.secondary};
    }
    &-button {
      flex-basis: ${sizes.huge};
    }
  }
  .social-links {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .link {
      font-size: ${sizes.small};
      font-weight: bold;
      color: ${colors.secondary};
      margin: 1rem;
    }
  }
`;

export default Contact;
