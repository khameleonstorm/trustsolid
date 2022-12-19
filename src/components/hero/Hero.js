import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { FaPlayCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

export default function Hero({ title, subtitle, image, link, shrink }) {
  const { user } = useAuth();


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.buttons}>
          {!user && <Link className={styles.button1} to="/signUp">Get Started</Link>}
          {user && <Link className={styles.button1} to="/dashboard">Invest →</Link>}
          <a className={styles.button2} href={link}><FaPlayCircle size="2rem"/> Watch</a>
        </div>
      </div>
      <div className={shrink? styles.right2: styles.right}>
        <img src={image} alt="hero"/>
      </div>
    </div>
  )
}
