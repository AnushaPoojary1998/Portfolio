import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const headerSkillVariants = {
  visible: {
    rotate: [-120, 0],
    y: -10,
    x: 10,
    transition: {
      rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
        ease: "easeOut",
      },
    },
  },
  hover: {
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__header-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="speech-bubble">
              <p className="p-text">Hello, I am</p>
              <p className="head-text">Anusha</p>
              <span className="bubble-pointer"></span>
            </div>
    <div className="role-tag">FULLSTACK DEVELOPER</div>

          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <motion.img
            src={images.programmer}
            alt="profile_bg"
            whileInView={{ y: [-100, 0] }}
          />
          
        </motion.div>
      </div>
      
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.csharp, images.java, images.net, images.react].map((circle, index) => (
          <motion.div
            variants={headerSkillVariants}
            whileInView="visible"
            whileHover="hover"
            drag
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            dragElastic={0.1}
            className="circle-cmp app__flex"
            key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
