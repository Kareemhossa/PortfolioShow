import React from "react";
import clock from "../../img/clock.svg";
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";
import home2 from "../../img/home2.png";
// styled reusable
import { Containers, Description, Image } from "../../Styled/Styles";
import styled from "styled-components";
//Animation
import { useScrollAnim } from "../ScrollAnim";
import { scrollAnim } from "../../Animation";

const ServicesSection = () => {
  const [element, controls] = useScrollAnim();
  return (
    <Container
      ref={element}
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          High <span> quality</span> services
        </h2>
        <Crads>
          {/** clock card */}
          <Crad>
            <div className="icon ">
              <img src={clock} alt="clock" />
              <h3> Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet </p>
          </Crad>
          {/** diaphragm card */}
          <Crad>
            <div className="icon ">
              <img src={diaphragm} alt="diaphragm" />
              <h3> Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet </p>
          </Crad>
          {/** money card */}
          <Crad>
            <div className="icon ">
              <img src={money} alt="money" />
              <h3> Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet </p>
          </Crad>
          {/** teamwork card */}
          <Crad>
            <div className="icon ">
              <img src={teamwork} alt="teamwork" />
              <h3> Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet </p>
          </Crad>
        </Crads>
      </Description>
      <Image>
        <img src={home2} alt="home2" />
      </Image>
    </Container>
  );
};

//Styled componants

const Container = styled(Containers)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Crads = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    text-align: center;
    justify-content: center;
  }
`;
const Crad = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    background: white;
    border-radius: 8px;
    color: black;
    padding: 1rem;
    transition: all 0.3s ease;
    &:hover {
      background: #23d997;
      color: white;
    }
  }
`;

export default ServicesSection;
