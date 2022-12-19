import styles from './MiningOverview.module.css';
import activeUsers from '../../assets/active_users.svg';
import overview from '../../assets/mining_chart.svg';

export default function MiningOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={activeUsers} alt="active users"/>
      </div>
      <div className={styles.right}>
        <img src={overview} alt="mining overview"/>
      </div>
    </div>
  )
}
