import styles from "./heading.module.scss";
import { MyLinks } from "../myLinks/MyLinks";
import { Button } from "../button/Button";
import React from "react";

export const Heading = () => {
  return (
    <header className={styles.heading}>
        <MyLinks />
        <Button text={'Descargar CV'} />
    </header>
  );
};