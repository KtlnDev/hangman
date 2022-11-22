import React from 'react'
import BODY_PARTS from './BodyParts'
import styles from './HangmanDrawing.module.scss'

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
    return (
        <div className={styles.container}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className={styles.hook} />
            <div className={styles.upper} />
            <div className={styles.trunk} />
            <div className={styles.base} />
        </div>
    )
}

export default HangmanDrawing
