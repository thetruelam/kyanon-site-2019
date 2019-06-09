import Info from './Info'
import WeAre from './WeAre'
import styles from './kd.module.scss'
const KD = props => {
  return (
    <div className={`${styles.byNumber} bynumber`}>
      <WeAre className={styles.weAre} />
      <Info className={styles.fixedBottom} />
    </div>
  )
}
export default KD
