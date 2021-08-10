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
    <BackgroundEffect height={`${eleHeight}px`} color="blue">
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
                The IT System Administrator has to design, organize, modify and
                support the organization's computer systems. These professionals
                have to upgrade and manage the software and hardware. The IT
                System Administrator should handle any issues related to Local
                Area Networks (LAN), Wide Area Networks, and Network segments.
              </div>
            </div>
            <div className="xp-item">
              <div className="xp-title">
                CREATIVE TECHNOLOGIST CO-OP – Mullen Lowe U.S.
              </div>
              <div className="xp-date">July 2015 - Present</div>
              Developed and maintained code for in-house and client websites
              utilizing HTML5, CSS3, Javascript, jQuery, PHP, and Wordpress.
              Tested front-end code in multiple browsers to ensure cross-browser
              compatability. Coordinated closely with other developers and
              digital producers to expedite projects. Clients included Lovesac,
              U.S. Cellular, JetBlue, and more.
            </div>
            <div className="xp-item">
              <div className="xp-title">
                CREATIVE TECHNOLOGIST CO-OP – Mullen Lowe U.S.
              </div>
              <div className="xp-date">July 2015 - Present</div>
              Developed and maintained code for in-house and client websites
              utilizing HTML5, CSS3, Javascript, jQuery, PHP, and Wordpress.
              Tested front-end code in multiple browsers to ensure cross-browser
              compatability. Coordinated closely with other developers and
              digital producers to expedite projects. Clients included Lovesac,
              U.S. Cellular, JetBlue, and more.
            </div>
            <div className="xp-item">
              <div className="xp-title">
                CREATIVE TECHNOLOGIST CO-OP – Mullen Lowe U.S.
              </div>
              <div className="xp-date">July 2015 - Present</div>
              Developed and maintained code for in-house and client websites
              utilizing HTML5, CSS3, Javascript, jQuery, PHP, and Wordpress.
              Tested front-end code in multiple browsers to ensure cross-browser
              compatability. Coordinated closely with other developers and
              digital producers to expedite projects. Clients included Lovesac,
              U.S. Cellular, JetBlue, and more.
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
    width: 60%;
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

  width: 60%;
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
    padding: 0rem 3rem 2.5rem;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      height: 3rem;
      width: 3rem;
      transform: translate(-55%, -50%);
      background-color: ${colors.light};
      filter: brightness(75%);

      top: 0;
      left: 0;
      border-radius: 50%;
    }
    .xp-title {
      font-size: ${sizes.medium};
      transform: translateY(-1.35rem);
      color: ${colors.light};
      font-weight: bold;
    }
    .xp-date {
      margin: 0rem 0 1rem;
      font-size: ${sizes.small};
      color: ${colors.light};
      filter: brightness(95%);
    }
    .xp-content {
      font-size: ${sizes.small};
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
