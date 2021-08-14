import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";

function Experiance() {
  const eleRef = React.useRef();
  const [eleHeight, setEleHeight] = React.useState("800");
  React.useEffect(() => {
    setEleHeight(eleRef.current.offsetHeight);
  }, []);
  return (
    <BackgroundEffect height={`${eleHeight}px`} id="experiance">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={colors.secondary}
            fillOpacity="1"
            d="M0,256L34.3,240C68.6,224,137,192,206,192C274.3,192,343,224,411,218.7C480,213,549,171,617,144C685.7,117,754,107,823,112C891.4,117,960,139,1029,165.3C1097.1,192,1166,224,1234,224C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <ScreenContainer ref={eleRef}>
          <div className="title">Experiance 💼</div>

          <FlexContainer>
            <div className="xp-item">
              <div className="xp-title">
                IT Engineer - Marvel international school
              </div>
              <div className="xp-date">July 2020 - Present</div>
              <div className="xp-content">
                responsible for studying their employer’s current computer
                system, identifying areas that need improvements or overhauls
                and implementing these changes. They will need to be skilled in
                assessment techniques and have the ability to design and install
                any necessary upgrades to the system.
              </div>
            </div>
            <div className="xp-item">
              <div className="xp-title">Basketball Coach - Future Academy</div>
              <div className="xp-date">May 2018 - Dec 2019</div>
              creating strategies for the team, instructing the players, and
              providing mentorship.having a solid knowledge of basketball and
              its rules, be able to develop winning strategies
            </div>
            <div className="xp-item">
              <div className="xp-title">FreeLance Web Developer</div>
              <div className="xp-date">July 2019 - Present</div>
              responsible for the coding, design and layout of a website
              according to a company's specifications. As the role takes into
              consideration user experience and function, a certain level of
              both graphic design and computer programming is necessary.
            </div>
            <div className="xp-item">
              <div className="xp-title">
                Math Assistant Teacher – M.S. Acadamy
              </div>
              <div className="xp-date">Dec 2018 - June 2019</div>
              conduct tutorials, grade assignments / quizzes as required by the
              instructor, offering office hours and related academic support
              activities such as proctoring exams.
            </div>
          </FlexContainer>
        </ScreenContainer>
      </div>
    </BackgroundEffect>
  );
}
const ScreenContainer = styled.div`
  padding: 2rem;
  background-color: ${colors.secondary};
  min-height: 60vh;

  .title {
    color: ${colors.light};
    text-align: left;
    width: 65%;
    transform: translateX(-1.5rem);
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 90%;
    }
    @media (max-width: 868px) {
      width: 90%;
    }
    font-size: ${sizes.huge};
  }
`;
const FlexContainer = styled.div`
  display: flex;

  margin: 5rem auto 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 65%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 868px) {
    width: 90%;
  }
  .xp-item {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    color: ${colors.light};
    border-left: 5px solid ${colors.light};
    padding: 0rem 0rem 4rem 2rem;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      height: 3rem;
      width: 3rem;
      box-shadow: 4px 4px black;
      transform: translate(-55%, -50%);
      background-color: ${colors.light};
      /* filter: brightness(75%); */

      top: 0;
      left: 0;
      border-radius: 50%;
    }
    .xp-title {
      font-size: ${sizes.medium};
      transform: translateY(-1rem);
      color: ${colors.light};
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: calc(${sizes.medium} + -5px);
      }
    }
    .xp-date {
      margin: 0rem 0 1rem;
      font-size: ${sizes.small};
      color: ${colors.light};
      filter: brightness(95%);
      @media (max-width: 768px) {
        font-size: calc(${sizes.small} + -5px);
      }
    }
    .xp-content {
      font-size: ${sizes.small};
      flex-grow: 1;
      @media (max-width: 768px) {
        font-size: calc(${sizes.small} + -5px);
      }
    }
  }
`;

const BackgroundEffect = styled.div`
  display: flex;

  position: relative;
  .background-effect {
    position: absolute;
    width: 100%;
    transform: translate(10px, 10px);
    z-index: -5;
  }
  svg {
    background-color: ${colors.light};
  }
  .screen-container {
    background: ${colors.main};

    top: 0;
    min-height: ${(props) => props.height};
    left: 0;
  }
`;

export default Experiance;
