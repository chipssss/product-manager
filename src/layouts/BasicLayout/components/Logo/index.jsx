import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo({ style }) {
  return (
    <div style={style} className={styles.container}>
      MIKE
    </div>
  );
}
