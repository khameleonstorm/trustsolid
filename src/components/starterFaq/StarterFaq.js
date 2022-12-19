import styles from './StarterFaq.module.css';

// importing component text
import {  faqFirstText } from '../../utils/faq';

export default function StarterFaq() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={faqFirstText.image} alt="faq" />
      </div>
      <div className={styles.right}>
        <div className={styles.text}>
          <h1>{faqFirstText.title1}</h1>
          <p>{faqFirstText.text1}</p>
        </div>
        <div className={styles.text}>
          <h1>{faqFirstText.title2}</h1>
          <p>{faqFirstText.text2}</p>
        </div>
        <div className={styles.text}>
          <h1>{faqFirstText.title3}</h1>
          <p>{faqFirstText.text3}</p>
        </div>
      </div>
    </div>
  )
}
