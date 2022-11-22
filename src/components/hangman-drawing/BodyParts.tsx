import styles from './BodyParts.module.scss'

const HEAD = <div className={styles.head} />
const BODY = <div className={styles.body} />
const RIGHT_ARM = <div className={styles.rightArm} />
const LEFT_ARM = <div className={styles.leftArm} />
const RIGHT_LEG = <div className={styles.rightLeg} />
const LEFT_LEG = <div className={styles.leftLeg} />

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export default BODY_PARTS
