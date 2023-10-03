import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//image
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import { motion } from "framer-motion";
import { useScrollAnim } from "./ScrollAnim";
import {
  // scrollAnim,
  pageAnimation,
  photoAnim,
  titleAnim,
  lineAnim,
  sliderContainer,
  slider,
  fadeAnim,
} from "../Animation";

const OurWork = () => {
  const [element, controls] = useScrollAnim();
  const [element2, controls2] = useScrollAnim();
  return (
    <Work
      // style={{ background: "#000000", color: "white" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={titleAnim}> Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hiden>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Hiden>
        </Link>
      </Movie>

      <Movie
        ref={element}
        variants={fadeAnim}
        animate={controls}
        initial="hidden"
      >
        <h2> The Athlete</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <motion.img variants={photoAnim} src={athlete} alt="athlete" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fadeAnim}
        animate={controls2}
        initial="hidden"
      >
        <h2> The Theracer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
    </Work>
  );
};

//Styled componants
const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 8rem;
  overflow: hidden;
`;
const Movie = styled(motion.div)`
  margin-bottom: 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
    font-weight: 500;
  }
  .line {
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  img {
    width: 100%;
    min-height: 60vh;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const Hiden = styled.div`
  overflow: hidden;
`;

//Frame Animation componant
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
