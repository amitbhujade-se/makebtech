import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection";
import AboutUsSection from "./About";
import DomainExpertise from "./DomainExp";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Facts from "./Facts";
import Clients from "./Clients";
import Popup from "./Popup";

const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = () => {
  return (
    <>
      <Popup />
      <RevealOnScroll><HeroSection /></RevealOnScroll>
      <RevealOnScroll delay={0.1}><AboutUsSection /></RevealOnScroll>
      <RevealOnScroll delay={0.2}><DomainExpertise /></RevealOnScroll>
      <RevealOnScroll delay={0.3}><Services /></RevealOnScroll>
      <RevealOnScroll delay={0.4}><WhyUs /></RevealOnScroll>
      <RevealOnScroll delay={0.5}><Facts /></RevealOnScroll>
      <RevealOnScroll delay={0.6}><Clients /></RevealOnScroll>
    </>
  );
};

export default Homepage;
