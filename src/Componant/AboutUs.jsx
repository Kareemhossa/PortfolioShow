import React from "react";
import AboutSection from "./AboutPages/AboutSection ";
import ServicesSection from "./AboutPages/ServicesSection";
import FaqSection from "./AboutPages/FaqSection";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
