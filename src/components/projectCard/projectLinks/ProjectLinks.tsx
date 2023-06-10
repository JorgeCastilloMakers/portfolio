import React from 'react';
import styles from './projectLinks.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from "react-icons/fi";

interface Props{
  github?: string;
  vercel: string;
}

export const ProjectLinks = ({github, vercel}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      {github && <a className={styles.icons} target="_blank" href={github}><AiFillGithub /></a>}
      <a className={styles.icons} target="_blank" href={vercel}><FiExternalLink /></a>
    </div>
  )
}
