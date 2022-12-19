import styles from './AboutUs.module.css';
import { aboutText1 } from '../../utils/aboutText';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{aboutText1.title}</h1>
      <div className={styles.about}>
        <div className={styles.left}>
          <h1>{aboutText1.title2}</h1>
          {aboutText1.text.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className={styles.right}>
          <img src={aboutText1.image} alt="about" />
        </div>
      </div>
    </div>
  )
}
