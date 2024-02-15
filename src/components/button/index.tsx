import React from 'react';

import styles from './button.module.css';

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}

export { Button };
