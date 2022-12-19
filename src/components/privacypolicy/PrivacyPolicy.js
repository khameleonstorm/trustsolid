import styles from './PrivacyPolicy.module.css';
import { privacyHero } from '../../utils/privacypolicy';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {privacyHero.texts.map((text, index) => (
          <div key={index} className={styles.textWrapper}>
            <h2>{text.title}</h2>
            <p>{text.text}</p>
          </div> 
        ))}
      </div>
    </div>
  )
}
