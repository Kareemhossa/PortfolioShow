import React from "react";
import home1 from "../../img/home1.png";
// styled reusable
import styled from "styled-components";
import { Containers, Description, Image, Hide } from "../../Styled/Styles";
//Animation
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, photoAnim } from "../../Animation";
import Wave from "../Wave";
const AboutSection = () => {
  return (
    <Container>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span> dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for any photography or videography ideas that you have
          professionals with amazing skills
        </motion.p>
        <motion.button variants={titleAnim}> Contact Us </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </Container>
  );
};
//Styled componants
const Container = styled(Containers)`
  margin-top: 50px;
`;

export default AboutSection;
