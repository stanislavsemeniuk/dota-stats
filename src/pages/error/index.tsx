import React from 'react';
import { Link } from 'react-router-dom';

import styles from './error-page.module.css';

function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <h2 className={styles.title}>Oops!</h2>
      <h3 className={styles.semiTitle}>Page you are looking for does not exists</h3>
      <Link to="/" className={styles.link}>
        Go to main page
      </Link>
    </div>
  );
}

export { ErrorPage };
