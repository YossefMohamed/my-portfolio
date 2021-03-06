import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { Button } from "./about";

function Contact() {
  return (
    <ContactContainer id="content">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/yossef-mohamed-57996a181/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        <a
          href="https://github.com/YossefMohamed"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.facebook.com/yossef.mohamed.5095/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>{" "}
        <a
          href="https://www.instagram.com/yossefmohamed29/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>{" "}
      </div>

      <div className="mail-me">
        <div className="mail-me-text">
          {" "}
          Ready to take the next step and work together?
        </div>
        <Button className="mail-me-button">
          <a href="mailto:yossefmohamed112233@gmail.com">CONTACT ME</a>
        </Button>
      </div>
    </ContactContainer>
  );
}
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50vh;
  width: 100%;
  margin: 2rem 0 4rem;
  @media (max-width: 650px) {
    justify-content: center;
  }
  .mail-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    font-weight: bold;
    &-text {
      margin-bottom: 3rem;
      font-size: ${sizes.huge};
      @media (max-width: 650px) {
        text-align: center;
      }
      color: ${colors.secondary};
    }
    &-button {
      flex-basis: ${sizes.huge};
      a {
        color: ${colors.light};

        display: block;
      }
      &:hover {
        a {
          color: ${colors.secondary};
        }
      }
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
      margin-left: 1rem;
      margin-top: 2rem;
    }
  }
  @media (max-width: 750px) {
    .link {
      margin: 0 0.2rem;
      font-size: calc(${sizes.small} + -3px) !important;
    }
    flex-direction: column;
    margin: 1rem 0;
    margin-left: 0rem;
    justify-content: center;

    .social-links {
      margin-left: 0rem;

      width: 95%;
      flex-direction: row;
      justify-content: space-between;
    }
    .mail-me {
      width: 95%;
      margin: 3rem 0 4rem;
    }
  }
`;

export default Contact;
