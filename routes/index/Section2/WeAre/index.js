import styles from './weare.module.scss'

const WeAre = props => {
  return (
    <div className={`${props.className} weare`}>
      <div className={styles.wrap}>
        <div className={styles.weAre}>We are</div>
        <div className={styles.wrapText}>
          <div className={styles.left}>
            A tribe of agile practitioners who value individuals and
            interactions, embrace changes and continuous improvement.
          </div>
          <div className={styles.space} />
          <div className={styles.right}>
            Applying best practices from Scrum and XP, we are committed to our
            client’s success with focus, commitment, openness and respect.
          </div>
        </div>
      </div>
    </div>
  )
}
export default WeAre
