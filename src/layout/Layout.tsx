import React, { FC, ReactNode } from 'react'
import styles from './layout.module.scss';

interface Props{
    children: ReactNode;
}


export const Layout: FC<Props> = ({children}) => {
  return (
      <div className={styles.container}>
        {children}  
        </div>
  )
}
