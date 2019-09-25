import React from 'react';
import styles from './index.module.scss';
import {GLOBAL} from "@/base/constants";

const LoginIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>{GLOBAL.title}</div>
        <p className={styles.description}>{GLOBAL.description}</p>
      </div>
    </div>
  );
};


export default LoginIntro;
