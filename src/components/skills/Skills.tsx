import React from 'react';
import styles from './skills.module.scss';

const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Adaptabilidad",
  "Liderazgo",
  "Pensamiento crítico",
  "Creatividad",
  "Empatía",
  "Gestión del tiempo",
  "Colaboración",
  "Flexibilidad",
  "Orientación al cliente",
  "Organización",
  "Capacidad de aprendizaje",
];
const tools = [
  "Vercel",
  "ChatGPT",
  "Windsurf",
  "Vibe coding",
  "v0",
  "Stripe",
  "MedusaJS",
  "FaustJS",
  "Notion",
  "Lovable",
  "Supabase"
];

export const Skills = () => {
  return (
    <div className={styles.skills_container}>
      {softSkills.map((item, index) => (
        <div className={styles.skill} key={index}>
          <h4 className={styles.skill_name}>{item}</h4>
        </div>
      ))}
    </div>
  )
}
export const Tools = () => {
  return (
    <div className={styles.skills_container}>
      {tools.map((item, index) => (
        <div className={styles.skill} key={index}>
          <h4 className={styles.skill_name}>{item}</h4>
        </div>
      ))}
    </div>
  )
}
