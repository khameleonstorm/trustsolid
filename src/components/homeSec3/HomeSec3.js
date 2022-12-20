import WithdrawSlide from '../withdrawSlide/WithdrawSlide';
import styles from './HomeSec3.module.css';

export default function HomeSec3({ title, subtitle, withdrawals, bars }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <WithdrawSlide withdrawals={withdrawals}/>
      </div>
      <div className={styles.right}>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.bars}>
          {bars.map((bar, index) => (
            <div className={styles.barWrapper} key={index}>
              <div>
                <p>{bar.title}</p>
                <p>{bar.percent}</p>
              </div>
              <meter className={styles.bar} key={index} value={bar.value}>{bar.percent}</meter>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
