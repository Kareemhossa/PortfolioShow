import React, { useState } from "react";
// styled reusable
import { Containers } from "../../Styled/Styles";
import styled from "styled-components";
//Animation
import { motion, LayoutGroup } from "framer-motion";
import { useScrollAnim } from "../ScrollAnim";
import { scrollAnim } from "../../Animation";

const FaqSection = () => {
  const [element, controls] = useScrollAnim();
  return (
    <Container
      ref={element}
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily schedual?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </Toggle>

        <Toggle title="Different paymant">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </Toggle>

        <Toggle title="What Proudact do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Container>
  );
};

//Styled componants
const Container = styled(Containers)`
  display: block;
  /* span {
    display: block;
  } */
  h2 {
    padding-bottom: 2rem;
    font-weight: normal;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

//Toggle componants
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default FaqSection;
