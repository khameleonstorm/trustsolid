import styles from './Copyright.module.css';

export default function Copyright({copyright}) {
  return (
    <div className={styles.container}>
      {copyright?.map((item, index) => (
        <p key={index} className={styles.term}>{item.text}</p>
        ))}
      <p className={styles.text}>© 2008 TRUSTSOLID. All rights reserved.</p>
    </div>
  )
}
