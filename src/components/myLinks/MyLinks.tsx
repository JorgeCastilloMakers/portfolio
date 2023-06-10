import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";
import React from "react";


export const MyLinks = () => {
  return (
    <div className={styles.icons}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <a href='https://www.linkedin.com/in/jorge-ariel-castillo-frontend/' target="_blank" rel="nofollow">
          <AiFillLinkedin />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://github.com/JorgeCastilloMakers" target="_blank" rel="nofollow">
          <AiFillGithub  />
        </a>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://www.instagram.com/jorge.a.c/" target="_blank" rel="nofollow">
          <AiOutlineInstagram/>
        </a>
      </motion.span>
    </div>
  );
}
