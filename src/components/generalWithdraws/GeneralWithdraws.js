import { useEffect, useState } from 'react';
import styles from './GeneralWithdraws.module.css';
import dateFormat from 'dateformat';

export default function GeneralWithdraws({ withdrawals }) {
const [active, setActive] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setActive((active + 1) % withdrawals.length);
  }, 16000);
  return () => clearInterval(interval);
}, [active, withdrawals.length]);

const { name } = withdrawals[active];

console.log(withdrawals)


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>${Math.floor(Math.random() * (200 - 400) + 400)}, 000</h3>
        <p>Recent Withdrawal</p>
        <p>{name}</p>
        <p>{dateFormat(new Date())}</p>
      </div>
    </div>
  )
}
