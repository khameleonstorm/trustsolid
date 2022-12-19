import { Link } from 'react-router-dom';
import styles from './Learning.module.css';

export default function Learning() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>LEARNING LIKE A PRO</h1>
        <p>Become a Pro with these learning valuable skills. Start your course today. Join millions of learners already learning On TRUSTSOLID.</p>
      </div>
      <Link to='#' className={styles.button}>Start Learning</Link>
    </div>
  )
}
