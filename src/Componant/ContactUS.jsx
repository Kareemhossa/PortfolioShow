import React from "react";
// styled reusable
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../Animation";

const ContactUS = () => {
  return (
    <Container
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      // style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>
              Send an email at
              <a href="mailto:kareemhosam18@gmail.com">
                : kareemhosam18@gmail.com
              </a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>
              Social Media : Twitter
              <a href="https://twitter.com/KareemHosamo" target="blank">
                {" "}
                @KareemHosamo
              </a>
            </h2>
          </Social>
        </Hide>
      </div>
    </Container>
  );
};

//Styled componants

const Container = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  font-weight: bold;
  min-height: 90vh;
  @media (max-width: 900px) {
    padding: 2rem;
    font-size: 1rem;
    text-align: center;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  @media (max-width: 900px) {
    margin-top: 5rem;
    text-align: center;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 900px) {
    background: transparent;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2rem;
  }
  a {
    color: #23d997;
    font-size: 2rem;
    transition: all 0.2 ease;
    &:hover {
      color: white;
    }
    @media (max-width: 900px) {
      /* display: block; */
      text-align: center;
      justify-content: center;
      h2 {
        margin: 2rem 0rem;
      }
    }
  }
`;
export default ContactUS;
