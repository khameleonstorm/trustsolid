import styles from './BuiltWith.module.css';
import rocket from '../../assets/rocket-white.png';

export default function BuiltWith() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftTextWrapper}>
          <p className={styles.title}>Built By TRUSTSOLID</p>
          <h1 className={styles.subtitle1}>TRUSTSOLID Dashboard</h1>
          <p className={styles.subtitle2}>From Trade, Investment's, cryptographic to complex elements, you will find the full documentation.</p>
          <p className={styles.subtitle3}>Best Trading & Investment Platform. <span>→</span></p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={rocket} alt="rocket" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>
          <h1>Work with the rockets</h1>
          <p>TRUSTSOLID is based on an advanced sophisticated algorithm that allows generating unlimited binary and Minning signals which enable us to trade with most top 10 currency pairs in different time frames without limitations</p>
          <p className={styles.best}>Best Trading & Investment Platform. <span>→</span></p>
        </div>
      </div>
    </div> 
  )
}
