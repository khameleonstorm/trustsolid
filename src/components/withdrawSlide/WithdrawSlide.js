import styles from './WithdrawSlide.module.css';

export default function WithdrawSlide({withdrawals}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <h3>Name</h3>
        <h3>Amount</h3>
        <h3>Time</h3>
        </div>
        {withdrawals.map((withdrawal, i) =>
        <div className={styles.withdrawal} key={i}>
          <p>{withdrawal.name}</p>
          <p>${Math.floor(Math.random() * (200 - 400) + 400)}, 000</p>
          <p>{withdrawal.time}</p>
        </div>
        )}
      </div>
    </div>
  )
}
