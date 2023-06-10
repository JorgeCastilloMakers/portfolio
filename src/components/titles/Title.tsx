import React from 'react'
import styles from './title.module.scss';

interface Props{
    title: string;
}

export const Title = ({title}: Props) => {
    return (
      <div className={styles.container}>
            <h2 className={styles.title}>{title}<span className={styles.point}>.</span></h2>
            <div className={styles.line}></div>
      </div>
    
  )
}
